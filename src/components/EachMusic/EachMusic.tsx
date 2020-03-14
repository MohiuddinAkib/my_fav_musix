import React from "react";
import ReactPlayer from "react-player";
import {
  Card,
  CardContent,
  makeStyles,
  Box,
  CardMedia,
  IconButton,
  Typography,
  Theme,
  useTheme,
  Chip,
  useMediaQuery,
  LinearProgress
} from "@material-ui/core";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

import turncate from "../../utils/turncate";
import { YoutubeContext } from "../../context/YoutubeContext";
import secondsToMinSec from "../../utils/secondsToMinSec";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    backgroundColor: "white",
    marginBottom: theme.spacing(1)
  },
  content: {
    flex: "1 0 auto"
  },
  cover: (props: any) => ({
    width: "100%",
    height: props.mobile ? "100px" : "300px"
  }),
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  chips: {
    margin: theme.spacing(1)
  }
}));

const EachMusic: React.FC<{ item: any }> = props => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles({ mobile });
  const context: any = React.useContext(YoutubeContext);
  const [playedProgress, setPlayedProgress] = React.useState(0);
  const [loadedProgess, setLoadedProgress] = React.useState(0);
  const [playedSeconds, setPlayedSeconds] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const handlePlay = () => {
    context.setPlaying((prevState: boolean) => !prevState);
    context.setPlayingVid(props.item.id);
  };

  const handleProgess = ({
    played,
    playedSeconds,
    loaded,
    loadedSeconds
  }: {
    played: any;
    playedSeconds: any;
    loaded: any;
    loadedSeconds: any;
  }) => {
    setPlayedProgress(played);
    setPlayedSeconds(playedSeconds);

    setLoadedProgress(loaded);
  };

  const handlePause = () => {
    context.setPlaying((prevState: boolean) => false);
    context.setPlayingVid("");
  };

  const handleDuration = (duration: number) => {
    console.log(duration);
    setDuration(duration);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={
          props.item.snippet.thumbnails.standard?.url ||
          props.item.snippet.thumbnails.medium?.url
        }
        title={props.item.snippet.title}
      />
      <Box display="none">
        <ReactPlayer
          playing={context.playing && context.playingVid === props.item.id}
          url={`https://www.youtube.com/watch?v=${props.item.id}`}
          onProgress={handleProgess}
          onPause={handlePause}
          onDuration={handleDuration}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <CardContent className={classes.content}>
          <Typography
            variant={mobile ? "subtitle1" : "h5"}
            component={mobile ? "h6" : "h5"}
          >
            {props.item.snippet.title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {turncate(props.item.snippet.channelTitle, 13)}
            <Box
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              marginTop={theme.spacing(0.1)}
            >
              {props.item.snippet.tags &&
                props.item.snippet.tags
                  .slice(0, mobile ? 5 : 7)
                  .map((tag: string, index: number) => (
                    <Chip
                      label={turncate(tag, 13)}
                      key={index}
                      className={classes.chips}
                      size={mobile ? "small" : "medium"}
                    />
                  ))}
            </Box>
          </Typography>
        </CardContent>
        <LinearProgress
          variant="determinate"
          value={playedProgress}
          valueBuffer={loadedProgess}
          color="secondary"
        />
        <Box display="flex" justifyContent="space-around">
          <Typography>
            {/* <Moment format="mm:ss">{playedSeconds}</Moment> */}

            {secondsToMinSec(playedSeconds)}
          </Typography>
          <Typography>
            {/* <Moment format="mm:ss">{duration}</Moment> */}
            {secondsToMinSec(duration)}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-around">
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause" onClick={handlePlay}>
            {context.playing && context.playingVid === props.item.id ? (
              <PauseIcon className={classes.playIcon} />
            ) : (
              <PlayArrowIcon className={classes.playIcon} />
            )}
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default EachMusic;
