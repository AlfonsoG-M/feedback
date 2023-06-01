import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import './shareFeedback.css'

const ShareFeedback = ({users, period, setPeriod, exists, fillOutfn}) => {
  return (
    <div className="homeDivContainer">
      <div className="titleContainer">
        <h3>Share Feedback</h3>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Feedback Period
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={period}
              label="Feedback Period"
              onChange={(e)=>setPeriod(e.target.value)}
              sx={{
                width: "342px",
              }}
            >
              <MenuItem value={"10-2022"}>October 2022</MenuItem>
              <MenuItem value={"11-2022"}>November 2022</MenuItem>
              <MenuItem value={"12-2022"}>December 2022</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="usersContainer">
        {users.map((user) => {
          return (
            <div key={user.id} className="avatarContainer">
              <div className="avatarInfo">
                <img src={user.avatarUrl} alt="avatar img" />
                <h6>{user.name}</h6>
              </div>
              {exists(user.id) ? (
                <Button sx={{ width: "200px", margin: "20px" }}>
                  view submission
                </Button>
              ) : (
                <Button sx={{ width: "200px", margin: "20px" }} onClick={()=>fillOutfn(user)}>
                  fill out
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ShareFeedback