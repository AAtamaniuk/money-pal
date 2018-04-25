import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    textAligh: 'center',
  },
};

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

function ChartTab({ classes }) {
  return (
    <div className={classes.root}>
      <h2>This is chart tab</h2>
    </div>
  );
}

ChartTab.propTypes = propTypes;

export default withStyles(styles)(ChartTab);
