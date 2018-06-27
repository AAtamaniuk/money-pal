import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
// Material UI
import Typography from '@material-ui/core/Typography';
// Colors
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

const options = {
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
};

function ChartBar({ data }) {
  const barData = {
    labels: ['income', 'costs'],
    datasets: [{
      data,
      backgroundColor: [green[400], red[400]],
      borderWidth: 2,
      borderColor: 'grey',
    }],
  };
  return (
    <div>
      <Typography variant="subheading" gutterBottom>
        Income/Costs
      </Typography>
      <Bar
        data={barData}
        width={100}
        height={100}
        options={options}
      />
    </div>
  );
}

ChartBar.propTypes = propTypes;

export default ChartBar;
