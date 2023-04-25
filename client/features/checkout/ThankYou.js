import React from "react";
import { ThemeProvider, Typography } from "@mui/material";
import biohackersTheme from "../../app/theme";
import { MainContainer, NoBorderButton } from "../style/StyleGuide";

const ThankYou = ({ orderNumber }) => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer sx={{ m: 4, px: 4, alignContent: "center" }}>
        <Typography
          variant="h2"
          sx={{
            background:
              "-webkit-linear-gradient(15deg, #7F00FF, #ff00ff, #00bfff)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            textAlign: "center",
          }}
        >
          Congratulations! You're officially a BioHacker!
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Thank you for choosing BioHacker for your health and wellbeing needs.
          We're excited to be a part of your journey towards optimal performance
          and longevity.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Your order is on its way, and we can't wait to hear about the amazing
          results you'll achieve with BioHacker.
        </Typography>
        <Typography variant="body1" sx={{ mb: 6 }}>
          Thank you for being a part of our community of forward-thinking health
          enthusiasts!
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Order Number: XXXXX
        </Typography>
        <Typography variant="body1" sx={{ mb: 6 }}>
          Your receipt is in your account{" "}
          <NoBorderButton
            href="/account"
            sx={{ textTransform: "uppercase", color: "secondary.dark" }}
          >
            here
          </NoBorderButton>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          If you have any questions, please call{" "}
          <NoBorderButton sx={{ color: "secondary.dark" }}>
            888-888-8888
          </NoBorderButton>{" "}
          or email at{" "}
          <NoBorderButton sx={{ color: "secondary.dark" }}>
            care@biohackers.com
          </NoBorderButton>
        </Typography>
      </MainContainer>
    </ThemeProvider>
  );
};

export default ThankYou;
