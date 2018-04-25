import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    backgroundColor: '#8ac34a',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    verticalAlign: 'middle',
    alignItems: 'center',
  },
  total: {
    color: 'inherit',
  },
};

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  total: PropTypes.number.isRequired,
};

function Total({ classes, total }) {
  return (
    <div className={classes.root}>
      <Typography variant="headline" className={classes.total}>
          Total: {total}
      </Typography>
    </div >
  );
}

Total.propTypes = propTypes;

export default withStyles(styles)(Total);
