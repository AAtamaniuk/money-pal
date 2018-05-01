import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Configs
import categories from '../../config/categories';
// Actions
import addMoney from '../../actions';
// Selectors
import { getTotal } from '../../reducers/money';
// Components
import ListTab from '../../components/ListTab/ListTab';

const propTypes = {
  money: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.oneOf(categories).isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  total: PropTypes.number.isRequired,
  addMoneyItem: PropTypes.func.isRequired,
};

function ConnectedList({ money, total, addMoneyItem }) {
  return (
    <ListTab money={money} total={total} addMoneyItem={addMoneyItem} />
  );
}

ConnectedList.propTypes = propTypes;

const mapStateToProps = state => ({
  money: state.money,
  total: getTotal(state.money),
});

export default connect(mapStateToProps, { addMoneyItem: addMoney })(ConnectedList);
