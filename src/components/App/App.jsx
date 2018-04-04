import React, { Component } from 'react';
import './App.css';
// Material UI
import Typography from 'material-ui/Typography';
// Components
import Total from '../Total/Total';


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
      </div>
    );
  }
}

export default App;
