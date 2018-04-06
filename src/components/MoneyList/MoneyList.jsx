import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import List from 'material-ui/List';
// Components
import MoneyItem from '../MoneyItem/MoneyItem';

const propTypes = {
  money: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

function componentName({ money }) {
  return (
    <List>
      {
        money.map(i =>
          (<MoneyItem
            key={i.id}
            type={i.type}
            name={i.name}
            date={i.date}
            value={i.value}
          />))
      }
    </List>
  );
}

componentName.propTypes = propTypes;

export default componentName;
