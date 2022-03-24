import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#3659ff",
    },
    secondary: {
      main: "#ffd04f",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
