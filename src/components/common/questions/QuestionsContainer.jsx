import { useEffect, useState } from "react";
import Questions from "./Questions";
import axios from "axios";

const QuestionsContainer = ({ userSelected }) => {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answer, setAnswer] = useState([]);
  console.log(answer);
  useEffect(() => {
    const getData = async () => {
      const res = axios.get("http://localhost:5000/questions");
      const result = await res;
      setQuestions(result.data);
    };
    getData();
  }, []);

  const handleAnswer = (value) => {
    let exist = answer.some((e) => e.question === value.question)
    if (exist) {
      let newArray = answer.map((e)=>{
        if(e.question === value.question){
          return {...e, answer:value.answer}
        } else{
          return e
        }
      })
      setAnswer(newArray)
    } else {
      setAnswer([...answer, value]);
    }
  };


  const calcularProgreso =
    questions.length > 0 ? ((questionNumber + 1) / questions.length) * 100 : 0;

  const nextQuestion = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(questionNumber + 1);
    }
  };
  const previousQuestion = () => {
    if (questionNumber > 0) {
      setQuestionNumber(questionNumber - 1);
    }
  };

  return (
    <div>
      {questions.length > 0 ? (
        <Questions
          userSelected={userSelected}
          questions={questions}
          questionNumber={questionNumber}
          nextQuestion={nextQuestion}
          previousQuestion={previousQuestion}
          calcularProgreso={calcularProgreso}
          length={questions.length}
          handleAnswer={handleAnswer}
        />
      ) : (
        <img
          src="https://cdn.discordapp.com/attachments/1105824263975469079/1113808609193771142/loader.gif"
          alt="loading..."
        />
      )}
    </div>
  );
};

export default QuestionsContainer;
