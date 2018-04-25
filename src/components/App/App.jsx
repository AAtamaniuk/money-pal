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
import Tabs, { Tab } from 'material-ui/Tabs';
// Icons
import AddIcon from 'material-ui-icons/Add';
import ListIcon from 'material-ui-icons/List';
import PieChartIcon from 'material-ui-icons/PieChart';
// Styles
import './App.css';
// Test data
import moneyData from '../../testData/money';
// Helpers
import { getTotalSum } from '../../helpers/helpers';
// Components
import ListTab from '../ListTab/ListTab';
import ChartTab from '../ChartTab/ChartTab';
import FormDialog from '../FormDialog/FormDialog';

const styles = theme => ({
  header: {
    // boxShadow: 'none',
    color: 'white',
  },
  tabs: {
    flexGrow: 1,
    color: 'white',
  },
  container: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    height: 'calc(100vh - 112px)',
    maxWidth: 1024,
    // boxShadow: 'none',
  },
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 2,
    color: 'white',
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
      activeTab: 0,
    };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleFormDialogOpen = this.handleFormDialogOpen.bind(this);
    this.handleFormDialogClose = this.handleFormDialogClose.bind(this);
    this.handleChangeTab = this.handleChangeTab.bind(this);
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

  handleChangeTab(event, value) {
    this.setState({ activeTab: value });
  }

  render() {
    const { money, activeTab, isFormDialogOpen } = this.state;
    const { classes } = this.props;
    const total = getTotalSum(money);
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="static" className={classes.header} >
            <Toolbar>
              <Typography variant="title" color="inherit">
                {activeTab === 0 && 'List'}
                {activeTab === 1 && 'Chart'}
              </Typography>
            </Toolbar>
          </AppBar>
          <Paper className={classes.container}>
            <AppBar position="static" color="primary">
              <Tabs
                value={activeTab}
                onChange={this.handleChangeTab}
                centered
                fullWidth
                className={classes.tabs}
              >
                <Tab icon={<ListIcon />} />
                <Tab icon={<PieChartIcon />} />
              </Tabs>
            </AppBar>
            {activeTab === 0 && <ListTab money={money} total={total} />}
            {activeTab === 1 && <ChartTab money={money} />}
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
