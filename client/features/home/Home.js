<<<<<<< HEAD
import React from 'react';
import { useSelector } from 'react-redux';
=======
import React from "react";
import biohackersTheme from "../../app/theme";
import { MainContainer } from "../style/StyleGuide";
import {
  ThemeProvider,
  Typography,
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import {
  getAllCategories,
  selectCategory,
} from "../categories/allCategoriesSlice";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> 1f8322a (minor edits on home and login)

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  );
};

export default Home;
