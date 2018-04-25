import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
// Material UI
import List from 'material-ui/List';
// Components
import MoneyItem from '../MoneyItem/MoneyItem';

const propTypes = {
  money: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
      'income',
      'entertainment',
      'food',
      'shopping',
      'others',
    ]).isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

function MoneyList({ money }) {
  const sortByProp = R.sortBy(R.prop('date'));
  const sortesMoney = sortByProp(money);
  return (
    <div>
      {/* <MoneyControls /> */}
      <List>
        {
          sortesMoney.map(i =>
            (<MoneyItem
              key={i.id}
              type={i.type}
              name={i.name}
              date={i.date}
              value={i.value}
            />))
        }
      </List>
    </div>
  );
}

MoneyList.propTypes = propTypes;

export default MoneyList;
