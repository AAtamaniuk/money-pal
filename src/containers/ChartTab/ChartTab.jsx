import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
// Material UI
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

// Selectors
import { getDataSetByCosts, getDataSetByCategory } from '../../reducers/money';
// Components
import ChartDoughnut from '../../components/ChartDoughnut/ChartDoughnut';
import ChartBar from '../../components/ChartBar/ChartBar';


const styles = theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing.unit * 2,
  },
});

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  dataSetByCost: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  dataSetByCategory: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};


function ChartTab({ classes, dataSetByCost, dataSetByCategory }) {
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <ChartBar data={dataSetByCategory} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartDoughnut data={dataSetByCost} />
        </Grid>
      </Grid>
    </div>
  );
}

ChartTab.propTypes = propTypes;

const mapStateToProps = state => ({
  money: state.money,
  dataSetByCost: getDataSetByCosts(state.money),
  dataSetByCategory: getDataSetByCategory(state.money),
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(ChartTab);
