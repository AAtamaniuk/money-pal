import React from "react";
import PropTypes from "prop-types";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    backgroundColor: "#8ac34a",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    color: "white",
    verticalAlign: "middle",
    alignItems: "center"
  },
  total: {
    color: "inherit"
  }
};

const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired
  }).isRequired,
  total: PropTypes.number.isRequired
};

function Total({ classes, total }) {
  return (
    <div className={classes.root}>
      <Typography variant="headline" className={classes.total}>
        Total: {total.toFixed(2)}
      </Typography>
    </div>
  );
}

Total.propTypes = propTypes;

export default withStyles(styles)(Total);
