import React from 'react'
import { Timer } from './Timer'
import Trivia from './Trivia'

const QuestionFragment = ({ setTimeOut, questionNumber, setQuestionNumber, questions }) => {
  return (
    <div className='question-fragment'>
      <div className="timer">
        <Timer
          setTimeOut={setTimeOut}
          questionNumber={questionNumber}
        />
      </div>
        <Trivia
          questions={questions}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setTimeOut={setTimeOut}
        />
    </div>
  )
}

export default QuestionFragment