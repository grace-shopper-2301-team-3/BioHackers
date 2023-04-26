import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import biohackersTheme from "../../app/theme";
import { styled } from "@mui/material/styles";
import {
  ThemeProvider,
  Container,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { MainContainer } from "../style/StyleGuide";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const UserHeaderBar = () => {
  const { firstName, username } = useSelector((state) => state.auth.me);

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer>
        <Container
          sx={{
            display: "flex",
            gap: "10px",
            alignContent: "space-evenly",
            justifyContent: "space-evenly",
            backgroundColor: "#AC6CFF",
          }}
        >
          <List sx={{ display: "flex", flexDirection: "row" }}>
            <Link to={`/users/:id`}>
              <ListItemButton sx={{ flex: "1", px: "25px" }}>
                <ListItemIcon>
                  <AccountCircleRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="My Info"
                  primaryTypographyProps={{ variant: "body2" }}
                  sx={{ flex: "1" }}
                />
              </ListItemButton>
            </Link>

            <Link to={`/users/:id/edit`}>
              <ListItemButton sx={{ flex: "1", px: "25px" }}>
                <ListItemIcon>
                  <ModeEditOutlineRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Edit Profile"
                  primaryTypographyProps={{ variant: "body2" }}
                  sx={{ flex: "1" }}
                />
              </ListItemButton>
            </Link>

            <Link>
              <ListItemButton sx={{ flex: "1", px: "25px" }}>
                <ListItemIcon>
                  <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Payment"
                  primaryTypographyProps={{ variant: "body2" }}
                  sx={{ flex: "1" }}
                />
              </ListItemButton>
            </Link>

            <Link>
              <ListItemButton sx={{ flex: "1", px: "25px" }}>
                <ListItemIcon>
                  <AddLocationIcon />
                </ListItemIcon>
                <ListItemText
                  primary="My Addresses"
                  primaryTypographyProps={{ variant: "body2" }}
                  sx={{ flex: "1" }}
                />
              </ListItemButton>
            </Link>

            <Link>
              <ListItemButton sx={{ flex: "1", px: "25px" }}>
                <ListItemIcon>
                  <LocalShippingIcon />
                </ListItemIcon>
                <ListItemText
                  primary="My Orders"
                  primaryTypographyProps={{ variant: "body2" }}
                  sx={{ flex: "1" }}
                />
              </ListItemButton>
            </Link>
          </List>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default UserHeaderBar;
