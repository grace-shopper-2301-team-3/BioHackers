import React, { useState } from "react";
import biohackersTheme from "../../app/theme";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  ThemeProvider,
  Stepper,
  Step,
  StepButton,
  Button,
  Box,
} from "@mui/material";
import { MainContainer, NoBorderButton } from "../style/StyleGuide";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { createPaymentIntent } from '../stripe/stripeSlice';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import '../../../public/style.css'

const stripePromise = loadStripe('pk_test_51N0lUGBjXVRQFHi21S4Hf6GuMOaxIlvmK4o87X5CWTnov8gziEQ969azIkSsqaTwJt5blCs5C7dJg0Mm70FZmqMo00j31Z2ZL9');

const PaymentForm = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const { paymentIntent, error } = useSelector((state) => state.stripe);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
      payment_method: {
        card: cardElement,
      },
    });

    setIsLoading(false);

    if (error) {
      console.log(error);
    } else {
      console.log(paymentIntent);
    }
  };

  const handleCreatePaymentIntent = () => {
    dispatch(createPaymentIntent());
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <Box sx={{ mx: 14, p: 4, display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Payment
        </Typography>
        <FormControl
          component="fieldset"
          variant="outlined"
          color="primary.main"
          onSubmit={handleSubmit}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                mr: 4,
              }}
            >
              <RadioGroup aria-label="payment-method" name="payment-method" row sx={{ mb: 2 }}>
                <FormControlLabel
                  value="credit-card"
                  control={<Radio />}
                  label="Credit Card"
                />
              </RadioGroup>
              <FormControl variant="outlined" fullWidth>
                <Box sx={{ mb: 2 }}>
                  <CardElement
                    options={{
                      style: {
                        base: {
                          backgroundColor: "#000000",
                          color: "#00bfff",
                          fontFamily: "Orbitron",
                          "::placeholder": {
                            color: "#00bfff"
                          }
                        },
                        invalid: {
                          color: "#FFC7EE"
                        }
                      }
                    }}
                  />

                </Box>
              </FormControl>
            </Box>
          </Box>
          <NoBorderButton type="submit">
            Pay
          </NoBorderButton>
        </FormControl>
        {error && <div>{error}</div>}
        <NoBorderButton onClick={handleCreatePaymentIntent}>Create Payment Intent</NoBorderButton>
      </Box>
    </ThemeProvider>
  );
};

const StripeElementsWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeElementsWrapper;