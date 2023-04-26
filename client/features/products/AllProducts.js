import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts, selectProduct } from "./allProductsSlice";
import { getSingleProduct } from "./singleProductSlice";
import { MainContainer, SecondaryButton } from "../style/StyleGuide";
import {
  Typography,
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { changeQuantityAsync } from "../cart/cartSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const { me } = useSelector((state) => state.auth);
  const [showSignInDialog, setShowSignInDialog] = useState(false);

  // const categories = useSelector(selectCategory);
  const handleAddToCart = async (id) => {
    try {
      const action = await dispatch(getSingleProduct(id));
      const product = action.payload;
      // console.log({ product })
      const addToCartAction = await dispatch(
        changeQuantityAsync({ product, newQuantity: 1 })
      );
      const updatedCart = addToCartAction.payload;
      // console.log("updatedCart", updatedCart);
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
  
  return (
    <MainContainer>
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            marginBottom: 5,
            background:
              "-webkit-linear-gradient(15deg, #7F00FF, #ff00ff, #00bfff)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            textAlign: "center",
          }}
        >
          All Products
        </Typography>
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {Array.isArray(products) &&
            products.map((product) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    margin: "5px",
                    height: "100%",
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
                        maxWidth: 600,
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
                        sx={{ height: 300, objectFit: "cover" }}
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
      </Container>
    </MainContainer>
  );
};

export default AllProducts;
