import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
// Icons
import AddCircleOutline from 'material-ui-icons/AddCircleOutline';
import RemoveCircleOutline from 'material-ui-icons/RemoveCircleOutline';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  total: {
    display: 'inline-block',
  },
};

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  total: PropTypes.number.isRequired,
  onAddIncome: PropTypes.func.isRequired,
  onAddCost: PropTypes.func.isRequired,
};

function Total({
  classes, total, onAddIncome, onAddCost,
}) {
  return (
    <div className={classes.root}>
      <IconButton onClick={() => onAddIncome()} aria-label="Add income">
        <AddCircleOutline />
      </IconButton>
      <Typography variant="title" className={classes.total}>
        {total}
      </Typography>
      <IconButton onClick={() => onAddCost()} aria-label="Add cost">
        <RemoveCircleOutline />
      </IconButton>
    </div >
  );
}

Total.propTypes = propTypes;

export default withStyles(styles)(Total);
