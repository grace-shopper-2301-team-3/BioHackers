import React from "react";
import { Link } from "react-router-dom";
import biohackersTheme from "../../app/theme";
import { ThemeProvider } from "@mui/material"

import Drawer from '@mui/material/Drawer';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";

const AdminSidebar = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
    <Drawer
      variant="permanent"
      open={true}
    >
      <List>
        <ListItemButton component={Link} to="/admin/home">
          <ListItemIcon><HomeRoundedIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={Link} to="/admin/dashboard">
          <ListItemIcon><InsightsRoundedIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/admin/orders">
          <ListItemIcon><MonetizationOnRoundedIcon /></ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton component={Link} to="/admin/products">
          <ListItemIcon><Inventory2RoundedIcon /></ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>
        <ListItemButton component={Link} to="/admin/users">
          <ListItemIcon><AccountCircleRoundedIcon /></ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
        <ListItemButton component={Link} to="/admin/payment-options">
          <ListItemIcon><CreditCardRoundedIcon /></ListItemIcon>
          <ListItemText primary="Payment Options" />
        </ListItemButton>
        <ListItemButton component={Link} to="/admin/discounts">
          <ListItemIcon><DiscountRoundedIcon /></ListItemIcon>
          <ListItemText primary="Discounts" />
        </ListItemButton>
      </List>
    </Drawer>
    </ThemeProvider>
  );
};

export default AdminSidebar;