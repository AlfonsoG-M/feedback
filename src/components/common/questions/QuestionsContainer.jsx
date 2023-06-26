import { useEffect, useState } from "react";
import Questions from "./Questions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { changeNotification, refreashUser } from "../../../store/auth/authSlice";

const QuestionsContainer = ({ userSelected, setShowQuestions }) => {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answer, setAnswer] = useState([]);
  const { user } = useSelector((store) => store.authSlice);
  useEffect(() => {
    const getData = async () => {
      const res = axios.get("http://localhost:5001/questions");
      const result = await res;
      setQuestions(result.data);
    };
    getData();
  }, []);

 const dispatch = useDispatch()

  const handleSubmit = () => {
    successSubmit();

    let data = {
      ...userSelected,
      teamfeedbacks: [
        ...userSelected.teamfeedbacks,
        {
          user: { id: user.id, name: user.name, avatar: user.avatarUrl },
          answer,
        },
      ],
    }
    axios.patch(`http://localhost:5001/user/${userSelected.id}`, data);

    let data2 = {
      ...user,
      myFeedbacks:[
        ...user.myFeedbacks,
        {
          user: {id: userSelected.id, name: userSelected.name, avatar: userSelected.avatarUrl},
          answer,
        }
      ]
    }
    
    let newInfoUser = axios.patch(`http://localhost:5001/user/${user.id}`, data2);
    newInfoUser.then((res)=>{
      dispatch(refreashUser(res.data) )
      dispatch(changeNotification())
    })
    setShowQuestions(false)
    
  };

  const handleAnswer = (value) => {
    let exist = answer.some((e) => e.question === value.question);
    if (exist) {
      let newArray = answer.map((e) => {
        if (e.question === value.question) {
          return { ...e, answer: value.answer };
        } else {
          return e;
        }
      });
      setAnswer(newArray);
    } else {
      setAnswer([...answer, value]);
    }
  };

  const successSubmit = () => {
    swal({
      icon: "success",
      title: "You have completed your feedback",
      text: "Thank's for taking the time to answer this questions",
    });
  };

  const warning = () => {
    swal({
      icon: "warning",
      title: "You can't skip this question",
      text: "Please take your time and answer it.",
    });
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
          handleSubmit={handleSubmit}
          warning={warning}
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
