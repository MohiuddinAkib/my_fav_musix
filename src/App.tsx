import React from "react";
import Alert from "./components/Alert";

import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  IconButton,
  Box,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import { Info, Search, Favorite } from "@material-ui/icons";
import About from "./components/About";
import SearchComponent from "./pages/Search";
import { YoutubeContext } from "./context/YoutubeContext";
import { Switch, Route, Link } from "react-router-dom";
import Favorites from "./pages/Favorites";

const useStyles = makeStyles({
  card: {
    borderRadius: 0,
    minHeight: "100vh",
    textAlign: "center",
    height: "100%"
  },
  card2: {
    background: "transparent"
  },
  h100: {
    height: "100%"
  },
  iconButton: {
    color: "gold"
  }
});

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const context: any = React.useContext(YoutubeContext);

  const handleAbout = () => {
    context.setShowAbout(true);
  };

  return (
    <Grid component="main" container>
      <Grid item xs={1}>
        <Grid
          container
          justify="space-between"
          className={classes.h100}
          alignContent="center"
          spacing={4}
        >
          <Grid item xs={12}>
            <Box textAlign="center">
              <Link to="/favorites">
                <IconButton
                  size={mobile ? "small" : "medium"}
                  className={classes.iconButton}
                >
                  <Favorite />
                </IconButton>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
              <Link to="/">
                <IconButton
                  size={mobile ? "small" : "medium"}
                  className={classes.iconButton}
                >
                  <Search />
                </IconButton>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
              <IconButton
                size={mobile ? "small" : "medium"}
                className={classes.iconButton}
                onClick={handleAbout}
              >
                <Info />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Switch>
        <Route exact path="/">
          <SearchComponent />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch>

      <About />
      <Alert />
    </Grid>
  );
}

export default App;
