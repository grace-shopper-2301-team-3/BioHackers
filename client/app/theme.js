import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let biohackersTheme = createTheme({
  palette: {
    primary: {
      main: "#7F00FF",
      dark: "#6100F0",
      light: "#AC6CFF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#0000ff",
      dark: "#0000f9",
      light: "#5013ff",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#7F00FF",
      secondary: "#000000",
      light: "#AC6CFF",
    },
    background: {
      default: "#000000",
    },
    error: {
      main: "#EA0000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: 4,
          textTransform: "capitalize",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        margin: "dense",
        size: "small",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#7F00FF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#7F00FF",
            },
          },
          "& .MuiOutlinedInput-input": {
            color: "#7F00FF",
          },
          "& .MuiInputLabel-root": {
            color: "#7F00FF",
          },
          "& .MuiFormHelperText-root": {
            color: "#7f00ff",
          },
        },
      },
    },
    typography: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
      h1: {
        fontWeight: 700,
        fontSize: "3.5rem",
        lineHeight: 1.2,
        letterSpacing: "-0.01562em",
        margin: "1.5rem 0",
      },
      h2: {
        fontWeight: 700,
        fontSize: "2.5rem",
        lineHeight: 1.2,
        letterSpacing: "-0.00833em",
        margin: "1.5rem 0",
      },
      h3: {
        fontWeight: 700,
        fontSize: "2rem",
        lineHeight: 1.2,
        letterSpacing: "0em",
        margin: "1.5rem 0",
      },
      h4: {
        fontWeight: 700,
        fontSize: "1.5rem",
        lineHeight: 1.2,
        letterSpacing: "0.00735em",
        margin: "1.5rem 0",
      },
      h5: {
        fontWeight: 700,
        fontSize: "1.25rem",
        lineHeight: 1.2,
        letterSpacing: "0em",
        margin: "1.5rem 0",
      },
      h6: {
        fontWeight: 700,
        fontSize: "1rem",
        lineHeight: 1.2,
        letterSpacing: "0.0075em",
        margin: "1.5rem 0",
      },
      subtitle1: {
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
      },
      subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: 1.5,
        letterSpacing: "0.00714em",
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
        letterSpacing: "0.01071em",
      },
      button: {
        textTransform: "none",
        fontWeight: 700,
      },
      caption: {
        fontSize: "0.75rem",
        lineHeight: 1.5,
        letterSpacing: "0.03333em",
      },
      overline: {
        fontSize: "0.75rem",
        fontWeight: 600,
        lineHeight: 0.5,
        letterSpacing: "0.08333em",
        textTransform: "uppercase",
      },
    },
  },
});

biohackersTheme = responsiveFontSizes(biohackersTheme);

export default biohackersTheme;
