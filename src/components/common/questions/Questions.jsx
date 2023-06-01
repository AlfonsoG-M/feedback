import { Button } from "@mui/material";
import MultipleChoiceContainer from "../multiplechoice/MultipleChoiceContainer";
import ScaleContainer from "../scale/ScaleContainer";
import TextContainer from "../text/TextContainer";
import "./questions.css";
import { Link, useNavigate } from "react-router-dom";

const Questions = ({
  userSelected,
  questions,
  questionNumber,
  nextQuestion,
  previousQuestion,
}) => {
  const navigate = useNavigate();
  return (
    <div className="questionsContainer">
      <Link className="goBack" to={navigate - 1}>BACK</Link>
      <div className="questionsHeader">
        <div>
          <h2 className="questionTitle">{questions[questionNumber].label}</h2>
          <p>Share your feedback for {userSelected.name}</p>
        </div>
        <img
          className="avatarImg"
          src={userSelected.avatarUrl}
          alt="avatar img"
        />
      </div>
      <div>
        <div>
          {questions[questionNumber].type === "scale" && (
            <ScaleContainer question={questions[questionNumber]} />
          )}
          {questions[questionNumber].type === "text" && (
            <TextContainer question={questions[questionNumber]} />
          )}
          {questions[questionNumber].type === "multipleChoice" && (
            <MultipleChoiceContainer question={questions[questionNumber]} />
          )}
        </div>
      </div>
      <div>
        <Button onClick={previousQuestion}>Previous</Button>
        <Button>Skip</Button>
        <Button onClick={nextQuestion}>Next</Button>
      </div>
    </div>
  );
};

export default Questions;
