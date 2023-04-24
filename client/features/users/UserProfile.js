import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import biohackersTheme from "../../app/theme";
import { styled } from "@mui/material/styles";
import {
    ThemeProvider,
    Container,
    Typography
} from "@mui/material";
import {
    MainContainer,
} from "../style/StyleGuide";

const UserProfile = () => {

    const { firstName, lastName, email, isAdmin, username, password } = useSelector((state) => state.auth.me);

    return (
        <MainContainer>
            <Container>
                <Typography variant="h3">Welcome, {firstName}!</Typography>
                <br />

                <Typography variant="h3">Your Account</Typography>
                <br />

                <Typography variant="h4">Account Information</Typography>
                <Typography variant="h6"><Link to="/users/:id">My Information</Link></Typography>
                <Typography variant="h6"><Link to="/users/:id/edit" >Edit Profile</Link></Typography>
                <br />

                <Typography variant="h4">Payment</Typography>
                <Typography variant="h6">Credit Card</Typography>
                <br />

                <Typography variant="h4">Shipping</Typography>
                <Typography variant="h6">Address Book</Typography>
                <br />

                <Typography variant="h4">Orders</Typography>
                <Typography variant="h6">My Orders</Typography>

            </Container>
        </MainContainer>
    );

};

export default UserProfile;