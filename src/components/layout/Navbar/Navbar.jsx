import { Avatar, Badge, Box, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { customTheme } from "../../../themeconfig";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/auth/authSlice";
import "./navbar.css";

const Navbar = () => {
  const { user, notification } = useSelector((store) => store.authSlice);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: "100%",
        height: "75px",
        backgroundColor: customTheme.palette.primary.navbar,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "25%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          to={"/"}
          style={{
            color: "black",
            fontSize: "1.5rem",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Honesto
        </Link>
      </Box>
      <Box
        sx={{
          width: "60%",
          display: "flex",
          gap: "50px",
        }}
      >
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? "active" : "notActive";
          }}
        >
          Share Feedback
        </NavLink>
        <Badge badgeContent={notification ? 1 : 0}  color="primary" sx={{padding:"10px"}}>
          <NavLink
            to={"/my-feedback"}
            className={({ isActive }) => {
              return isActive ? "active" : "notActive";
            }}
          >
            My Feedback
          </NavLink>
        </Badge>
        <Badge badgeContent={4} color="primary">
          <NavLink
            to={"/team-feedback"}
            className={({ isActive }) => {
              return isActive ? "active" : "notActive";
            }}
          >
            Team Feedback
          </NavLink>
        </Badge>
      </Box>
      <Box
        sx={{
          width: "15%",
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        {/* foto */}
        <Avatar alt="Remy Sharp" src={user.avatarUrl} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
          }}
        >
          <Typography variant="body1">{user.name}</Typography>
          <Typography
            mt={"-10px"}
            variant="body2"
            onClick={() => dispatch(logout())}
          >
            Logout
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
