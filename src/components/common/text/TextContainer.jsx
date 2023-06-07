import Text from "./Text";

const TextContainer = ({ question, handleAnswer }) => {
  return (
    <div>
      <Text
        handleAnswer={handleAnswer}
        question={question}
      />
    </div>
  );
};

export default TextContainer;
