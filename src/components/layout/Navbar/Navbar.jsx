import { Avatar, Badge, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { customTheme } from "../../../themeconfig";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/auth/authSlice";
import "./navbar.css";

const Navbar = () => {
  const { user } = useSelector((store) => store.authSlice);
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
        <Link
          style={{
            color: "#031323",
            fontWeight: 600,
            fontSize: "16px",
            padding: "10px"
          }}
        >
          Share Feedback
        </Link>
        <Badge badgeContent={4} sx={{ padding: "10px" }} color="primary">
          <Link
            style={{
              color: "#031323",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            My Feedback
          </Link>
        </Badge>
        <Badge badgeContent={4} color="primary" sx={{ padding: "10px" }}>
          <Link
            style={{
              color: "#031323",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Team Feedback
          </Link>
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
