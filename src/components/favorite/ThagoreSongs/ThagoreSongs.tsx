import React from "react";
import { YoutubeContext } from "../../../context/YoutubeContext";
import useYoutubeSearchByVideoIds from "../../../hooks/youtube/useYoutubeSearchByVideoIds";
import { FavSong } from "../../../interfaces/FavSong";
import {
  Box,
  CircularProgress,
  Typography,
  makeStyles
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import EachMusic from "../../EachMusic";

const useStyles = makeStyles({
  typography: {
    textShadow: "2px 5px rgba(253, 114, 114,1.0)"
  }
});

export const ThagoreSongs = () => {
  const classes = useStyles();

  const [vids, setVids] = React.useState<string[]>([]);
  const context: any = React.useContext(YoutubeContext);
  const [{ data, loading, error }, refetch] = useYoutubeSearchByVideoIds(vids);

  React.useEffect(() => {
    setVids((context.thagoreFavIds[0] as FavSong).songIds);
  }, [context.songLang]);

  React.useEffect(() => {
    if (vids.length > 0) {
      refetch();
    }
  }, [vids]);

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
      <Typography
        gutterBottom
        variant="h4"
        align="center"
        color="textPrimary"
        className={context.songLang === "bangla" ? classes.typography : ""}
      >
        RABINDRA SANGIT
      </Typography>

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
