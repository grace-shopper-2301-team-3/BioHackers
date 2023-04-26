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
  Card,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const MainContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: 4,
}));

// TextField Design

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
      boxShadow: "0 0px 20px #7F00FF",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.dark,
      boxShadow: "0 0px 20px #7F00FF",
    },
  },
  "& .MuiFormHelperText-root": {
    color: "#7f00ff",
    fontSize: "0.75rem",
    letterSpacing: "0.03333em",
  },
}));

const ErrorTextField = styled(TextField)(({ theme }) => ({
  margin: 4,
  "& .MuiInputBase-input": {
    color: theme.palette.error.main,
  },
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.error.main,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.error.main,
      boxShadow: "0 0px 20px #EA0000",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.error.main,
      boxShadow: "0 0px 20px #EA0000",
    },
  },
  "& .MuiFormHelperText-root": {
    color: "#EA0000",
    fontSize: "0.75rem",
    letterSpacing: "0.03333em",
  },
}));

const DisabledTextField = styled(TextField)(({ theme }) => ({
  margin: 4,
  "& .MuiInputBase-input": {
    color: theme.palette.secondary.dark,
  },
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.secondary.dark,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.secondary.dark,
      boxShadow: "0 0px 20px #0000f9",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.dark,
      boxShadow: "0 0px 20px #0000f9",
    },
  },
  "& .MuiFormHelperText-root": {
    color: "#0000f9",
    fontSize: "0.75rem",
    letterSpacing: "0.03333em",
  },
}));

// Card Design

const CardOne = styled(Card)(({ theme }) => ({
  width: 300,
  height: 300,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: 2,
  position: "relative",
  backgroundImage: "url(https://picsum.photos/300)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  boxShadow: "0 0px 15px #7F00FF",
  border: "0.75px solid",
  borderImage: "linear-gradient(to right, #7F00FF, #0000FF)",
  borderImageSlice: 1,
  padding: 20,
  margin: 4,
}));

const CornerButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  margin: theme.spacing(1),
  borderRadius: 40,
  boxShadow: "0 0px 15px #7F00FF",
}));

const ProductName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "2rem",
  fontWeight: 500,
}));

const ProductDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const Price = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

const CardTwo = styled(Card)(({ theme }) => ({
  width: 300,
  height: 300,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: 2,
  position: "relative",
  boxShadow: "0 0px 15px #7F00FF",
  border: "0.75px solid",
  borderImage: "linear-gradient(to right, #7F00FF, #0000FF)",
  borderImageSlice: 1,
  background: "transparent",
  padding: 20,
  margin: 4,
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 200,
  marginBottom: theme.spacing(2),
  backgroundImage: "url(https://picsum.photos/300)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

// Button Design

const HeroButton = styled(Button)(({ theme }) => ({
  margin: 10,
  padding: "12px 30px",
  borderRadius: 40,
  borderBottomLeftRadius: 0,
  borderTopRightRadius: 0,
  textTransform: "uppercase",
  boxShadow: "0 0px 20px #7F00FF",
  "&:hover": {
    background: "linear-gradient(45deg, #7F00FF, #00bfff, #ff00ff)",
    boxShadow: "0 0px 50px #7F00FF",
  },
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  margin: 8,
  textTransform: "capitalize",
  boxShadow: "0 0px 15px #7F00FF",
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  margin: 5,
  borderRadius: 40,
  boxShadow: "0 0px 15px #7F00FF",
}));

const TertiaryButton = styled(Button)(({ theme }) => ({
  margin: 5,
  boxShadow: "0 0px 15px #7F00FF",
  border: "0.75px solid",
  borderImage: "linear-gradient(to right, #7F00FF, #0000FF)",
  borderImageSlice: 1,
}));

const NoBorderButton = styled(Button)(({ theme }) => ({
  border: "none",
  boxShadow: "none",
  borderImage: "none",
  borderImageSlice: "0",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0 0px 15px #7F00FF",
    border: "0.75px solid",
    borderImage: "linear-gradient(to right, #7F00FF, #0000FF)",
    borderImageSlice: "1",
  },
}));

// Other

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: 4,
}));

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "age", headerName: "Age", type: "number", width: 90 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const ColorBoxContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  margin: 4,
  alignItems: "center",
}));

const ColorBox = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  padding: 8,
  margin: 4,
  borderRadius: 4,
  color: theme.palette.primary.contrastText,
}));

const ColorTypography = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  color: theme.palette.primary.contrastText,
}));

export {
  MainContainer,
  StyledTextField,
  ErrorTextField,
  DisabledTextField,
  CardOne,
  CardTwo,
  CornerButton,
  ProductName,
  ProductDescription,
  Price,
  HeroButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  NoBorderButton,
};

const StyleGuide = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer>
        {/* Logo */}
        <Box sx={{ textTransform: "uppercase", m: "1rem" }}>
          <Typography variant="overline">Logo</Typography>
        </Box>

        <img src="./Biohacker-Logo-transparent.png" alt="Logo" />

        {/* Color Palette */}

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
              <ColorTypography variant="caption">#ff00ff</ColorTypography>
            </ColorBox>

            <ColorBox sx={{ bgcolor: "secondary.light" }}>
              <ColorTypography variant="caption">#00bfff</ColorTypography>
            </ColorBox>
          </ColorBoxContainer>

          <Typography variant="body2">Error</Typography>
          <ColorBoxContainer>
            <ColorBox sx={{ bgcolor: "error.main" }}>
              <ColorTypography variant="caption">#EA0000</ColorTypography>
            </ColorBox>
          </ColorBoxContainer>
        </Container>

        {/* Font Options */}

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
          <Box>
            <Typography variant="overline">
              Overline: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Container>

        {/* Form Options */}

        <Box sx={{ textTransform: "uppercase", m: "1rem" }}>
          <Typography variant="overline">Forms</Typography>
        </Box>
        <Container>
          <StyledTextField helperText="Required Input" label="Name" required />

          <StyledTextField helperText="No Required Sample" label="Input" />

          <ErrorTextField helperText="Error Sample" label="Error" error />

          <DisabledTextField
            helperText="Disabled Sample"
            label="Disabled"
            disabled
          />
        </Container>

        {/* Card Options */}

        <Box sx={{ textTransform: "uppercase", m: "1rem" }}>
          <Typography variant="overline">Cards</Typography>
        </Box>

        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <CardOne>
            <CornerButton variant="contained" color="primary">
              <AddShoppingCartRoundedIcon />
            </CornerButton>
            <Price gutterBottom variant="h6">
              Price $$
            </Price>
            <ProductName variant="h3">Product Name</ProductName>
            <ProductDescription variant="body1">
              Product Description
            </ProductDescription>
          </CardOne>

          <CardTwo>
            <CornerButton variant="contained" color="primary">
              <AddShoppingCartRoundedIcon />
            </CornerButton>
            <ImageBox />
            <Price gutterBottom variant="h6">
              Price $$
            </Price>
            <ProductName variant="h3">Product Name</ProductName>
            <ProductDescription variant="body1">
              Product Description
            </ProductDescription>
          </CardTwo>
        </Container>

        {/* Button Options */}

        <Box sx={{ textTransform: "uppercase", m: "1rem" }}>
          <Typography variant="overline">Buttons</Typography>
        </Box>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <HeroButton variant="contained">
              <Typography variant="h4">Hero CTA</Typography>
            </HeroButton>
            <HeroButton variant="contained" startIcon={<HomeRoundedIcon />}>
              <Typography variant="h4">Hero CTA</Typography>
            </HeroButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <PrimaryButton variant="contained" size="medium">
              Primary
            </PrimaryButton>
            <PrimaryButton
              variant="contained"
              size="medium"
              startIcon={<AddPhotoAlternateRoundedIcon />}
            >
              Primary
            </PrimaryButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <SecondaryButton variant="contained" size="medium">
              Secondary
            </SecondaryButton>
            <SecondaryButton
              variant="contained"
              size="medium"
              endIcon={<SendIcon />}
            >
              Secondary
            </SecondaryButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TertiaryButton variant="outlined" size="medium">
              Tertiary
            </TertiaryButton>
            <TertiaryButton
              variant="outlined"
              size="medium"
              startIcon={<AddPhotoAlternateRoundedIcon />}
            >
              Tertiary
            </TertiaryButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="success"
              style={{
                boxShadow: "0 0px 15px #2E7D32",
              }}
            >
              Success
            </Button>
            <Button
              variant="contained"
              color="success"
              style={{
                boxShadow: "0 0px 15px #2E7D32",
              }}
              endIcon={<ThumbUpIcon />}
            >
              Success
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="error"
              style={{
                boxShadow: "0 0px 15px #EA0000",
              }}
            >
              Danger/Error
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{
                boxShadow: "0 0px 15px #EA0000",
              }}
              startIcon={<ReportGmailerrorredIcon />}
            >
              Danger/Error
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <NoBorderButton size="medium">Link</NoBorderButton>
            <NoBorderButton
              size="medium"
              startIcon={<AddPhotoAlternateRoundedIcon />}
            >
              Link
            </NoBorderButton>
          </Box>
        </Container>

        {/* Icons */}

        <Box sx={{ textTransform: "uppercase", m: "1rem" }}>
          <Typography variant="overline">Icons</Typography>
        </Box>
        <Container>
          <Box sx={{ display: "flex" }}>
            <IconBox>
              <AccountCircleRoundedIcon />
              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Account
              </Typography>
            </IconBox>

            <IconBox>
              <ShoppingCartRoundedIcon />
              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Cart
              </Typography>
            </IconBox>

            <IconBox>
              <AddShoppingCartRoundedIcon />
              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Add to Cart
              </Typography>
            </IconBox>

            <IconBox>
              <HomeRoundedIcon />
              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Home
              </Typography>
            </IconBox>

            <IconBox>
              <LocalPhoneRoundedIcon />
              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Phone
              </Typography>
            </IconBox>

            <IconBox>
              <MenuRoundedIcon />
              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Menu
              </Typography>
            </IconBox>

            <IconBox>
              <FilterAltRoundedIcon />
              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Filter
              </Typography>
            </IconBox>

            <IconBox>
              <StarBorderRoundedIcon />
              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Empty Star
              </Typography>
            </IconBox>

            <IconBox>
              <StarRoundedIcon />
              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Star
              </Typography>
            </IconBox>

            <IconBox>
              <LocationOnRoundedIcon />
              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Location
              </Typography>
            </IconBox>

            <IconBox>
              <ModeEditOutlineRoundedIcon />
              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Edit
              </Typography>
            </IconBox>

            <IconBox>
              <LockRoundedIcon />

              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Lock
              </Typography>
            </IconBox>

            <IconBox>
              <LeaderboardRoundedIcon />

              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Graph
              </Typography>
            </IconBox>

            <IconBox>
              <InsightsRoundedIcon />

              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Insights
              </Typography>
            </IconBox>

            <IconBox>
              <AddPhotoAlternateRoundedIcon />

              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Add Photo
              </Typography>
            </IconBox>

            <IconBox>
              <SearchRoundedIcon />

              <Typography variant="overline" sx={{ fontSize: "0.5rem" }}>
                Search
              </Typography>
            </IconBox>
          </Box>
        </Container>

        {/* Tables Options */}

        <Box sx={{ textTransform: "uppercase", m: "1rem" }}>
          <Typography variant="overline">Tables</Typography>
        </Box>

        <Box>
          <Typography variant="h3">DataGrid</Typography>
          <Typography variant="body1">
            Datagrid already has filter, sorting, pagination, selection, editing
            set up but may be more difficult to use
          </Typography>
          <DataGrid
            sx={{
              m: 4,
              border: "none",
              backgroundColor: "#200040",
              color: "#7F00FF",
            }}
            rows={rows}
            columns={columns}
            autoHeight={true}
            autoWidth={true}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
          />
        </Box>
      </MainContainer>
    </ThemeProvider>
  );
};

export default StyleGuide;
