import React, { Component } from "react";
import PropTypes from "prop-types";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ListIcon from "@material-ui/icons/List";
import PieChartIcon from "@material-ui/icons/PieChart";
// Components
import ConnectedList from "../containers/ConnectedList";
import ConnectedCharts from "../containers/ConnectedCharts";

const styles = theme => ({
  tabs: {
    flexGrow: 1,
    color: "white"
  },
  container: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "calc(100vh - 112px)",
    maxWidth: 1024
  }
});

const propTypes = {
  classes: PropTypes.shape({
    tabs: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired
  }).isRequired
};

class DashboardPage extends Component {
  state = {
    activeTab: 0
  };

  handleChangeTab = (event, value) => {
    this.setState({ activeTab: value });
  };

  render() {
    const { classes } = this.props;
    const { activeTab } = this.state;
    return (
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
    );
  }
}

DashboardPage.propTypes = propTypes;

export default withStyles(styles)(DashboardPage);
