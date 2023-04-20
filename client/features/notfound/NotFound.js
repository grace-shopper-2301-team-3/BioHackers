import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Box, Typography } from "@mui/material";
import { MainContainer } from "../style/StyleGuide";

const NotFound = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}
      >
        <Box>
            <Box sx={{ m: 4 }}>
          <Typography variant="h5">
            Oops!
          </Typography>
          <Typography variant="body1">
          The page you are looking for is not found!
          </Typography>
          </Box>
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODRmYmZjM2YwYjBlNzgxYTAzZDgyZDdjMTU3NzdhMDZmZDVlMTVkYiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/hhbsgAvBkZqkKx2ys7/giphy.gif"
            alt="Page not found"
          />
        </Box>
      </MainContainer>
    </ThemeProvider>
  );
};

export default NotFound;
