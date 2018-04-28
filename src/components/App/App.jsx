import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
// Material UI
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import CssBaseline from 'material-ui/CssBaseline';
import Tabs, { Tab } from 'material-ui/Tabs';
// Icons
import ListIcon from 'material-ui-icons/List';
import PieChartIcon from 'material-ui-icons/PieChart';
// Test data
import moneyData from '../../testData/money';
// Containers
import ListTab from '../../containers/ListTab/ListTab';
// Components
import ChartTab from '../ChartTab/ChartTab';


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
});

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      money: [],
      activeTab: 0,
    };
    this.handleAddItem = this.handleAddItem.bind(this);
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


  handleChangeTab(event, value) {
    this.setState({ activeTab: value });
  }

  render() {
    const { money, activeTab } = this.state;
    const { classes } = this.props;
    return (
      <Fragment>
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
            {activeTab === 0 && <ListTab />}
            {activeTab === 1 && <ChartTab money={money} />}
          </Paper>
        </div>
      </Fragment>
    );
  }
}

App.propTypes = propTypes;

export default withStyles(styles)(App);
