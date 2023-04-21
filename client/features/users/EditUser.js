import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import biohackersTheme from "../../app/theme";
import { styled } from "@mui/material/styles";
import {
    ThemeProvider,
    Container,
    Typography,
    Box,
    TextField,
    Button,
    Card,
} from "@mui/material";

import { 
    StyledTextField, 
    PrimaryButton,
    MainContainer,
} from "../style/StyleGuide";


const EditUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { me } = useSelector((state) => state.auth);

    const handleEdit = (event) => {
        event.preventDefault();
        const { username, firstName, lastName, email } = event.target;
        dispatch(updateUser({
            id: me.id,
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
        }))
        window.location.reload();
    };

    return (
    
            <ThemeProvider theme={biohackersTheme}>
                
                    <MainContainer>
                    <Container>
                        <Typography variant="h2">User Profile</Typography>
                        <span>
                            <Typography variant="h5">Username:</Typography>
                            <Typography variant="subtitle1">{me.username}</Typography>
                        </span>
                        <span>
                            <Typography variant="h5">First Name:</Typography>
                            <Typography variant="subtitle1">{me.firstName}</Typography>
                        </span>
                        <span>
                            <Typography variant="h5">Last Name:</Typography>
                            <Typography variant="subtitle1">{me.lastName}</Typography>
                        </span>
                        <span>
                            <Typography variant="h5">E-mail:</Typography>
                            <Typography variant="subtitle1">{me.email}</Typography>
                        </span>
                        </Container>
                        <br />
                        
                        <Container>
                        <Typography variant="h2">Edit Information</Typography>
                        <form onSubmit={handleEdit}>
                            <StyledTextField type="text" helperText="Required Input" label="Username" name="username" required />
                            <br />
                            <StyledTextField type="text" helperText="Required Input" label="First Name" name="firstName" required />
                            <br />
                            <StyledTextField type="text" helperText="Required Input" label="Last Name" name="lastName" required />
                            <br />
                            <StyledTextField type="email" helperText="Required Input" label="Email" name="email" required />
                            <br />
                            <PrimaryButton variant="contained" size="medium" type="submit">Save</PrimaryButton>
                        </form>
                        </Container>
                    </MainContainer>
                
                
            </ThemeProvider>
        
    );
};

export default EditUser;