import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(24, 44, 97, 1.0)"
    },
    secondary: {
      main: "rgba(253, 114, 114, 1.0)"
    },
    text: {
      primary: "#ffd700",
      secondary: "rgba(24, 44, 97, 1.0)"
    },
    background: {
      default: "rgba(24, 44, 97, 1.0)",
      paper: "rgba(253, 114, 114, 1.0)"
    }
  },
  typography: {
    fontFamily: "'Fredoka One', cursive"
  }
});

export default theme;
