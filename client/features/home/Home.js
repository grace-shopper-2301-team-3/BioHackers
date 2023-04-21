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

const Home = () => {
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
            <Typography variant="h4" sx={{ textAlign: "center", background:
                "-webkit-linear-gradient(45deg, #7F00FF, #ff00ff, #00bfff)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent", my: 4 }}>
            Biohacking Your Way to Better Health
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", background:
                "-webkit-linear-gradient(45deg, #7F00FF, #ff00ff, #00bfff)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent" }}>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              justifyContent: "space-evenly",
              margin: "20px",
            }}
          >
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
