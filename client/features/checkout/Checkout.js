import React, { useState } from "react";
import biohackersTheme from "../../app/theme";
import { useNavigate } from "react-router-dom";
import {
  ThemeProvider,
  Typography,
  Stepper,
  Step,
  StepButton,
  Button,
  Box,
  Container,
} from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import AccountForm from "./AccountForm";
import OrderReview from "./OrderReview";
import StripeElementsWrapper from "./PaymentForm";
import ShippingForm from "./ShippingForm";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const Checkout = () => {
  const [orderDetails, setOrderDetails] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate("/confirmation");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
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
        return (
          <StripeElementsWrapper
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <OrderReview
            orderDetails={orderDetails}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  const steps = ["Account", "Shipping", "Payment", "Review"];

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer sx={{ position: "relative" }}>
        <Container
          sx={{
            position: "relative",
            overflow: "hidden",
            mt: 15,
            mb: 10,
            px: 4,
            pb: 6,
            display: "flex",
            flexDirection: "column",
            border: "1px solid",
            borderImage: "linear-gradient(45deg, #7F00FF, #00bfff, #ff00ff) 1",
            boxShadow: "0 0px 20px #7F00FF",
          }}
        >
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
            <div>
              <Typography>All steps completed</Typography>
              <Button onClick={() => setActiveStep(0)}>Reset</Button>
            </div>
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
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Checkout;
