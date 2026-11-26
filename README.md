# Quizly — AI Quiz Studio

A light-themed topic-based multiple-choice quiz application powered by Gemini AI.

## Features
- Generate 5, 10, 15 or 20 MCQs for any topic
- Easy, Medium or Hard difficulty
- Configurable question timer or no timer
- Four options and one correct answer per question
- Answer feedback and explanations
- Score, accuracy and elapsed time results
- Answer review after finishing
- Responsive light UI
- API key kept server-side

## Run locally
1. Install Node.js.
2. In this project directory run `npm install`.
3. Copy `.env.example` to `.env` and add your Gemini API key.
4. Run `npm start`.
5. Open `http://localhost:3000`.

## Environment
`GEMINI_API_KEY` is required and must be kept in the server-side `.env`, never in frontend JavaScript or committed to Git.

## Deployment
This Express app is designed to run on a Node-compatible host (e.g. Render or Railway). It is not configured as a static-only Vercel deployment.
