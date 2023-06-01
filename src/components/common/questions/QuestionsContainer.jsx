import { useEffect, useState } from "react";
import Questions from "./Questions";
import axios from "axios";

const QuestionsContainer = ({ userSelected }) => {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0)

  useEffect(() => {
    const getData = async () => {
      const res = axios.get("http://localhost:5000/questions");
      const result = await res;
      setQuestions(result.data);
    };
    getData();
  }, []);

  const nextQuestion =  ()=>{
    if (questionNumber < questions.length-1){
      setQuestionNumber(questionNumber + 1)
    }
  }
  const previousQuestion = ()=>{
    if (questionNumber > 0){
      setQuestionNumber(questionNumber - 1) 
    }
  }

  return (
    <div>
      {questions.length > 0 ? (
        <Questions userSelected={userSelected} questions={questions}  questionNumber={questionNumber} nextQuestion={nextQuestion} previousQuestion={previousQuestion} />
      ) : (
        <img src="https://cdn.discordapp.com/attachments/1105824263975469079/1113808609193771142/loader.gif" alt="loading..." />
      )}
    </div>
  );
};

export default QuestionsContainer;
