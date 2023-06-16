import { Button } from "@mui/material";
import MultipleChoiceContainer from "../multiplechoice/MultipleChoiceContainer";
import ScaleContainer from "../scale/ScaleContainer";
import TextContainer from "../text/TextContainer";
import "./questions.css";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Questions = ({
  userSelected,
  questions,
  questionNumber,
  nextQuestion,
  previousQuestion,
  calcularProgreso,
  length,
  handleAnswer,
  handleSubmit
}) => {
  const navigate = useNavigate();

  return (
    <div className="questionsContainer">
      <Link className="goBack" to={navigate - 1}>
        BACK
      </Link>
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
            <ScaleContainer handleAnswer={handleAnswer} question={questions[questionNumber]} />
          )}
          {questions[questionNumber].type === "text" && (
            <TextContainer handleAnswer={handleAnswer} question={questions[questionNumber]} />
          )}
          {questions[questionNumber].type === "multipleChoice" && (
            <MultipleChoiceContainer handleAnswer={handleAnswer} question={questions[questionNumber]} />
          )}
        </div>
      </div>
      <div className="buttonsContainer">
        <Button
          onClick={previousQuestion}
          sx={{
            background: "white",
            color: "#031323",
            ":hover": { background: "#ACB1B6", color: "white" },
          }}
        >
          Previous
        </Button>
        <Button sx={{
            background: "white",
            color: "#031323",
            ":hover": { background: "#ACB1B6", color: "white" },
          }}>Skip</Button>
        <Button onClick={
          ((questionNumber+1) === questions.length) ? handleSubmit : nextQuestion
        } sx={{
            background: "white",
            color: "#031323",
            ":hover": { background: "#AB61E5", color: "white" },
          }}>
            {
              questions.length === questionNumber+1 ? "Submit" : "Next"
            }
          </Button>

      </div>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={calcularProgreso}
          color="third"
        />
      </Box>
      <div className="bottomContainer">
        <p>QUESTIONS COMPLETED</p>
        <p>
          {questionNumber + 1} / {length}
        </p>
      </div>
    </div>
  );
};

export default Questions;
