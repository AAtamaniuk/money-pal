import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Selectors
import { getDataSetByCosts, getDataSetByCategory } from '../../reducers/money';
// Components
import ChartTab from '../../components/ChartTab/ChartTab';

const propTypes = {
  dataSetByCost: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  dataSetByCategory: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

function ConnectedCharts({ dataSetByCost, dataSetByCategory }) {
  return (
    <ChartTab
      dataSetByCost={dataSetByCost}
      dataSetByCategory={dataSetByCategory}
    />
  );
}

ConnectedCharts.propTypes = propTypes;

const mapStateToProps = state => ({
  dataSetByCost: getDataSetByCosts(state.money),
  dataSetByCategory: getDataSetByCategory(state.money),
});

export default connect(mapStateToProps)(ConnectedCharts);
