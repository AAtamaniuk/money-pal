import React from "react";
import PropTypes from "prop-types";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
// Icons
import Sort from "@material-ui/icons/Sort";
import FilterList from "@material-ui/icons/FilterList";

const styles = {
  root: {
    textAlign: "right",
    padding: "0 24px"
  }
};

const propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

function MoneyControls({ classes }) {
  return (
    <div className={classes.root}>
      <IconButton aria-label="Sort by">
        <Sort />
      </IconButton>
      <IconButton aria-label="Filter">
        <FilterList />
      </IconButton>
    </div>
  );
}

MoneyControls.propTypes = propTypes;

export default withStyles(styles)(MoneyControls);
