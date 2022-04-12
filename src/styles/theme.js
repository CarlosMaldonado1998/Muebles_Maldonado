import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#E09329",
    },
    secondary: {
      main: "#19857b",
    },
    terciary: {
      main: "#116cd6",
    },
    error: {
      main: red.A400,
    },
    blue: {
      main: "#4267B2",
    },
    red: {
      main: "#E60023",
    },
    green: {
      main: "#25D366",
    },
    purple: {
      main: "#833AB4",
    },
    white: "#fff",
  },
  typography: {
    fontFamily: ['"Helvetica Neue"'].join(","),
  },
});

export default theme;
