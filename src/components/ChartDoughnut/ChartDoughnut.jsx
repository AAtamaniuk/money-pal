import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
// Material UI
import Typography from '@material-ui/core/Typography';
// Colors
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: 'left',
  },
};

function ChartDoughnut({ data }) {
  const pieData = {
    labels: ['entertainment', 'food', 'shopping', 'others'],
    datasets: [{
      data,
      backgroundColor: [amber[400], blue[400], pink[400], red[400]],
      borderWidth: 2,
      borderColor: 'grey',
    }],
  };
  return (
    <div>
      <Typography variant="subheading" gutterBottom>
        Costs by type
      </Typography>
      <Doughnut
        data={pieData}
        width={100}
        height={100}
        options={options}
      />
    </div>
  );
}

ChartDoughnut.propTypes = propTypes;

export default ChartDoughnut;
