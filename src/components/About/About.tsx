import React from "react";
import { YoutubeContext } from "../../context/YoutubeContext";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import me from "../../img/me.jpg";
import {
  DialogContent,
  DialogActions,
  CardMedia,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
  Box,
  DialogContentText,
  Typography,
  Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  cover: (props: any) => ({
    width: "100%",
    height: props.mobile ? "300px" : "300px",
    zIndex: 1
  }),
  colorBlack: {
    color: "#000000"
  },
  dialogContent: {
    textAlign: "justify"
  },
  borderMedia: (props: any) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: props.mobile ? "1%" : "1.5%",
    left: props.mobile ? "1%" : "1.2%",
    border: `2px solid ${theme.palette.primary.main}`,
    zIndex: -1
  })
}));

const About: React.FC = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles({ mobile });
  const context: any = React.useContext(YoutubeContext);

  const handleClose = () => context.setShowAbout(false);

  return (
    <React.Fragment>
      <Dialog
        fullScreen={mobile}
        fullWidth
        open={context.showAbout}
        onClose={handleClose}
      >
        <DialogTitle>
          <Typography className={classes.colorBlack}>
            Made with ♥ by Akib
          </Typography>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Box
            position="relative"
            marginBottom={theme.spacing(0.3)}
            zIndex="100"
          >
            <CardMedia className={classes.cover} image={me} />
            <span className={classes.borderMedia}></span>
          </Box>
          <DialogContentText className={classes.colorBlack}>
            Hi! I am a junior software engineer having 3+ years of experience
            developing web apps. Over these years my expertise evolved around
            JavaScript (Node.js), PHP, Python, GoLang and Rust.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default About;
