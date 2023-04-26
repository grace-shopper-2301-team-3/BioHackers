import { createSlice } from "@reduxjs/toolkit";
import Stripe from "stripe";
import {
  getSingleProduct,
  selectSingleProduct,
} from "../products/singleProductSlice";

const stripe = new Stripe(
  "sk_test_51N0lUGBjXVRQFHi2ZJ8lZv7I2CInnghjHWWfDwwkPXaaF4H6MH8lgM3rfjThYj0wbGAUGYdklZV8PZt2GWvbvdGV00p6ypj2jG"
); //Stripe Secret Key

const stripeSlice = createSlice({
  name: "stripe",
  initialState: {
    paymentIntent: null,
    error: null,
  },
  reducers: {
    createPaymentIntentSuccess(state, action) {
      state.paymentIntent = action.payload;
      state.error = null;
    },
    createPaymentIntentFailure(state, action) {
      state.paymentIntent = null;
      state.error = action.payload;
    },
  },
});

export const { createPaymentIntentSuccess, createPaymentIntentFailure } =
  stripeSlice.actions;

export const createPaymentIntent = () => {
  return async (dispatch, getState) => {
    try {
      const product = selectSingleProduct(getState());
      const price = product && product.productPrice;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: `${price}`,
        currency: "USD",
      });

      dispatch(createPaymentIntentSuccess(paymentIntent));
    } catch (error) {
      dispatch(createPaymentIntentFailure(error.message));
    }
  };
};

export default stripeSlice.reducer;
