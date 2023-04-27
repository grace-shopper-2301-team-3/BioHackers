import React, { useEffect } from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Container, Typography, Box, Grid } from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddresses } from "../users/UserAddressSlice";
import { fetchSingleUser, selectSingleUser } from "../users/userSlice";

const ShippingForm = () => {
  const dispatch = useDispatch();
  const UserAddress = useSelector((state) => state.userAddress.addresses);
  const UserId = useSelector((state) => state.auth.me.id);

  useEffect(() => {
    dispatch(getAllAddresses());
    dispatch(fetchSingleUser(UserId));
  }, [dispatch]);

  const filteredAddresses = UserAddress.filter(
    (address) => address.userId === UserId
  );

  return (
    <ThemeProvider theme={biohackersTheme}>
      <Box sx={{ mx: "auto", textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Shipping Information
        </Typography>
        {filteredAddresses &&
          filteredAddresses.map((address) => {
            return (
              <Box
                key={address.id}
                sx={{ mt: 1, display: "inline-block", textAlign: "left" }}
              >
                <Typography>
                  Address Line 1:{" "}
                  <b style={{ color: "#ff00ff" }}>{address.addressLine1}</b>
                </Typography>
                <Typography>
                  Address Line 2:{" "}
                  <b style={{ color: "#ff00ff" }}>{address.addressLine2}</b>
                </Typography>
                <Typography>
                  City: <b style={{ color: "#ff00ff" }}>{address.city}</b>
                </Typography>
                <Typography>
                  State: <b style={{ color: "#ff00ff" }}>{address.state}</b>
                </Typography>
                <Typography>
                  Zipcode: <b style={{ color: "#ff00ff" }}>{address.zipcode}</b>
                </Typography>
              </Box>
            );
          })}
      </Box>
    </ThemeProvider>
  );
};

export default ShippingForm;
