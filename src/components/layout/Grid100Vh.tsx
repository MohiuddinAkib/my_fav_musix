import React from "react";
import gif from "../../img/animated_icon.gif";
import {
  Grid,
  makeStyles,
  Theme,
  useTheme,
  useMediaQuery,
  Box
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    minHeight: "100vh"
  },
  animatedGif: {
    width: "100px",
    borderRadius: "50%",
    height: "100px"
  }
}));

const Grid100Vh: React.FC = props => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles({ mobile });

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      className={classes.grid}
    >
      <Grid item>
        <Box marginBottom={theme.spacing(0.2)}>
          <img src={gif} alt="animated_icon" className={classes.animatedGif} />
        </Box>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default Grid100Vh;
