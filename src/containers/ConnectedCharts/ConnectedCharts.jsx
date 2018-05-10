import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Selectors
import { getDataSetByCosts, getDataSetByType } from '../../selectors';
// Components
import ChartTab from '../../components/ChartTab/ChartTab';

const propTypes = {
  dataSetByCost: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  dataSetByType: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

function ConnectedCharts({ dataSetByCost, dataSetByType }) {
  return (
    <ChartTab
      dataSetByCost={dataSetByCost}
      dataSetByCategory={dataSetByType}
    />
  );
}

ConnectedCharts.propTypes = propTypes;

const mapStateToProps = state => ({
  dataSetByCost: getDataSetByCosts(state),
  dataSetByType: getDataSetByType(state),
});

export default connect(mapStateToProps)(ConnectedCharts);
