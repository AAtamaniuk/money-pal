import React from "react";
import PropTypes from "prop-types";
// Material UI
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    textAlign: "center"
  }
});

const NoMoney = ({ classes }) => (
  <div className={classes.container}>
    <Typography variant="display1" className={classes.text}>
      No money records yet
    </Typography>
  </div>
);

NoMoney.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(NoMoney);
