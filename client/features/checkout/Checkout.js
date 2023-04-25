import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Typography } from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Checkout = () => {
  const steps = ["Account", "Shipping", "Payment", "Review"];

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer sx={{ m: 4, px: 4 }}>
        <Typography variant="h2">Checkout</Typography>
        {/* Back Cart - Guest/Sign In - Shipping - Payment & Billing - Review => Thank You Page */}
      </MainContainer>
    </ThemeProvider>
  );
};

export default Checkout;
