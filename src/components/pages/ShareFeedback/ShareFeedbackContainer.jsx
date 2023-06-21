import { useEffect, useState } from "react";
import ShareFeedback from "./ShareFeedback"
import axios from "axios";
import { useSelector } from "react-redux";
import QuestionsContainer from "../../common/questions/QuestionsContainer";

const ShareFeedbackContainer = () => {
  const [period, setPeriod] = useState("");
  const [users, setUsers] = useState([])
  const [showQuestions, setShowQuestions] = useState(false)
  const [userSelected, setUserSelected] = useState({})

  const fillOutfn = (userForFeedback)=>{
    setShowQuestions(true)
    setUserSelected(userForFeedback)
  }

  const {user} = useSelector((store)=> store.authSlice)
  console.log(user);

  const exists = (id)=>{
    let isInArray = user.myFeedbacks.some((user)=> user.id === id)
    return isInArray
  }

  useEffect(()=>{
    const getdata = async()=>{
      const res = await axios.get("http://localhost:5000/user")
      let usersFiltered = res.data.filter((users)=> users.name !== user.name)
      setUsers(usersFiltered)
    }
    getdata()
  },[user.name])

  return (
    <div>
      {
        !showQuestions ? <ShareFeedback
        users={users}
        period={period}
        setPeriod={setPeriod}
        exists={exists}
        fillOutfn={fillOutfn}
      /> : <QuestionsContainer userSelected={userSelected}  />
      }

    </div>
  )
}

export default ShareFeedbackContainer