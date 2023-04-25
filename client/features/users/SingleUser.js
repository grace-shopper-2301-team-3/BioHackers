import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { fetchSingleUser, selectSingleUser } from "./userSlice";
import biohackersTheme from "../../app/theme";
import { styled } from "@mui/material/styles";
import {
    ThemeProvider,
    Container,
    Typography
} from "@mui/material";

import {
    StyledTextField,
    PrimaryButton,
    MainContainer,
} from "../style/StyleGuide";
import UserHeaderBar from "./UserHeaderBar";


const SingleUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const id = useSelector((state) => state.auth.me.id);
    const { firstName, lastName, email, isAdmin, username, password } = useSelector((state) => state.auth.me);

    useEffect(() => {
        dispatch(fetchSingleUser(id));
    }, [dispatch]);

    const logoutAndRedirectHome = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <ThemeProvider theme={biohackersTheme}>
            <MainContainer>
                <UserHeaderBar />
                <Container>
                    <Typography variant="h2">User Profile</Typography>
                    <span>
                        <Typography variant="h5">Username:</Typography>
                        <Typography variant="subtitle1">{username}</Typography>
                    </span>
                    <span>
                        <Typography variant="h5">First Name:</Typography>
                        <Typography variant="subtitle1">{firstName}</Typography>
                    </span>
                    <span>
                        <Typography variant="h5">Last Name:</Typography>
                        <Typography variant="subtitle1">{lastName}</Typography>
                    </span>
                    <span>
                        <Typography variant="h5">E-mail:</Typography>
                        <Typography variant="subtitle1">{email}</Typography>
                    </span>
                </Container>
                <br />
            </MainContainer>
        </ThemeProvider>
    );
};

export default SingleUser;
