import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "./home.css";
import { useState } from "react";
import data from "../../../../src/db/db.json";
import { BorderAllOutlined } from "@mui/icons-material";

const Home = () => {
  const [period, setPeriod] = useState("");
  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

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
              onChange={handleChange}
              sx={{
                width: "342px",
              }}
            >
              <MenuItem value={102022}>October 2022</MenuItem>
              <MenuItem value={112022}>November 2022</MenuItem>
              <MenuItem value={122022}>December 2022</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="usersContainer">
        {data.user.map((user) => {
          return (
            <div key={user.id} className="avatarContainer">
              <div className="avatarInfo">
                <img src={user.avatarUrl} alt="avatar img" />
                <h6>{user.name}</h6>
              </div>
              <Button sx={{ width: "200px", margin: "30px"}}>boton</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
