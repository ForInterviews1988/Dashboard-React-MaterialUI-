import React from "react";
import { Button } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    <div className={classes.pageTitleContainer}>
      <Typography className={classes.typo} variant="h1" size="sm" style={{display: "inline-block"}}>
        {props.title}
      </Typography>
      <Typography className={classes.typo} variant="h5" size="sm" style={{display: "inline-block", marginLeft:"15px"}}>
        {props.subtitle}
      </Typography>

      {props.button && (
        <Button
          classes={{ root: classes.button }}
          variant="contained"
          size="large"
          color="secondary"
        >
          {props.button}
        </Button>
      )}
    </div>
  );
}
