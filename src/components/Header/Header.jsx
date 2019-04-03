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
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  activeTab: PropTypes.number.isRequired
};

function Header({ classes, activeTab }) {
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          {activeTab === 0 && "List"}
          {activeTab === 1 && "Chart"}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = propTypes;

export default withStyles(styles)(Header);