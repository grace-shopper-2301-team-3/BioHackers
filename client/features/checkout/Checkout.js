import React, { useState } from "react";
import biohackersTheme from "../../app/theme";
import {
  ThemeProvider,
  Typography,
  Stepper,
  Step,
  StepButton,
  Button,
  Box,
} from "@mui/material";
import { MainContainer, NoBorderButton } from "../style/StyleGuide";
import AccountForm from "./AccountForm";
import OrderReview from "./OrderReview";
import StripeElementsWrapper from "./PaymentForm";
import ShippingForm from "./ShippingForm";
import Confirmation from "./Confirmation"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Checkout = () => {
  const [orderDetails, setOrderDetails] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleAccountForm = (username, password) => {

  }

  const handleNext = (data) => {
    setOrderDetails({ ...orderDetails, ...data });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AccountForm handleNext={handleNext} />;
      case 1:
        return <ShippingForm handleNext={handleNext} />;
      case 2:
        return <StripeElementsWrapper handleNext={handleNext} handleBack={handleBack} />;
      case 3:
        return (
          <OrderReview
            orderDetails={orderDetails}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 4:
        return <Confirmation handleNext={handleNext} handleBack={handleBack} />
      default:
        throw new Error("Unknown step");
    }
  };

  const steps = ["Account", "Shipping", "Payment", "Review", "Confirmation"];

  return (
    <ThemeProvider theme={biohackersTheme}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh + 120px)"
      }}>
        <MainContainer sx={{
          m: 4,
          px: 4,
          pb: 6,
          display: "flex",
          flexDirection: "column",
          border: "1px solid",
          borderImage:
            "linear-gradient(45deg, #7F00FF, #00bfff, #ff00ff) 1",
          boxShadow: "0 0px 20px #7F00FF",
        }}>
          <Typography variant="h2">Checkout</Typography>
          <Box sx={{ mt: 4, color: "primary.main" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => {
                const stepProps = {};
                const buttonProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepButton
                      onClick={() => setActiveStep(index)}
                      completed={activeStep > index}
                      {...buttonProps}
                    >
                      {label}
                    </StepButton>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
          <Box sx={{ mt: 4 }}>{getStepContent(activeStep)}</Box>
          {activeStep === steps.length ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "primary.main"
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
            </Box>
          ) : (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 4,
                  color: "primary.main",
                }}
              >
                {activeStep !== 0 && (
                  <Button
                    onClick={handleBack}
                    startIcon={<ArrowBackRoundedIcon />}
                  >
                    Back
                  </Button>
                )}
                <Button variant="contained" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Place Order" : "Next"}
                </Button>
              </Box>
            </Box>
          )}
        </MainContainer>
      </div>
    </ThemeProvider>
  );
};

export default Checkout;
