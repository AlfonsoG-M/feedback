import { useState } from "react";
import TeamFeedback from "./TeamFeedback";
import { useSelector } from "react-redux";

const TeamFeedbackContainer = () => {
  const { user } = useSelector((store) => store.authSlice);
  const [showAnswers, setShowAnswers] = useState(false);
  const [feedbackShown, setFeedbackShown] = useState({});

  const handleAnswers = (id) => {
    let userSelected = user.teamfeedbacks.find((user) => user.user.id === id);
    setFeedbackShown(userSelected);
    if ( feedbackShown?.user?.id === id ){
      setFeedbackShown({})
      setShowAnswers(false)
    } else {
      setShowAnswers(true)
    }
  };

  

  let data = user.teamfeedbacks;
  console.log("data", data);

  return (
    <div>
      <TeamFeedback
        data={data}
        handleAnswers={handleAnswers}
        showAnswers={showAnswers}
        feedbackShown={feedbackShown}
      />
    </div>
  );
};

export default TeamFeedbackContainer;
