import React from "react";
import { makeStyles, Grid, Card, CardContent } from "@material-ui/core";

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

const BaseLayout: React.FC<{
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
}> = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item component="section" xs={5}>
        <Card elevation={0} className={classes.card}>
          <CardContent>{props.leftChildren}</CardContent>
        </Card>
      </Grid>
      <Grid item component="section" xs={6}>
        <Card elevation={0} className={classes.card2}>
          <CardContent>{props.rightChildren}</CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default BaseLayout;
