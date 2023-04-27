import React, {useState, useEffect} from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { MainContainer, NoBorderButton } from "../style/StyleGuide";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Confirmation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
    setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
    }, []);
    
    if (isLoading) {
      return (
      <ThemeProvider theme={biohackersTheme}>
      <MainContainer>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 15 }}>
      <img src="https://media1.giphy.com/media/26BRGoqbUQvk8nwTC/giphy.gif?cid=ecf05e471uvc0cwnhhljadjb8o275660p7viem6rwt2bygft&ep=v1_gifs_search&rid=giphy.gif&ct=g" style={{ width: "100%" }}/>
      <Typography
            variant="h2"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "-webkit-linear-gradient(45deg, #7F00FF, #ff00ff, #00bfff)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              textAlign: "center",
            }}
          >
            Confirming Your Order...
          </Typography>
      </Box>
      </MainContainer>
      </ThemeProvider>
      );
      }
      
      
  return (
    <ThemeProvider theme={biohackersTheme}>
      
      <MainContainer sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            mt: 15,
            mb: 10,
            px: 4,
            pb: 6,
            textAlign: "center",
            itemAlign: "center",
            alignContent: "center",
            border: "2px solid",
            borderImage: "linear-gradient(45deg, #7F00FF, #00bfff, #ff00ff) 1",
            boxShadow: "0 0px 20px #7F00FF",
          }}
        >
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
          <Typography variant="body1" sx={{ mb: 2, textAlign: "center" }}>
            Thank you for choosing BioHacker for your health and wellbeing
            needs. We're excited to be a part of your journey towards optimal
            performance and longevity.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: "center" }}>
            Your order is on its way, and we can't wait to hear about the
            amazing results you'll achieve with BioHacker.
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, textAlign: "center" }}>
            Thank you for being a part of our community of forward-thinking
            health enthusiasts!
          </Typography>
          <ShoppingCartRoundedIcon sx={{ fontSize: 60 }} />
          <Typography variant="body1" sx={{ mb: 2 }}>
            Order Number: XXXXX
          </Typography>
          <Typography variant="body1" sx={{ mb: 6 }}>
            Your receipt is in your account{" "}
            <Link to="/users/profile">
              <NoBorderButton
                href="/account"
                sx={{ textTransform: "uppercase", color: "secondary.dark" }}
              >
                here
              </NoBorderButton>
            </Link>
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
        </Box>
      </MainContainer>
    </ThemeProvider>
  );
};
export default Confirmation;
