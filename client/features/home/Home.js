import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  ThemeProvider,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import biohackersTheme from "../../app/theme";
import { changeQuantityAsync } from "../cart/cartSlice";
import {
  getAllCategories,
  selectCategory,
} from "../categories/allCategoriesSlice";
import { getAllProducts, selectProduct } from "../products/allProductsSlice";
import { addToCartAsync } from "../cart/cartSlice";
import { getSingleProduct } from "../products/singleProductSlice";
import {
  HeroButton,
  MainContainer,
  SecondaryButton,
} from "../style/StyleGuide";

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);
  const products = useSelector(selectProduct);
  const { me } = useSelector((state) => state.auth);
  const [showSignInDialog, setShowSignInDialog] = useState(false);

  const handleAddToCart = async (id) => {
    try {
      const action = await dispatch(getSingleProduct(id));
      const product = action.payload;
      const addToCartAction = await dispatch(
        changeQuantityAsync({ product, newQuantity: 1 })
      );
      const updatedCart = addToCartAction.payload;
      console.log("updatedCart", updatedCart);
    } catch (err) {
      console.log("error adding to cart in single product", err);
    }
  };

  const addToCart = (productId) => {
    if (me.id) {
      handleAddToCart(productId);
    } else {
      setShowSignInDialog(true);
    }
  };

  const randomColors = ["#6100F0", "#AC6CFF", "#0000ff", "#00bfff", "#1565C0"];

  const getRandomColor = () => {
    return randomColors[Math.floor(Math.random() * randomColors.length)];
  };

  const testimonials = [
    {
      name: "John S.",
      testimonial:
        "I've been a biohacker for years, and I'm always looking for the latest tools and techniques to optimize my health. This site has everything I need to stay on top of my game.",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Sarah T.",
      testimonial:
        "I was skeptical about biohacking at first, but after trying a few supplements recommended by this site, I was hooked. I feel better than I have in years!",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Mark D.",
      testimonial:
        "As a busy professional, I don't always have time to devote to my health. But with the help of this site, I've been able to make small changes that have had a big impact on my energy levels and overall wellbeing.",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
    {
      name: "Jessica L.",
      testimonial:
        "I've always been interested in alternative health practices, but I wasn't sure where to start. This site has been an invaluable resource for me in exploring biohacking and finding the best tools for my needs.",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
    },
    {
      name: "Tyler M.",
      testimonial:
        "As an athlete, I'm always looking for ways to improve my performance and speed up my recovery time. This site has helped me discover new techniques that have taken my training to the next level.",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  const start = Math.floor(Math.random() * (products.length - 5));
  const end = start + 5;

  const extraLoginLinks = [
    {
      icon: (
        <AccountCircleRoundedIcon
          sx={{ fontSize: 64, color: "primary.contrastText" }}
        />
      ),
      title: "Manage Account",
      description: "Edit your info, track orders, & more.",
    },
    {
      icon: (
        <LocalOfferRoundedIcon
          sx={{ fontSize: 64, color: "primary.contrastText" }}
        />
      ),
      title: "Get Discounts",
      description: "Exclusive deals and offers just for you.",
    },
    {
      icon: (
        <TravelExploreRoundedIcon
          sx={{ fontSize: 64, color: "primary.contrastText" }}
        />
      ),
      title: "Explore Benefits",
      description: "Discover more ways to optimize your health.",
    },
  ];

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer sx={{ position: "relative" }}>
        {/* Main Heading for Homepage */}

        <Container sx={{ position: "relative", overflow: "hidden" }}>
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGY2YjA4ZGNhMzcwZjM1ZDg2ZTdhYjY1OGNjZmRjMmEyZGYyZTc0ZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/WmiRpz0Kz0nzewi9mm/giphy.gif"
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
            BioHacker
          </Typography>
        </Container>
        <Container sx={{ my: 10 }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              background: "linear-gradient(250deg, #7F00FF, #ff00ff, #00bfff)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              mx: "auto",
              maxWidth: "80%",
            }}
          >
            Biohacking Your Way to Better Health
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              width: "50%",
              mx: "auto",
              my: 2,
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
          <Box>
            <Typography
              variant="h2"
              sx={{
                background:
                  "-webkit-linear-gradient(150deg, #7F00FF, #ff00ff, #00bfff)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                textAlign: "center",
              }}
            >
              Categories
            </Typography>
          </Box>
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
                            height: 160,
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            color="primary.light"
                            sx={{ textAlign: "center" }}
                          >
                            {category.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ textAlign: "center" }}
                          >
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
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "normal",
                    textTransform: "uppercase",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    },
                  }}
                >
                  View All Categories
                </Typography>
              </HeroButton>
            </Link>
          </Container>
        </Container>

        {/* Testimonials */}

        <Container sx={{ my: 6 }}>
          <Container sx={{ my: 3 }}>
            <Typography
              variant="h4"
              sx={{
                textTransform: "capitalize",
                textAlign: "center",
                background:
                  "-webkit-linear-gradient(250deg, #7F00FF, #ff00ff, #00bfff)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              What our customers are saying
            </Typography>
          </Container>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              backgroundImage:
                "url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGY2YjA4ZGNhMzcwZjM1ZDg2ZTdhYjY1OGNjZmRjMmEyZGYyZTc0ZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/WmiRpz0Kz0nzewi9mm/giphy.gif)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            {testimonials.map((testimonial) => (
              <Box
                key={testimonial.name}
                sx={{
                  width: "100%",
                  my: 4,
                }}
              >
                <Card
                  sx={{
                    my: 1,
                    mx: 1,
                    border: "3px solid",
                    p: 2,
                    backgroundColor: "transparent",
                    borderColor: getRandomColor(),
                    color: "primary.contrastText",
                    borderRadius: "25px",
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <FormatQuoteIcon
                      fontSize="large"
                      sx={{ alignContent: "right" }}
                    />
                    <Typography variant="body2">
                      {testimonial.testimonial}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        py: 2,
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {testimonial.name}
                      <Avatar
                        alt={testimonial.name}
                        src={testimonial.avatar}
                        sx={{ ml: 1 }}
                      />
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Container>
        </Container>

        {/* Top Sellers Section */}

        <Container sx={{ py: 4 }}>
          <Typography
            variant="h2"
            sx={{
              background:
                "-webkit-linear-gradient(260deg, #7F00FF, #ff00ff, #00bfff)",
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
                      flex: 1,
                      position: "relative",
                    }}
                    key={product.id}
                  >
                    <Link
                      to={`/products/${product.id}`}
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
                          image={product.imageUrl}
                          sx={{ height: 200, objectFit: "cover" }}
                        />
                        <CardContent
                          sx={{
                            backgroundColor: "#200040",
                            height: 125,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="body"
                            component="div"
                            color="primary.light"
                            sx={{ fontWeight: "900", textAlign: "center" }}
                          >
                            {product.productName}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ textAlign: "center" }}
                          >
                            {product.productPrice.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                    <SecondaryButton
                      variant="contained"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                      }}
                      onClick={() => addToCart(product.id)}
                    >
                      <AddShoppingCartIcon />
                    </SecondaryButton>
                  </Box>
                );
              })}
          </Container>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
              <HeroButton variant="contained">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "normal",
                    textTransform: "uppercase",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    },
                  }}
                >
                  View All Products
                </Typography>
              </HeroButton>
            </Link>
          </Container>

          {/* A little page break */}

          <Container sx={{ my: 10 }}>
            <Typography
              variant="h4"
              sx={{
                textTransform: "capitalize",
                background:
                  "-webkit-linear-gradient(245deg, #7F00FF, #ff00ff, #00bfff)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                textAlign: "center",
                py: 2,
              }}
            >
              you'll love shopping with us
            </Typography>

            <Container
              sx={{
                display: "flex",
                justifyContent: "space-around",
                py: "20px",
              }}
            >
              {extraLoginLinks.map((link, index) => (
                <Link
                  key={index}
                  to="/login"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Box
                    sx={{
                      width: "300px",
                      height: "300px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundImage:
                        "url(https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGY2YjA4ZGNhMzcwZjM1ZDg2ZTdhYjY1OGNjZmRjMmEyZGYyZTc0ZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/WmiRpz0Kz0nzewi9mm/giphy.gif)",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      color: "primary.contrastText",
                      borderRadius: "25px",
                      "&:hover": {
                        boxShadow: "0 0 15px primary.main",
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    {link.icon}
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: "bold", textDecoration: "underline" }}
                    >
                      {link.title}
                    </Typography>
                    <Typography variant="body1" align="center">
                      {link.description}
                    </Typography>
                  </Box>
                </Link>
              ))}
            </Container>
          </Container>
        </Container>
      </MainContainer>
      {/* Dialog Management */}
      <Dialog
          open={showSignInDialog}
          onClose={() => setShowSignInDialog(false)}
        >
          <DialogTitle sx={{ textAlign: "center" }}>
            Please sign in to add to cart
          </DialogTitle>
          <DialogContent sx={{ textAlign: "center" }}>
            <Link to="/login">
              <Button
                variant="contained"
                size="medium"
                type="submit"
                sx={{ backgroundColor: "#AC6CFF" }}
              >
                Log In
              </Button>
            </Link>
            <Typography variant="overline" sx={{ my: 4, display: "block" }}>
              - or -
            </Typography>
            <Link to="/signup">
              <Button
                variant="contained"
                size="medium"
                type="submit"
                sx={{ backgroundColor: "#AC6CFF" }}
              >
                Create An Account
              </Button>
            </Link>
          </DialogContent>
        </Dialog>
    </ThemeProvider>
  );
};

export default Home;
