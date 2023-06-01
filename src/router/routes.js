import ShareFeedbackContainer from "../components/pages/ShareFeedback/ShareFeedbackContainer";
import MyFeedbackContainer from "../components/pages/myFeedback/MyFeedbackContainer";
import TeamFeedbackContainer from "../components/pages/teamFeedback/TeamFeedbackContainer";

export const routes = [
    {
        id: "shareFeedback",
        path: "/",
        Element: ShareFeedbackContainer
    },
    {
        id: "shareFeedback",
        path: "/my-feedback",
        Element: MyFeedbackContainer
    },
    {
        id: "shareFeedback",
        path: "/team-feedback",
        Element: TeamFeedbackContainer
    }
]