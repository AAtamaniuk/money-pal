import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
// Material UI
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import CssBaseline from 'material-ui/CssBaseline';
import Button from 'material-ui/Button';
// Icons
import AddIcon from 'material-ui-icons/Add';
// Styles
import './App.css';
// Test data
import moneyData from '../../testData/money';
// Components
import Total from '../Total/Total';
import MoneyList from '../MoneyList/MoneyList';
import FormDialog from '../FormDialog/FormDialog';

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
  button: {
    position: 'absolute',
    // bottom: theme.spacing.unit * 2,
    // right: theme.spacing.unit * 2,
    bottom: 32,
    right: 32,
  },
});

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      money: [],
      isFormDialogOpen: false,
    };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleFormDialogOpen = this.handleFormDialogOpen.bind(this);
    this.handleFormDialogClose = this.handleFormDialogClose.bind(this);
  }

  componentDidMount() {
    this.setState({ money: moneyData });
  }

  handleAddItem(name, type, value) {
    const newItem = {
      id: shortid.generate(),
      type,
      name,
      date: Date.now(),
      value: type === 'income' ? Number(value) : -Number(value),
    };
    this.setState({
      money: [...this.state.money, newItem],
    });
    this.handleFormDialogClose();
  }

  handleFormDialogOpen() {
    this.setState({ isFormDialogOpen: true });
  }

  handleFormDialogClose() {
    this.setState({ isFormDialogOpen: false });
  }

  render() {
    const { money, isFormDialogOpen } = this.state;
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
            <MoneyList money={money} />
            <Total total={total} />
          </Paper>
          <Button
            variant="fab"
            color="secondary"
            aria-label="add"
            className={classes.button}
            onClick={this.handleFormDialogOpen}
          >
            <AddIcon />
          </Button>
          <FormDialog
            isOpen={isFormDialogOpen}
            onDialogClose={this.handleFormDialogClose}
            onAddItem={this.handleAddItem}
          />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = propTypes;

export default withStyles(styles)(App);
