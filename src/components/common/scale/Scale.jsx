import Rating from "@mui/material/Rating";
import SquareIcon from "@mui/icons-material/Square";
import { useState } from "react";
import "./scale.css";

const Scale = ({ handleAnswer, question }) => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <Rating
        name="customized-10"
        max={10}
        icon={
          <SquareIcon
            fontSize="inherit"
            sx={{ width: "74px", height: "74px" }}
          />
        }
        emptyIcon={<SquareIcon color="#F2F3F4" sx={{ width: "74px", height: "74px" }} />}
        size="100"
        sx={{ color: "#AB61E5" }}
        value={value}
        onChange={(event, newValue) => {
          handleAnswer({ question: question.label, answer: newValue });
          setValue(newValue);
        }}
      />
      <p className="rating">{value}/10</p>
    </div>
  );
};

export default Scale;
