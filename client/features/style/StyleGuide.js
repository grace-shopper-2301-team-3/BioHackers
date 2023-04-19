import React from "react";
import biohackersTheme from "../../app/theme";
import { styled } from "@mui/material/styles";
import {
  ThemeProvider,
  Container,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";

// The goal of this file is to make it easier to understand how to leverage Material UI
// I've made everything into themes so you should be able to import most of these functions into the components

const StyleGuide = () => {
  const MainContainer = styled(Container)(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  }));

  const ColorBoxContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    margin: 4,
    alignItems: "center",
  }));

  const ColorBox = styled(Box)(({ theme }) => ({
    width: 48,
    height: 48,
    padding: 8,
    margin: 4,
    borderRadius: 4,
    color: theme.palette.primary.contrastText,
  }));

  const ColorTypography = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    color: theme.palette.primary.contrastText,
  }));

  const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: 4,
    "& .MuiInputBase-input": {
      color: theme.palette.text.primary,
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#7f00ff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.dark,
      },
    },
    "& .MuiFormHelperText-root": {
      color: "#7f00ff",
      fontSize: "0.75rem",
      letterSpacing: "0.03333em",
    },
  }));

  const HeroButton = styled(Button)(({ theme }) => ({
    margin: 4,
    padding: 20,
    borderRadius: "50px",
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
  }));

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer>
        <Box sx={{ textTransform: "uppercase", m: "1rem" }}>
          <Typography variant="overline">Colors (First Row Primary)</Typography>
        </Box>
        <Container>
          <Typography variant="body2">Primary</Typography>
          <ColorBoxContainer>
            <ColorBox sx={{ bgcolor: "primary.main" }}>
              <ColorTypography variant="caption">#7F00FF</ColorTypography>
            </ColorBox>
            <ColorBox sx={{ bgcolor: "primary.dark" }}>
              <ColorTypography variant="caption">#6100f0</ColorTypography>
            </ColorBox>
            <ColorBox sx={{ bgcolor: "primary.light" }}>
              <ColorTypography variant="caption">#ac6cff</ColorTypography>
            </ColorBox>
          </ColorBoxContainer>
          <Typography variant="body2">Secondary</Typography>
          <ColorBoxContainer>
            <ColorBox sx={{ bgcolor: "secondary.main" }}>
              <ColorTypography variant="caption">#0000FF</ColorTypography>
            </ColorBox>
            <ColorBox sx={{ bgcolor: "secondary.dark" }}>
              <ColorTypography variant="caption">#0000f9</ColorTypography>
            </ColorBox>
            <ColorBox sx={{ bgcolor: "secondary.light" }}>
              <ColorTypography variant="caption">#5013ff</ColorTypography>
            </ColorBox>
          </ColorBoxContainer>
          <Typography variant="body2">Error</Typography>
          <ColorBoxContainer>
            <ColorBox sx={{ bgcolor: "error.main" }}>
              <ColorTypography variant="caption">#EA0000</ColorTypography>
            </ColorBox>
          </ColorBoxContainer>
        </Container>
        <Box sx={{ textTransform: "uppercase", m: "1rem" }}>
          <Typography variant="overline">Fonts (Responsive)</Typography>
        </Box>
        <Container sx={{ m: "1rem", alignContent: "center" }}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography variant="h1">Heading 1: viverra</Typography>
          </Box>
        </Container>
        <Container sx={{ m: "1rem", alignContent: "center" }}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography variant="h2">Heading 2: ligula ullamcorper</Typography>
          </Box>
        </Container>
        <Container sx={{ m: "1rem", alignContent: "center" }}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography variant="h3">Heading 3: amet consectetur</Typography>
          </Box>
        </Container>
        <Container sx={{ m: "1rem", alignContent: "center" }}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography variant="h4">Heading 4: vulputate sapien</Typography>
          </Box>
        </Container>
        <Container sx={{ m: "1rem", alignContent: "center" }}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography variant="h5">
              Heading 5: massa eget egestas purus viverra accumsan in nisl
            </Typography>
          </Box>
        </Container>
        <Container sx={{ m: "1rem", alignContent: "center" }}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography variant="h6">
              Heading 6: mattis molestie a iaculis at erat pellentesque
              adipiscing
            </Typography>
          </Box>
        </Container>
        <Container sx={{ m: "1rem", alignContent: "center" }}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography variant="subtitle1">
              Subtitle 1: non nisi est sit amet facilisis magna etiam
            </Typography>
          </Box>
        </Container>
        <Container sx={{ m: "1rem", alignContent: "center" }}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography variant="subtitle2">
              Subtitle 2: non nisi est sit amet facilisis magna etiam
            </Typography>
          </Box>
        </Container>
        <Container sx={{ m: "1rem", alignContent: "center" }}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography variant="body1">
              Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Id interdum velit laoreet id donec ultrices.
            </Typography>
          </Box>
        </Container>
        <Container sx={{ m: "1rem", alignContent: "center" }}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography variant="body2">
              Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Id interdum velit laoreet id donec ultrices.
            </Typography>
          </Box>
        </Container>
        <Container sx={{ m: "1rem", alignContent: "center" }}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography variant="caption">
              Caption: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Container>
        <Container sx={{ m: "1rem", alignContent: "center" }}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography variant="overline">
              Overline: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Container>
        <Box sx={{ textTransform: "uppercase", m: "1rem" }}>
          <Typography variant="overline">Forms</Typography>
        </Box>
        <Container>
          <StyledTextField helperText="Required Input" label="Name" required />
          <StyledTextField helperText="No Required Sample" label="Input" />
          <StyledTextField helperText="Error Sample" label="Error" error />
          <StyledTextField helperText="Filled Sample" label="Filled" filled />
          <StyledTextField
            helperText="Disabled Sample"
            label="Disabled"
            disabled
          />
        </Container>
        <Box sx={{ textTransform: "uppercase", m: "1rem" }}>
          <Typography variant="overline">Buttons</Typography>
        </Box>
        <Container>
          <HeroButton
            variant="contained"
          >
            <Typography variant="h4">Hero CTA</Typography>
          </HeroButton>
          <Button variant="contained" size="medium">
            Primary
          </Button>
          <Button variant="contained" size="medium">
            Secondary
          </Button>
          <Button variant="outlined" size="medium">
            Tertiary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Danger/Error
          </Button>
          <Button size="medium">Link</Button>
        </Container>
        <Box sx={{ textTransform: "uppercase", m: "1rem" }}>
          <Typography variant="overline">Icons</Typography>
        </Box>
        <Box sx={{ textTransform: "uppercase", m: "1rem" }}>
          <Typography variant="overline">Logos</Typography>
        </Box>
      </MainContainer>
    </ThemeProvider>
  );
};

export default StyleGuide;
