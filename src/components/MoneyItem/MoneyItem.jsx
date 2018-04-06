import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
// Icons
import ArrowDownwarf from 'material-ui-icons/ArrowDownward';
import LocalActivity from 'material-ui-icons/LocalActivity';
import LocalDining from 'material-ui-icons/LocalDining';
import LocalMall from 'material-ui-icons/LocalMall';
import MoneyOff from 'material-ui-icons/MoneyOff';
// Colors
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';
import amber from 'material-ui/colors/amber';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';

const styles = {
  incomeNumber: {
    fontWeight: 500,
    color: red[400],
  },
  costNumber: {
    fontWeight: 500,
    color: green[400],
  },
  income: {
    backgroundColor: green[400],
  },
  entertainment: {
    backgroundColor: amber[400],
  },
  food: {
    backgroundColor: blue[400],
  },
  shopping: {
    backgroundColor: pink[400],
  },
  others: {
    backgroundColor: red[400],
  },
};

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  type: PropTypes.oneOf([
    'income',
    'entertainment',
    'food',
    'shopping',
    'others',
  ]).isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

function MoneyItem({
  classes, type, name, date, value,
}) {
  return (
    <ListItem>
      <Avatar className={classes[type]}>
        {{
          income: <ArrowDownwarf />,
          entertainment: <LocalActivity />,
          food: <LocalDining />,
          shopping: <LocalMall />,
          others: <MoneyOff />,
        }[type]}
      </Avatar>
      <ListItemText primary={name} secondary={date} />
      {type === 'income'
        ? <span className={classes.incomeNumber}>+{value}</span>
        : <span className={classes.costNumber}>{value}</span>
      }
    </ListItem>
  );
}

MoneyItem.propTypes = propTypes;

export default withStyles(styles)(MoneyItem);
