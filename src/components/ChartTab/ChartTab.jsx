import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

export default withStyles(styles)(ChartTab);
