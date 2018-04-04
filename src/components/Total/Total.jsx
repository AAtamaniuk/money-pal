import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import IconButton from 'material-ui/IconButton';
// Icons
import AddCircleOutline from 'material-ui-icons/AddCircleOutline';
import RemoveCircleOutline from 'material-ui-icons/RemoveCircleOutline';

const propTypes = {
  total: PropTypes.number.isRequired,
  onAddIncome: PropTypes.func.isRequired,
  onAddCost: PropTypes.func.isRequired,
};

function componentName({ total, onAddIncome, onAddCost }) {
  return (
    <div>
      <IconButton onClick={onAddIncome} aria-label="Add income">
        <AddCircleOutline />
      </IconButton>
      <span>{total}</span>
      <IconButton onClick={onAddCost} aria-label="Add cost">
        <RemoveCircleOutline />
      </IconButton>
    </div >
  );
}

componentName.propTypes = propTypes;

export default componentName;
