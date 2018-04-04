import React, { Component } from 'react';
// Material UI
import Typography from 'material-ui/Typography';
// Styles
import './App.css';
// Test data
import moneyData from '../../testData/money';
// Components
import Total from '../Total/Total';
import MoneyList from '../MoneyList/MoneyList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      money: [

      ],
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
    return (
      <div>
        <Typography variant="headline">Money Pal</Typography>
        <Total total={0} onAddIncome={this.handleAddIncome} onAddCost={this.handleAddCost} />
        <MoneyList money={money} />
      </div>
    );
  }
}

export default App;
