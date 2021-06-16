import React from 'react';

import QuestionCard from './components/QuestionCard.component'
import { useState } from 'react';
import {Difficulty, fetchQuizQuestion, QuestionState} from './API';


type AnwerObject = {
  question: string;
  answers: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;
const App=()=> {
  const[loading, setLoading] = useState(false);
  const [questions, setQuestions]= useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnwerObject[]>([]);
  const [scrore, setScrore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  console.log(questions)
  const startQuiz= async()=>{
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestion(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScrore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>)=>{

  }

  const nextQuestion =()=>{

  }

  return (
    <div>
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS? (
        <button className="start" onClick={startQuiz}>
          Start
        </button>
        ) : null}
      {!gameOver ? <p className="scrore"> Score: </p> : null}
      {loading ? <p>Loading Questions...</p> : null}
      {!loading && !gameOver && (
        <QuestionCard
          questionNum={number + 1}
          totalQuestion={TOTAL_QUESTIONS}
          questions={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number]: undefined}
          callback={checkAnswer}
        />
      )}
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
