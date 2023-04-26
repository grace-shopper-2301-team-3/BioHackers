import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { getAllCategories, selectCategory } from "./allCategoriesSlice";
import biohackersTheme from "../../app/theme";
import {
  ThemeProvider,
  Typography,
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const AllCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);

  return (
    <ThemeProvider theme={biohackersTheme}>
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            marginBottom: 5,
            background:
              "-webkit-linear-gradient(150deg, #7F00FF, #ff00ff, #00bfff)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            textAlign: "center",
          }}
        >
          Categories
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "space-around",
            margin: "20px",
            py: "20px",
          }}
        >
          {Array.isArray(categories) &&
            categories.map((category) => {
              return (
                <Box key={category.id}>
                  <Link
                    to={`/categories/${category.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <Card
                      sx={{
                        maxWidth: 400,
                        border: "none",
                        "&:hover": {
                          border: "2px solid",
                          borderImage:
                            "linear-gradient(45deg, #7F00FF, #00bfff, #ff00ff) 1",
                          boxShadow: "0 0px 20px #7F00FF",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={category.imageUrl}
                        sx={{ height: 300, objectFit: "cover" }}
                      />
                      <CardContent
                        sx={{
                          backgroundColor: "#200040",
                          height: 150,
                          objectFit: "cover",
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          color="primary.light"
                        >
                          {category.name}
                        </Typography>
                        <Typography variant="body2">
                          {category.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Box>
              );
            })}
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default AllCategories;
