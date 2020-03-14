import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { YoutubeContext } from "../../context/YoutubeContext";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const Alert = () => {
  const context: any = React.useContext(YoutubeContext);
  const [{ error: qError }] = context.vByQueryResult;
  const [{ error: vidError }] = context.vByIdResult;

  const [open, setOpen] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");

  React.useEffect(() => {
    console.log(qError, vidError);
    if (!!qError || !!vidError || !!context.error) {
      setOpen(true);
      setErrMsg(qError?.message || vidError?.message || context.error?.message);
    }
  }, [qError, vidError, context.error]);

  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={errMsg}
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};

export default Alert;
