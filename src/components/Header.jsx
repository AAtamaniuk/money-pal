import React from "react";
import PropTypes from "prop-types";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  header: {
    color: "white"
  }
};

const propTypes = {
  classes: PropTypes.shape({ header: PropTypes.string.isRequired }).isRequired,
  title: PropTypes.string.isRequired
};

function Header({ classes, title }) {
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = propTypes;

export default withStyles(styles)(Header);
