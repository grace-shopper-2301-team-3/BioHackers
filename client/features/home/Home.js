import React from "react";
import biohackersTheme from "../../app/theme";
import { MainContainer, PrimaryButton, HeroButton } from "../style/StyleGuide";
import { styled } from "@mui/material/styles";
import {
  ThemeProvider,
  Typography,
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCategories,
  selectCategory,
} from "../categories/allCategoriesSlice";
import { getAllProducts, selectProduct } from "../products/allProductsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);
  const products = useSelector(selectProduct);

  const start = Math.floor(Math.random() * (products.length - 5));
  const end = start + 5;

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer sx={{ position: "relative" }}>
        {/* Main Heading for Homepage */}

        <Container sx={{ position: "relative", overflow: "hidden" }}>
          <img
            src="https://media0.giphy.com/media/4knozU8q9AXvpod9qy/giphy.gif?cid=ecf05e479xiha122z06g45ujmxa7rc8xx3f47wwrdj1hrj64&rid=giphy.gif&ct=g"
            style={{ width: "100%" }}
          />
          <Typography
            variant="h1"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "-webkit-linear-gradient(45deg, #7F00FF, #ff00ff, #00bfff)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              textAlign: "center",
            }}
          >
            Biohackers
          </Typography>
        </Container>
        <Container sx={{ my: 10 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              background:
                "-webkit-linear-gradient(45deg, #7F00FF, #ff00ff, #00bfff)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              my: 4,
            }}
          >
            Biohacking Your Way to Better Health
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              background:
                "-webkit-linear-gradient(45deg, #7F00FF, #ff00ff, #00bfff)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            At Biohacker, we believe that optimal health is within reach. Our
            products are designed to help you biohack your way to better health,
            with cutting-edge brain enhancements, supplements, and physical
            enhancements that can help you achieve your goals. Whether you're a
            fitness fanatic or a busy professional, Biohacker has something to
            help you achieve peak performance.
          </Typography>
        </Container>

        {/* Categories Section */}

        <Container sx={{ py: 4 }}>
          <Typography
            variant="h2"
            sx={{
              background:
                "-webkit-linear-gradient(45deg, #7F00FF, #ff00ff, #00bfff)",
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
                    <Link to={`/categories/${category.id}`} onClick={() => window.scrollTo(0, 0)}>
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
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Link to="/categories" onClick={() => window.scrollTo(0, 0)}>
              <HeroButton variant="contained">
                <Typography variant="h6">View All Categories</Typography>
              </HeroButton>
            </Link>
          </Container>
        </Container>

        {/* Top Sellers Section */}

        <Container sx={{ py: 4 }}>
          <Typography
            variant="h2"
            sx={{
              background:
                "-webkit-linear-gradient(45deg, #7F00FF, #ff00ff, #00bfff)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              textAlign: "center",
            }}
          >
            Top Sellers
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
            {" "}
            {Array.isArray(products) &&
              products.slice(start, end).map((product) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                      justifyContent: "space-evenly",
                      margin: "5px",
                      height: "100%",
                      flex: 1
                    }}
                    key={product.id}
                  >
                    <Link to={`/products/${product.id}`} onClick={() => window.scrollTo(0, 0)}>
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
                          image={product.imageUrl}
                          sx={{ height: 200, objectFit: "cover" }}
                        />
                        <CardContent
                          sx={{ backgroundColor: "#200040", height: 150 }}
                        >
                          <Typography
                            gutterBottom
                            variant="body"
                            component="div"
                            color="primary.light"
                            sx={{ fontWeight: "900" }}
                          >
                            {product.productName}
                          </Typography>
                          <Typography variant="body2">
                            {product.productPrice.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </Box>
                );
              })}
          </Container>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
              <HeroButton variant="contained">
                <Typography variant="h6">View All Products</Typography>
              </HeroButton>
            </Link>
          </Container>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;
