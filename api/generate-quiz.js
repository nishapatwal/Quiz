export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const API_KEY = process.env.GEMINI_API_KEY;

  if (!API_KEY) {
    return res.status(503).json({ error: 'Gemini API key is not configured.' });
  }

  try {
    const { topic, difficulty, count } = req.body || {};

    if (typeof topic !== 'string' || !topic.trim() || topic.length > 180) {
      return res.status(400).json({ error: 'Please provide a valid topic.' });
    }

    const n = Number(count);

    if (![5, 10, 15, 20].includes(n)) {
      return res.status(400).json({ error: 'Choose 5, 10, 15 or 20 questions.' });
    }

    if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
      return res.status(400).json({ error: 'Invalid difficulty selection.' });
    }

    const prompt = `Create exactly ${n} original multiple-choice quiz questions about the topic: ${topic.trim()}. Difficulty: ${difficulty}. Use four distinct options per question and exactly one correct answer. Provide a concise educational explanation. Output only valid JSON with this shape: {"questions":[{"question":"...","options":["...","...","...","..."],"correctIndex":0,"explanation":"..."}]}. correctIndex must be an integer 0-3. Avoid ambiguity, and don't include markdown fences.`;

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + encodeURIComponent(API_KEY),
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.7
          }
        })
      }
    );

    const raw = await response.json();

    if (!response.ok) {
      return res.status(502).json({
        error: raw?.error?.message || 'Gemini request failed.'
      });
    }

    const text = raw?.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('');

    if (!text) {
      return res.status(502).json({ error: 'Gemini returned an empty response.' });
    }

    let parsed;

    try {
      parsed = JSON.parse(text);
    } catch {
      return res.status(502).json({ error: 'Could not parse generated quiz. Please retry.' });
    }

    const qs = parsed.questions;

    if (
      !Array.isArray(qs) ||
      qs.length !== n ||
      qs.some(q =>
        typeof q.question !== 'string' ||
        !Array.isArray(q.options) ||
        q.options.length !== 4 ||
        !Number.isInteger(q.correctIndex) ||
        q.correctIndex < 0 ||
        q.correctIndex > 3
      )
    ) {
      return res.status(502).json({ error: 'Generated quiz did not pass validation. Please retry.' });
    }

    return res.status(200).json({ questions: qs });
  } catch (err) {
    console.error('Quiz generation error:', err.message);
    return res.status(500).json({ error: 'Server error while generating quiz.' });
  }
}
