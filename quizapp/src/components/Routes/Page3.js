import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScoreContext } from './useContext'

function Page3() {
  const navigate = useNavigate()
  const { score, setScore, userAnswers, setUserAnswers } = useContext(ScoreContext);
  const [submit, setSubmit] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const answer = "5"


  const handleInput = () => {
    if (isSubmitted) return;

    if (!submit) {
      alert("Please select an answer before submitting.");
      return;
    }

    const isCorrect = submit === answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setUserAnswers([
      ...userAnswers,
      {
        question: " What is 2.5 + 2.5 ?",
        selected: submit,
        correct: answer,
        isCorrect,
      }
    ]);

    setIsSubmitted(true);
  };

  const clearSubmit = () => {
    if (!isSubmitted) return;

    const updatedAnswers = [...userAnswers];
    const last = updatedAnswers.pop();

    if (last && last.isCorrect) {
      setScore(score - 1);
    }

    setUserAnswers(updatedAnswers);
    setSubmit("");
    setIsSubmitted(false);
  };


  return (
    <>
      <div className="App">
        <h3>Q3. What is 2.5 + 2.5 ?</h3>
        <label>
          <input type="radio" value="0" name='quiz' onChange={(e) => setSubmit(e.target.value)} />0
        </label>
        <br /><br />

        <label>
          <input type="radio" value="4" name='quiz' onChange={(e) => setSubmit(e.target.value)} />4
        </label>
        <br /><br />

        <label>
          <input type="radio" value="10" name='quiz' onChange={(e) => setSubmit(e.target.value)} />10
        </label>
        <br /><br />

        <label>
          <input type="radio" value="5" name='quiz' onChange={(e) => setSubmit(e.target.value)} />5
        </label>
        <br /><br />


        <button onClick={handleInput} disabled={isSubmitted}    >Submit</button>
        <br /><br />

        <button onClick={clearSubmit} disabled={!isSubmitted}>Clear Submit </button>



        <button onClick={() => navigate("/page4")} disabled={!isSubmitted} >Next </button>

      </div>
    </>
  )
}

export default Page3