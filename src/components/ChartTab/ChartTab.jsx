import React from 'react';
import PropTypes from 'prop-types';
import { Bar, Doughnut } from 'react-chartjs-2';
// Material UI
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
// Colors
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green';
import amber from 'material-ui/colors/amber';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
// Configs
import categories from '../../config/categories';
// Helpers
import { getDataSetByTypes, getDataSetByCategory } from '../../helpers/helpers';


const styles = theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing.unit * 2,
  },
  column: {
    width: '50%',
  },
});

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  money: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(categories).isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};


function ChartTab({ classes, money }) {
  const pieData = {
    labels: ['entertainment', 'food', 'shopping', 'others'],
    datasets: [{
      data: getDataSetByTypes(money),
      backgroundColor: [amber[400], blue[400], pink[400], red[400]],
      borderWidth: 2,
      borderColor: 'grey',
    }],
  };
  const barData = {
    labels: ['income', 'costs'],
    datasets: [{
      data: getDataSetByCategory(money),
      backgroundColor: [green[400], red[400]],
      borderWidth: 2,
      borderColor: 'grey',
    }],
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <Typography variant="subheading" gutterBottom>
          Income/Costs
          </Typography>
          <Bar
            data={barData}
            width={100}
            height={100}
            options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
              position: 'left',
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                },
              }],
            },
          }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subheading" gutterBottom>
          Costs by type
          </Typography>
          <Doughnut
            data={pieData}
            width={100}
            height={100}
            options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: 'left',
            },
          }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

ChartTab.propTypes = propTypes;

export default withStyles(styles)(ChartTab);
