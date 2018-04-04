import React, { Component } from 'react';
// Material UI
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import CssBaseline from 'material-ui/CssBaseline';
// Styles
import './App.css';
// Test data
import moneyData from '../../testData/money';
// Components
import Total from '../Total/Total';
import MoneyList from '../MoneyList/MoneyList';

const styles = () => ({
  root: {

  },
  container: {
    marginTop: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: 1024,
  },
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      money: [],
    };
    this.handleAddIncome = this.handleAddIncome.bind(this);
    this.handleAddCost = this.handleAddCost.bind(this);
  }

  componentDidMount() {
    this.setState({
      money: moneyData,
    });
  }

  handleAddIncome() {
    console.log('Add income');
  }

  handleAddCost() {
    console.log('Add costs');
  }

  render() {
    const { money } = this.state;
    const { classes } = this.props;
    const total = money
      .map(i => i.value)
      .reduce((sum, current) => sum + current, 0);
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Money Pal
              </Typography>
            </Toolbar>
          </AppBar>
          <Paper className={classes.container}>
            <Total
              total={total}
              onAddIncome={this.handleAddIncome}
              onAddCost={this.handleAddCost}
            />
            <MoneyList money={money} />
          </Paper>
        </div>
      </React.Fragment>

    );
  }
}

export default withStyles(styles)(App);
