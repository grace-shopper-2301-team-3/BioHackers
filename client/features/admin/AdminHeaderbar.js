import React from "react";
import { Link } from "react-router-dom";
import { MainContainer } from "../style/StyleGuide";
import biohackersTheme from "../../app/theme";
import {
  ThemeProvider,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const AdminSidebar = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer sx={{ py: 4 }}>
        <Container sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "#AC6CFF" }}>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItemButton sx={{ flex: "1" }}>
            <ListItemIcon>
              <LeaderboardRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ flex: "1" }} />
          </ListItemButton>
          <ListItemButton sx={{ flex: "1" }}>
            <ListItemIcon>
              <AccountCircleRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Users" sx={{ flex: "1" }} />
          </ListItemButton>
          <ListItemButton sx={{ flex: "1" }}>
            <ListItemIcon>
              <ShoppingBagRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Products" sx={{ flex: "1" }} />
          </ListItemButton>
          <ListItemButton sx={{ flex: "1" }}>
            <ListItemIcon>
              <ShoppingCartRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" sx={{ flex: "1" }} />
          </ListItemButton>
          <ListItemButton sx={{ flex: "1" }}>
            <ListItemIcon>
              <PaymentRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Payments" sx={{ flex: "1" }} />
          </ListItemButton>
          <ListItemButton sx={{ flex: "1" }}>
            <ListItemIcon>
              <DiscountRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Discounts" sx={{ flex: "1" }} />
          </ListItemButton>
        </List>
          </Container>
        </MainContainer>
    </ThemeProvider>
  );
};

export default AdminSidebar;