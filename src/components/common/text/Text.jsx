import TextField from "@mui/material/TextField";
import "./text.css";
import { useState } from "react";

const Text = ({handleAnswer, question}) => {
  const [textValue, setTextValue] = useState("")
  return (
    <div className="textContainer">
      <TextField
        multiline
        fullWidth
        id="outlined-basic"
        label="Say something"
        variant="outlined"
        sx={{ width: 736, "& .MuiInputBase-root": { height: 231 } }}
        value={textValue}
        onChange={(event) => {
          handleAnswer({question: question.label, answer: event.target.value})
          setTextValue(event.target.value);
        }} 
      />
      
    </div>
  );
};

export default Text;
