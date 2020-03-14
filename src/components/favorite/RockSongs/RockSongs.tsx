import React from "react";
import EachMusic from "../../EachMusic";
import {
  CircularProgress,
  makeStyles,
  Box,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { FavSong } from "../../../interfaces/FavSong";
import { YoutubeContext } from "../../../context/YoutubeContext";
import useYoutubeSearchByVideoIds from "../../../hooks/youtube/useYoutubeSearchByVideoIds";

const useStyles = makeStyles({
  typography: {
    textShadow: "2px 5px rgba(253, 114, 114,1.0)"
  },
  typography2: {
    textShadow: "none"
  }
});

const RockSongs = () => {
  const classes = useStyles();
  const [vids, setVids] = React.useState<string[]>([]);
  const context: any = React.useContext(YoutubeContext);
  const [{ data, loading, error }, refetch] = useYoutubeSearchByVideoIds(vids);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    setVids(
      (context.rockFavIds[context.songLang === "english" ? 0 : 1] as FavSong)
        .songIds
    );
  }, [context.songLang]);

  React.useEffect(() => {
    if (vids.length > 0) {
      refetch();
    }
  }, [vids]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) =>
    context.setSongLang(newValue);

  if (loading)
    return (
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress color="secondary"></CircularProgress>
      </Box>
    );

  if (error)
    return (
      <Alert severity="error">{error.message || "Something went wrong!"}</Alert>
    );

  return (
    <React.Fragment>
      <Tabs
        value={context.songLang}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab
          label={
            <Typography
              gutterBottom
              variant={mobile ? "body1" : "h4"}
              component={mobile ? "p" : "h4"}
              align="center"
              color="textPrimary"
              className={
                context.songLang === "english" ? classes.typography : ""
              }
            >
              ENGLISH
            </Typography>
          }
          value="english"
        />
        <Tab
          label={
            <Typography
              gutterBottom
              variant={mobile ? "body1" : "h4"}
              component={mobile ? "p" : "h4"}
              align="center"
              color="textPrimary"
              className={
                context.songLang === "bangla" ? classes.typography : ""
              }
            >
              BANGLA
            </Typography>
          }
          value="bangla"
        />
      </Tabs>

      {data && (
        <Box
          maxHeight="100vh"
          style={{
            overflowY: "scroll",
            scrollbarWidth: "none"
          }}
        >
          {data.items.map((item: any) => (
            <EachMusic key={item.id} item={item} />
          ))}
        </Box>
      )}
    </React.Fragment>
  );
};

export default RockSongs;
