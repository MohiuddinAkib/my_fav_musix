import React from "react";
import { YoutubeContext } from "../../../context/YoutubeContext";

import EachMusic from "../../EachMusic";
import {
  Typography,
  makeStyles,
  CircularProgress,
  Box
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  typography: {
    textShadow: "2px 5px rgba(253, 114, 114,1.0)"
  }
});

const SearchResults = () => {
  const classes = useStyles();
  const context: any = React.useContext(YoutubeContext);

  const [{ data, loading, error }] = context.vByIdResult;

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
        className={classes.typography}
      >
        Search results
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

export default SearchResults;
