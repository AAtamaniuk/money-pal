import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from 'material-ui/styles';
// Configs
import types from '../../config/types';
// Components
import MoneyList from '../MoneyList/MoneyList';
import Total from '../Total/Total';

const styles = () => ({
  // root: {
  //   display: 'flex',
  //   flexDirection: 'column',
  // },
  // moneyList: {
  //   flexGrow: 1,
  //   overflow: 'scroll',
  //   maxHeight: 'calc(100% - 32px)',
  // },
  // total: {
  //   flexBasis: 32,
  // },
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
  total: PropTypes.number.isRequired,
};

function ListTab({ classes, money, total }) {
  return (
    <div className={classes.root}>
      <div className={classes.moneyList}>
        <MoneyList money={money} />
      </div>
      <div className={classes.total}>
        <Total total={total} />
      </div>
    </div>
  );
}

ListTab.propTypes = propTypes;

export default withStyles(styles)(ListTab);
