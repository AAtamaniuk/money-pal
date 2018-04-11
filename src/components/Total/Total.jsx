import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    display: 'flex',
    textAlign: 'right',
  },
  total: {
    display: 'inline-block',
  },
};

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  total: PropTypes.number.isRequired,
};

function Total({
  classes, total,
}) {
  return (
    <div className={classes.root}>
      <Typography variant="title" className={classes.total}>
        {total}
      </Typography>
    </div >
  );
}

Total.propTypes = propTypes;

export default withStyles(styles)(Total);
