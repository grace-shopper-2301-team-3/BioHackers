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

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);

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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              justifyContent: "space-evenly",
              margin: "20px",
            }}
          >
            {/* {Array.isArray(categories) &&
              categories.map((category) => {
                return (
                  <div key={category.categoryId}>
                    <Link to={`/categories/${category.categoryId}`}>
                      <Card sx={{ maxWidth: 500 }}>
                        <CardMedia
                          component={category.name}
                          src={category.imageUrl}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {category.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {category.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                );
              })} */}

            <Card sx={{ maxWidth: 500 }}>
              <CardMedia component="img" image="https://picsum.photos/500" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Category
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some description
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia component="img" image="https://picsum.photos/500" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Category
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some description
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia component="img" image="https://picsum.photos/500" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Category
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some description
                </Typography>
              </CardContent>
            </Card>
          </Box>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              justifyContent: "space-evenly",
              margin: "20px",
            }}
          >
            <Card sx={{ maxWidth: 150 }}>
              <CardMedia component="img" image="https://picsum.photos/150" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some description
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 150 }}>
              <CardMedia component="img" image="https://picsum.photos/150" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some description
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 150 }}>
              <CardMedia component="img" image="https://picsum.photos/150" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some description
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 150 }}>
              <CardMedia component="img" image="https://picsum.photos/150" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some description
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 150 }}>
              <CardMedia component="img" image="https://picsum.photos/150" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some description
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 150 }}>
              <CardMedia component="img" image="https://picsum.photos/150" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some description
                </Typography>
              </CardContent>
            </Card>
          </Box>{" "}
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;
