import { useEffect, useState } from "react";
import Questions from "./Questions";
import axios from "axios";
import { useSelector } from "react-redux";

const QuestionsContainer = ({ userSelected }) => {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answer, setAnswer] = useState([]);
 const {user} = useSelector((store)=>store.authSlice)
  useEffect(() => {
    const getData = async () => {
      const res = axios.get("http://localhost:5000/questions");
      const result = await res;
      setQuestions(result.data);
    };
    getData();
  }, []);
 
  const handleSubmit= ()=>{

    alert("enviado")
    
    let data = {
      ...userSelected, 
      teamfeedbacks: [
        ...userSelected.teamfeedbacks, {user: {id: user.id, name: user.name, avatar: user.avatarUrl}, answer}
      ]
    }
    axios.patch(`http://localhost:5000/user/${userSelected.id}`, data)
  }

  
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
          handleSubmit = {handleSubmit}
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
