import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScoreContext } from './useContext'


function Page2() {

  const navigate = useNavigate()
  const { score, setScore, userAnswers, setUserAnswers } = useContext(ScoreContext);
  const [submit, setSubmit] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const answer = "0"

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
        question: " What is 5 - 5 ?",
        selected: submit,
        correct: answer,
        isCorrect,
      }
    ]);

    setIsSubmitted(true);
  };

  const clearSubmit = () => {

    if (!isSubmitted) return;

    const updatedAnswers = [...userAnswers]
    const last = updatedAnswers.pop()

    if (last && last.isCorrect) {
      setScore(score - 1)
    }

    setUserAnswers(updatedAnswers)
    setSubmit("")
    setIsSubmitted(false)

  }

  return (
    <>
      <div className="App">
        <h3>Q2. What is 5 - 5 ?</h3>
        <label>
          <input type="radio" value="0" name='quiz' onChange={(e) => setSubmit(e.target.value)} />0
        </label>
        <br /><br />

        <label>
          <input type="radio" value="25" name='quiz' onChange={(e) => setSubmit(e.target.value)} />25
        </label>
        <br /><br />

        <label>
          <input type="radio" value="10" name='quiz' onChange={(e) => setSubmit(e.target.value)} />10
        </label>
        <br /><br />

        <label>
          <input type="radio" value="1" name='quiz' onChange={(e) => setSubmit(e.target.value)} />1
        </label>
        <br /><br />


        <button onClick={handleInput} disabled={isSubmitted} >Submit</button>
        <br /><br />

        <button onClick={clearSubmit} disabled={!isSubmitted} >Clear Submit</button>

        <button onClick={() => navigate("/page3")} disabled={!isSubmitted} >Next </button>

      </div>
    </>

  )
}

export default Page2