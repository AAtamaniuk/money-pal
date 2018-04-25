import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = {
  root: {
    textAlign: 'center',
    padding: '16px 24px',
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
    <Fragment>
      <Divider />
      <div className={classes.root}>
        <Typography variant="headline" className={classes.total}>
          Total: {total}
        </Typography>
      </div >
    </Fragment>
  );
}

Total.propTypes = propTypes;

export default withStyles(styles)(Total);
