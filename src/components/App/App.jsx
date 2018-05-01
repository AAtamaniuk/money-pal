import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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
// Containers
import ConnectedList from '../../containers/ConnectedList/ConnectedList';
import ConnectedCharts from '../../containers/ConnectedCharts/ConnectedCharts';


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
      activeTab: 0,
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab(event, value) {
    this.setState({ activeTab: value });
  }

  render() {
    const { activeTab } = this.state;
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
            {activeTab === 0 && <ConnectedList />}
            {activeTab === 1 && <ConnectedCharts />}
          </Paper>
        </div>
      </Fragment>
    );
  }
}

App.propTypes = propTypes;

export default withStyles(styles)(App);
