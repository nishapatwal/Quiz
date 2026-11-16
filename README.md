# Quber

An interactive web-based quiz application built using HTML, CSS, and Vanilla JavaScript. The application provides a timed quiz experience with automatic answer validation, progress tracking, score calculation, instant feedback, and a final performance summary.

## Features

* Start and restart quiz functionality
* 10 predefined quiz questions
* Multiple-choice questions
* 90-second timer for each question
* Automatic timeout handling
* Question progress indicator
* Real-time score tracking
* Automatic answer validation
* Correct and incorrect answer highlighting
* Displays the correct answer when an answer is wrong
* Automatic transition to the next question
* Final score and percentage calculation
* Performance breakdown
* High-score celebration for scores of 80% or above
* Responsive and modern dark-themed UI
* Reduced-motion support for accessibility

## Tech Stack

| Technology     | Purpose                                                       |
| -------------- | ------------------------------------------------------------- |
| **HTML5**      | Page structure and quiz screens                               |
| **CSS3**       | Styling, responsive layout, animations, timer and progress UI |
| **JavaScript** | Quiz logic, timer, answer validation, scoring and navigation  |
| **Git**        | Version control                                               |
| **GitHub**     | Repository hosting                                            |

### Frontend

**HTML5 + CSS3 + Vanilla JavaScript**

The project does not use a frontend framework such as React or Angular. The application is implemented using native browser technologies.

## Main Modules

### 1. Start Screen

The application begins with a simple start screen containing a **"Let's Start the Quiz"** button.

### 2. Quiz Module

The quiz displays:

* Current question
* Four multiple-choice options
* Question progress
* Countdown timer
* Current score
* Next button

Questions and their correct answers are stored in the JavaScript `QUESTIONS` array.

### 3. Timer Module

Each question has a **90-second countdown timer**.

The timer:

* Starts when a question is displayed
* Updates every second
* Shows remaining time
* Changes visual state when time becomes low
* Automatically handles unanswered questions when the timer reaches zero

### 4. Answer Validation

When the user selects an answer, JavaScript compares the selected option with the correct answer.

The application provides immediate visual feedback:

* Green highlight for the correct answer
* Red highlight for an incorrect selected answer
* Correct answer displayed when the selected answer is wrong

### 5. Score Management

The application automatically calculates the user's score.

For example:

```text
Score: 7/10
Percentage: 70%
```

### 6. Results Module

After completing all questions, the application displays:

* Final score
* Percentage
* Correct-answer percentage bar
* Incorrect-answer percentage bar
* High-score celebration
* Play Again button

## Project Structure

```text
Automated_Quiz_Contest/
│
├── indexquiz.html
├── style.css
├── script.js
└── README.md
```

### File Description

**indexquiz.html**

Contains the structure of:

* Start screen
* Quiz screen
* Timer
* Question area
* Answer options
* Score display
* Results screen

**style.css**

Contains:

* Dark-themed UI
* Responsive layout
* Quiz card styling
* Answer option states
* Timer visualization
* Progress bar
* Buttons
* Animations
* Accessibility-related reduced-motion support

**script.js**

Contains the core application logic:

* Quiz questions
* Quiz state management
* Timer
* Question rendering
* Answer selection
* Answer validation
* Score calculation
* Feedback
* Results generation
* Quiz restart functionality

## How to Run

No server or database is required.

### 1. Clone the Repository

```bash
git clone https://github.com/nishapatwal/Quiz.git
```

### 2. Open the Project

Navigate to:

```text
Automated_Quiz_Contest/
```

### 3. Run the Application

Open:

```text
indexquiz.html
```

in any modern web browser.

You can also use **VS Code Live Server** for development.

## Quiz Flow

```text
Start Quiz
    ↓
Display Question
    ↓
Start 90-Second Timer
    ↓
Select Answer
    ↓
Validate Answer
    ↓
Update Score
    ↓
Show Feedback
    ↓
Next Question
    ↓
Repeat
    ↓
Calculate Final Score
    ↓
Display Results
```

## Key JavaScript Concepts Used

This project demonstrates practical use of:

* Arrays and objects
* DOM manipulation
* Event listeners
* Functions
* Conditional statements
* Loops
* `setInterval()`
* `setTimeout()`
* `clearInterval()`
* Dynamic HTML element creation
* Radio buttons
* State management
* CSS class manipulation
* CSS custom properties

## Future Improvements

The current version stores questions directly in JavaScript. Future versions could include:

* User login and registration
* Admin dashboard
* Dynamic question management
* Database integration
* Randomized questions
* Multiple quiz categories
* Difficulty levels
* Global leaderboard
* User performance history
* Question bank
* Negative marking
* Multiplayer quiz mode
* API-based questions
* Backend integration

## Learning Outcomes

Through this project, I gained practical experience in:

* Building interactive frontend applications
* DOM manipulation using JavaScript
* Implementing timers and event-driven functionality
* Managing application state
* Creating responsive user interfaces
* Implementing automatic scoring and validation
* Designing user feedback mechanisms
* Structuring a small-scale web application

## Author

**Nisha Patwal**

GitHub:
https://github.com/nishapatwal

## License

This project was developed for educational and learning purposes.


