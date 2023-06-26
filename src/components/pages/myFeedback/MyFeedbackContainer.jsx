import { useDispatch, useSelector } from "react-redux"
import MyFeedback from "./MyFeedback"
import { useEffect, useState } from "react";
import { changeNotification } from "../../../store/auth/authSlice";

const MyFeedbackContainer = () => {
  const {user} = useSelector((store)=>store.authSlice)
  const [showAnswers, setShowAnswers] = useState(false);
  const [feedbackShown, setFeedbackShown] = useState({});
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(changeNotification())
  },[dispatch])

  const handleAnswers = (id) => {
    let userSelected = user.myFeedbacks.find((user) => user.user.id === id);
    setFeedbackShown(userSelected);
    if ( feedbackShown?.user?.id === id ){
      setFeedbackShown({})
      setShowAnswers(false)
    } else {
      setShowAnswers(true)
    }
  };
  
  

  let data = user.myFeedbacks;
  console.log("data", data);
  return (
    <div>
        <MyFeedback data={data}
        handleAnswers={handleAnswers}
        showAnswers={showAnswers}
        feedbackShown={feedbackShown}/>
    </div>
  )
}

export default MyFeedbackContainer