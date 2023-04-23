import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainContainer } from "../style/StyleGuide";
import biohackersTheme from "../../app/theme";
import {
  ThemeProvider,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../app/store";
import { fetchSingleUser, selectSingleUser } from "../users/userSlice";

const AdminSidebar = () => {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.me.id);
  const { username } = useSelector((state) => state.auth.me);

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch]);

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer sx={{ py: 4 }}>
        <Container sx={{ py: 4 }}>
          <Typography variant="h1">Administrator View</Typography>{" "}
          <Typography variant="h4">
            Welcome, <b>{username} </b>
          </Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-evenly",
            backgroundColor: "#AC6CFF",
          }}
        >
          <List sx={{ display: "flex", flexDirection: "row" }}>
            <Link to={`/admin`}>
              <ListItemButton sx={{ flex: "1", px: "25px" }}>
                <ListItemIcon>
                  <LeaderboardRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  primaryTypographyProps={{ variant: "body2" }}
                  sx={{ flex: "1" }}
                />
              </ListItemButton>
            </Link>
            <Link to={`/admin/users`}>
              <ListItemButton sx={{ flex: "1", px: "25px" }}>
                <ListItemIcon>
                  <AccountCircleRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Users"
                  primaryTypographyProps={{ variant: "body2" }}
                  sx={{ flex: "1" }}
                />
              </ListItemButton>
            </Link>
            <Link to={`/admin/products`}>
              <ListItemButton sx={{ flex: "1", px: "25px" }}>
                <ListItemIcon>
                  <ShoppingBagRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Products"
                  primaryTypographyProps={{ variant: "body2" }}
                  sx={{ flex: "1" }}
                />
              </ListItemButton>
            </Link>
            <Link to={`/admin/orders`}>
              <ListItemButton sx={{ flex: "1", px: "25px" }}>
                <ListItemIcon>
                  <ShoppingCartRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Orders"
                  primaryTypographyProps={{ variant: "body2" }}
                  sx={{ flex: "1" }}
                />
              </ListItemButton>
            </Link>
            <Link to={`/admin/payments`}>
              <ListItemButton sx={{ flex: "1", px: "25px" }}>
                <ListItemIcon>
                  <PaymentRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Payments"
                  primaryTypographyProps={{ variant: "body2" }}
                  sx={{ flex: "1" }}
                />
              </ListItemButton>
            </Link>
            <Link to={`/admin/discounts`}>
              <ListItemButton sx={{ flex: "1", px: "25px" }}>
                <ListItemIcon>
                  <DiscountRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Discounts"
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

export default AdminSidebar;
