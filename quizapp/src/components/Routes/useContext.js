import { createContext, useState } from "react";

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState([]);

  const resetQuiz = () => {
    setScore(0);
    setUserAnswers([]);
  };


  return (
    <ScoreContext.Provider value={{ score, setScore, userAnswers, setUserAnswers, resetQuiz }}>
      {children}
    </ScoreContext.Provider>
  );

};

export { ScoreContext, ScoreProvider }




