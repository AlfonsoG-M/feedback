import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import "./login.css";
import imgH from "../../../Assets/image/h.jpg";
import Footer from "../../layout/Footer/Footer";

const Login = ({ loginFn, handleChange, users }) => {
  return (
    <div className="loginContainer">
      <Box
        className="containerForm"
        sx={{
          width: {
            xs: "70%",
            sm: "40%",
            md: "25%",
          },
        }}
      >
        <Box className="titleLogin">
          <img src={imgH} alt="" />
          <Typography variant="h4" fontWeight={700}>
            HONESTO
          </Typography>
        </Box>
        <Box className="buttomLoginContainer">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Login as</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={users.name || ""}
              label="Login as"
              onChange={handleChange}
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={loginFn} fullWidth>
            Login
          </Button>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Login;
