import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
// Material UI
import { withStyles } from 'material-ui/styles';
// Selectors
import { getTotal } from '../../reducers/money';
// Configs
import categories from '../../config/categories';
// Components
import MoneyList from '../../components/MoneyList/MoneyList';
import Total from '../../components/Total/Total';


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: `calc(100% - ${theme.spacing.unit * 6}px)`, // totalContainer height
  },
  totalContainer: {
    height: theme.spacing.unit * 6,
  },
});

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  money: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.oneOf(categories).isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  total: PropTypes.number.isRequired,
};

function ListTab({ classes, money, total }) {
  return (
    <div className={classes.root}>
      <MoneyList money={money} />
      <div className={classes.totalContainer}>
        <Total total={total} />
      </div>
    </div>
  );
}

ListTab.propTypes = propTypes;

const mapStateToProps = state => ({
  money: state.money,
  total: getTotal(state.money),
});


export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(ListTab);
