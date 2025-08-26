import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ScoreContext } from './useContext'

function Page1() {
  const navigate = useNavigate()
  const { score, setScore, userAnswers, setUserAnswers } = useContext(ScoreContext)
  const [submit, setSubmit] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const answer = "4"


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
        question: "If 2 + 2 = x, then find the value of x?",
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
    <div className="App">

      <h1>This is a Quiz app</h1>
      <hr />

      <h3> Q1.  If 2 + 2 = x ,Then find the value of x ?</h3>


      <label>
        <input type="radio" value="3" name='quiz' checked={submit === "3"} onChange={(e) => setSubmit(e.target.value)} />3
      </label>
      <br /><br />

      <label>
        <input type="radio" value="4" name='quiz' checked={submit === "4"} onChange={(e) => setSubmit(e.target.value)} />4
      </label>
      <br /><br />

      <label>
        <input type="radio" value="7" name='quiz' checked={submit === "7"} onChange={(e) => setSubmit(e.target.value)} />7
      </label>
      <br /><br />

      <label>
        <input type="radio" value="9" name='quiz' checked={submit === "9"} onChange={(e) => setSubmit(e.target.value)} />9
      </label>
      <br /><br />


      <button onClick={(handleInput)} disabled={isSubmitted}   >Submit</button>

      <br /><br />

      <button onClick={clearSubmit} disabled={!isSubmitted}>Clear Submit</button>


      <button onClick={() => navigate("/page2")} disabled={!isSubmitted}>Next</button>




    </div>

  )
}

export default Page1