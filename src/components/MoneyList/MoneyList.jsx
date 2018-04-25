import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
// Material UI
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
// Configs
import types from '../../config/types';
// Components
import MoneyItem from '../MoneyItem/MoneyItem';

const styles = () => ({
  root: {
    maxHeight: '100%',
    overflowY: 'scroll',
    flexGrow: 1,
  },
});

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  money: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(types).isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

function MoneyList({ classes, money }) {
  const sortByProp = R.sortBy(R.prop('date'));
  const sortesMoney = sortByProp(money);
  return (
    <div className={classes.root}>
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

export default withStyles(styles)(MoneyList);
