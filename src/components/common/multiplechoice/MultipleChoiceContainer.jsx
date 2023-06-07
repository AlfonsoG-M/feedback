import MultipleChoice from "./MultipleChoice";

const MultipleChoiceContainer = ({ question, handleAnswer  }) => {


  return (
    <MultipleChoice
      handleAnswer={handleAnswer}
      question={question}
    />
  );
};

export default MultipleChoiceContainer;