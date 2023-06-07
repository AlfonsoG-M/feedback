import { useState } from 'react';
import './multipleChoice.css'

const MultipleChoice = ({question, handleAnswer}) => {
  const [answerSelected, setAnswerSelected] = useState("")
  return (
    <div className='questionContainer'>
      {question.options.map((e) => (
        <p
          key={e.value}
          onClick={() => {
            handleAnswer({question: question.label, answer: e.label})
            setAnswerSelected(e.label)
          }}
          className= {answerSelected === e.label ? "selectedAnswer" : "answer"}
        >
          {e.label}
        </p>
      ))}
    </div>
  );
};

export default MultipleChoice;