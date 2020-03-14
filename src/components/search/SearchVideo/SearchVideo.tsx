import React from "react";
import {
  Grid,
  makeStyles,
  Theme,
  useTheme,
  useMediaQuery,
  Box
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid100Vh from "../../layout/Grid100Vh";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { YoutubeContext } from "../../../context/YoutubeContext";

const useStyles = makeStyles((theme: Theme) => ({
  button: (props: any) => ({
    marginLeft: props.mobile ? "0px" : "10px",
    marginTop: props.mobile ? "10px" : "0px",
    height: "100%"
  }),
  textFieldRoot: {
    borderColor: `${theme.palette.primary.main} !important`,
    borderWidth: "2px"
  }
}));

const SearchVideo = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles({ mobile });

  const [state, setstate] = React.useState("");

  const context: any = React.useContext(YoutubeContext);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setstate(e.target.value);

  const handleOnClick = () => context.setQuery(state);

  return (
    <Grid100Vh>
      <Box marginBottom={theme.spacing(1)}>
        <Typography color="primary" variant={mobile ? "h5" : "h2"}>
          SEARCH
        </Typography>
        <Typography color="primary" variant={mobile ? "h6" : "h4"}>
          FOR
        </Typography>

        <Typography gutterBottom color="primary" variant={mobile ? "h6" : "h4"}>
          MUSIC
        </Typography>
      </Box>
      <Grid container justify="center" alignItems="stretch">
        <Grid item xs={mobile ? 12 : "auto"}>
          <TextField
            size="small"
            variant="outlined"
            value={state}
            onChange={handleOnChange}
            InputProps={{
              classes: {
                notchedOutline: classes.textFieldRoot
              }
            }}
          />
        </Grid>
        <Grid item xs={mobile ? 12 : "auto"}>
          <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={handleOnClick}
            className={classes.button}
            size={mobile ? "small" : "medium"}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Grid100Vh>
  );
};

export default SearchVideo;
