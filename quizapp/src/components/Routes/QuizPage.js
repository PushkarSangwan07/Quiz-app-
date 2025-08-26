import React, { useContext, useState } from 'react';
import { ScoreContext } from './useContext'; // Importing the context
import { useNavigate } from 'react-router-dom';

function QuizPage() {
  const { score, setScore, userAnswers, setUserAnswers, resetQuiz } = useContext(ScoreContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const navigate = useNavigate();

  const questions = [
    {
      question: "Which of the following is NOT a programming language?",
      options: ["Python", "JavaScript", "HTML", "Java"],
      correct: "HTML",
    },
    {
      question: "Who is the CEO of Tesla?",
      options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Sundar Pichai"],
      correct: "Elon Musk",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correct: "Tokyo",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Osmium", "Ozone", "Oxygenium"],
      correct: "Oxygen",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
      correct: "Mount Everest",
    },
  ];

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleClearSubmission = () => {
    setSelectedAnswer(''); // Clear selected answer
  };

  const handleSubmit = () => {
    const current = questions[currentQuestion];
    const isCorrect = selectedAnswer === current.correct;

    setUserAnswers([
      ...userAnswers,
      {
        question: current.question,
        selected: selectedAnswer,
        correct: current.correct,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      navigate('/result');
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      <h2>{questions[currentQuestion]?.question}</h2>
      <div className="options">
        {questions[currentQuestion]?.options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleAnswerSelection(option)}
            className={selectedAnswer === option ? 'selected' : ''}
            style={{
              cursor: 'pointer',
              padding: '10px',
              border: '1px solid #ccc',
              margin: '5px',
              borderRadius: '5px',
            }}
          >
            {option}
          </div>
        ))}
      </div>

      <div className="buttons">
        <button onClick={handleSubmit} disabled={!selectedAnswer}>Submit Answer</button>
        <button onClick={handleClearSubmission} disabled={!selectedAnswer}>Clear Submission</button>
      </div>

      <p>Question {currentQuestion + 1} of {questions.length}</p>
    </div>
  );
}

export default QuizPage;
