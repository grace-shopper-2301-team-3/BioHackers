import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import biohackersTheme from "../../app/theme";
import { styled } from "@mui/material/styles";
import { ThemeProvider, Container, Typography, Box } from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import UserHeaderBar from "./UserHeaderBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HelpIcon from "@mui/icons-material/Help";

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "20px",
};

const boxStyle = {
  width: "100%",
  borderRadius: "20px",
  padding: "70px 55px",
  color: "white",
  textAlign: "center",
};

const iconStyle = {
  fontSize: "80px",
  margin: "0 auto", // horizontally center the icon
  display: "block", // make sure the margin auto works
};

const UserProfile = () => {
  const { firstName, username } = useSelector((state) => state.auth.me);

  const handleBoxHover = (e) => {
    e.target.style.backgroundColor = "#AC6CFF"; // change the background color on hover
  };

  const handleBoxLeave = (e) => {
    e.target.style.backgroundColor = "#7F00FF"; // change the background color when leaving hover
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer>
        <UserHeaderBar />
        <Container>
          <Typography variant="h4" component="h2">
            Welcome, {username}!
          </Typography>
        </Container>
        <Container style={containerStyle} sx={{ my: "35px" }}>
          <Box
            sx={{ backgroundColor: "#7F00FF" }}
            style={boxStyle}
            onMouseEnter={handleBoxHover}
            onMouseLeave={handleBoxLeave}
          >
            <Link>
              <Typography variant="body2">Wishlist</Typography>
              <FavoriteIcon sx={iconStyle} />
            </Link>
          </Box>
          <Box
            sx={{ backgroundColor: "#7F00FF" }}
            style={boxStyle}
            onMouseEnter={handleBoxHover}
            onMouseLeave={handleBoxLeave}
          >
            <Link>
              <Typography variant="body2">F.A.Q</Typography>
              <HelpIcon sx={iconStyle} />
            </Link>
          </Box>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default UserProfile;
