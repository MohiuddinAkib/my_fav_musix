import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {
  makeStyles,
  Box,
  Typography,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import Grid100Vh from "../../layout/Grid100Vh";
import { YoutubeContext } from "../../../context/YoutubeContext";

const useStyle = makeStyles({
  flexContainer: {
    alignItems: "center"
  }
});

const FavCategory = () => {
  const theme = useTheme();
  const classes = useStyle();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const context: any = React.useContext(YoutubeContext);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    context.setMood(newValue);
  };

  return (
    <Grid100Vh>
      <Box marginBottom={theme.spacing(0.3)}>
        <Typography color="primary" variant={mobile ? "h6" : "h4"}>
          SOME OF MY FAVORITE SONGS BASED
        </Typography>
        <Typography color="primary" variant={mobile ? "h6" : "h4"}>
          ON MY MOOD
        </Typography>
      </Box>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={context.mood}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        classes={{
          flexContainer: classes.flexContainer
        }}
      >
        <Tab
          disableRipple
          label="Sad/Depressed mood"
          value="sad_mood"
          color="primary"
        />
        <Tab
          disableRipple
          label="Rock mood"
          value="rock_mood"
          color="primary"
        />
        <Tab
          disableRipple
          label="Thagore mood"
          value="thagore_mood"
          color="primary"
        />
      </Tabs>
    </Grid100Vh>
  );
};

export default FavCategory;
