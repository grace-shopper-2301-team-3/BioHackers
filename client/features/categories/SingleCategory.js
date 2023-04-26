import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleCategory, selectSingleCategory } from "./singleCategorySlice";
import { getAllCategories, selectCategory } from "./allCategoriesSlice";
import { getAllProducts, selectProduct } from "../products/allProductsSlice";
import { getSingleProduct } from "../products/singleProductSlice";
import {
  MainContainer,
  HeroButton,
  SecondaryButton,
} from "../style/StyleGuide";
import {
  ThemeProvider,
  Typography,
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { changeQuantityAsync } from "../cart/cartSlice";

const SingleCategory = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const products = useSelector(selectProduct);
  const category = useSelector(selectSingleCategory);

  useEffect(() => {
    dispatch(getSingleCategory(categoryId));
    dispatch(getAllProducts());
  }, [dispatch, categoryId]);

  const handleAddToCart = async (id) => {
    try {
      const action = await dispatch(getSingleProduct(id));
      const product = action.payload;
      const addToCartAction = await dispatch(
        changeQuantityAsync({ product, newQuantity: 1 })
      );
      const updatedCart = addToCartAction.payload;
    } catch (err) {
      console.log("error adding to cart in single product", err);
    }
  };

  const categoryProducts =
    products.length > 0
      ? products.filter((product) => product.categoryId == categoryId)
      : [];

  return (
    <div key={categoryId}>
      <Container sx={{ position: "relative", overflow: "hidden" }}>
        <img src={category.imageUrl} style={{ width: "100%" }} />
        <Typography
          variant="h1"
          sx={{
            color: "primary.light",
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
          {category.name}
        </Typography>
      </Container>
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Typography variant="h3" component="h1" align="left" gutterBottom>
          Products in this Category:
        </Typography>
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 2fr)",
            gap: "20px",
          }}
        >
          {Array.isArray(categoryProducts) &&
            categoryProducts.map((product) => {
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
                    onClick={() => handleAddToCart(product.id)}
                  >
                    <AddShoppingCartIcon />
                  </SecondaryButton>
                </Box>
              );
            })}
        </Container>
      </Container>
    </div>
  );
};
export default SingleCategory;
