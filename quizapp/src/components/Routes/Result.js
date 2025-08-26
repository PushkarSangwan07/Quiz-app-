import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScoreContext } from './useContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Result() {
  const { score, userAnswers, resetQuiz } = useContext(ScoreContext);
  const navigate = useNavigate();

  const handleRestart = () => {
    resetQuiz();
    navigate('/');
  };

  const totalQuestions = userAnswers.length;
  const correctAnswers = userAnswers.filter(item => item.isCorrect).length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <div className="App">
      <h1>Quiz Results</h1>
      <h2>Your Score: {score} / {totalQuestions}</h2>
      <hr />

      <div style={{ width: 150, margin: '0 auto 30px auto' }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: '#333',
            pathColor: '#28a745',
            trailColor: '#f8d7da',
            textSize: '18px',
          })}
        />
      </div>
      <h4 style={{ textAlign: 'center' }}>
        {correctAnswers} correct out of {totalQuestions} questions
      </h4>

      <h3>Review:</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {userAnswers.map((item, index) => (
          <li
            key={index}
            className={`review-card ${item.isCorrect ? 'correct' : 'incorrect'}`}
          >
            <strong>Q{index + 1}:</strong> {item.question}<br />
            <strong>Your answer:</strong> {item.selected}<br />
            {!item.isCorrect && (
              <>
                <strong>Correct answer:</strong> {item.correct}
              </>
            )}
          </li>
        ))}
      </ul>

      <button onClick={handleRestart}>Restart Quiz</button>
    </div>
  );
}

export default Result;

