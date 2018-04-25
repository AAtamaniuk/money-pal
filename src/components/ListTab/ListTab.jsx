import React from 'react';
import PropTypes from 'prop-types';
// Configs
import types from '../../config/types';
// Components
import MoneyList from '../MoneyList/MoneyList';
import Total from '../Total/Total';

const propTypes = {
  money: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(types).isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  total: PropTypes.number.isRequired,
};

function ListTab({ money, total }) {
  return (
    <div>
      <MoneyList money={money} />
      <Total total={total} />
    </div>
  );
}

ListTab.propTypes = propTypes;

export default ListTab;
