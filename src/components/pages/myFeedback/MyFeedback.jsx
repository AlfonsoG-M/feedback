import { Rating } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";

const MyFeedback = ({ data, handleAnswers, showAnswers, feedbackShown }) => {
  return (
    <div className="teamfeedbackContainer">
      <h3 className="teamFeedbackTitle">My Feedback</h3>
      <div className="feedbacksDisplayed">
        <h5 className="teamFeedbackH5">Feedback Given</h5>
        <div style={{display: "flex"}}>
        <div className="mapContainer">
          {data.map((user) => {
            return (
              <div
                key={user.user.id}
                onClick={() => handleAnswers(user.user.id) }
                className="avatarMapContainer"
                style={{}}
              >
                <img className="avatarImg" src={user.user.avatar} alt="" />
                <p className="avatarName">{user.user.name}</p>
              </div>
            );
          })}
          </div>
          {showAnswers && (
            <div className="qAndAContainer">
              <h3>
                {feedbackShown.user.name}
                {"'s Feedback"}{" "}
              </h3>
              {feedbackShown.answer.map((res) => {
                return (
                  <div key={res.question} className="qAndADiv">
                    <p className="questions">{res.question}</p>
                    {res.answer === "skipped" && (
                      <p className="skippedAnswers">
                        {res.answer}
                      </p>
                    )}
                    {res.answer != "skipped" &&
                      typeof res.answer != "number" && (
                        <p className="answers">{res.answer}</p>
                      )}
                    {typeof res.answer === "number" && (
                      <Rating
                        name="customized-10"
                        max={10}
                        readOnly
                        icon={
                          <SquareIcon
                            fontSize="inherit"
                            sx={{ width: "33.91px", height: "35.92px" }}
                          />
                        }
                        emptyIcon={
                          <SquareIcon
                            color="#F2F3F4"
                            sx={{ width: "33.91px", height: "35.92px" }}
                          />
                        }
                        size="100"
                        sx={{ color: "#AB61E5", alignSelf:"center" }}
                        value={res.answer}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
          </div>
        
      </div>
    </div>
  )
}

export default MyFeedback