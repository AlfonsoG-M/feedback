import Scale from "./Scale";

const ScaleContainer = ({ question, handleAnswer  }) => {
  
  

  return (
    <div>
      <Scale handleAnswer={handleAnswer}
      question={question}/>
    </div>
  );
}

export default ScaleContainer