import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#502a17",
    },
    secondary: {
      main: "#9a5723",
    },
    terciary: {
      main: "#E8BF56",
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
    whiteT: {
      main: "#ffffff",
    },
    white: "#fff",
    brown: "#9a5723",
  },
  typography: {
    fontFamily: ['"Helvetica Neue"'].join(","),
  },
});

export default theme;
