import React, { useEffect } from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Container, Typography, Box, Grid } from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import UserHeaderBar from "./UserHeaderBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddresses } from "./UserAddressSlice";
import { fetchSingleUser, selectSingleUser } from "./userSlice";

const UserAddress = () => {
  const dispatch = useDispatch();
  const UserAddress = useSelector((state) => state.userAddress.addresses);
  const UserId = useSelector((state) => state.auth.me.id);

  console.log("UserId:", UserId);
  console.log("useraddress:", UserAddress);
  useEffect(() => {
    dispatch(getAllAddresses());
    dispatch(fetchSingleUser(UserId));
  }, [dispatch]);

  const filteredAddresses = UserAddress.filter(
    (address) => address.userId === UserId
  );

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer sx={{ marginTop: 5 }}>
        <UserHeaderBar />
        <Container>
        <Typography variant="h2">User Address</Typography>
          {filteredAddresses &&
            filteredAddresses.map((address) => {
              return (
                <Box key={address.id} sx={{ marginTop: 3 }}>
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={3}>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Address Line 1
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography
                        variant="subtitle1"
                        color="#dbd7f1"
                        sx={{ marginTop: "25px" }}
                      >
                        {address.addressLine1}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Address Line 2
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography
                        variant="subtitle1"
                        color="#dbd7f1"
                        sx={{ marginTop: "25px" }}
                      >
                        {address.addressLine2}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        City
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography
                        variant="subtitle1"
                        color="#dbd7f1"
                        sx={{ marginTop: "25px" }}
                      >
                        {address.city}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        State
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography
                        variant="subtitle1"
                        color="#dbd7f1"
                        sx={{ marginTop: "25px" }}
                      >
                        {address.state}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Zip Code
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography
                        variant="subtitle1"
                        color="#dbd7f1"
                        sx={{ marginTop: "25px" }}
                      >
                        {address.zipcode}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default UserAddress;
