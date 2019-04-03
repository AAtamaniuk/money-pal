import React, { Component } from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { addMoneyRecord } from "../actions/moneyRecords";
import MoneyForm from "../components/MoneyForm";

const styles = theme => ({
  container: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    maxWidth: 512
  },
  headline: {
    padding: 16
  }
});

class AddMoneyPage extends Component {
  onSubmit = moneyRecord => {
    const { addMoney, history } = this.props;
    addMoney(moneyRecord);
    history.push("/");
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.container}>
        <Typography className={classes.headline} variant="headline">
          Add money record
        </Typography>
        <Divider />
        <MoneyForm onSubmit={this.onSubmit} />
      </Paper>
    );
  }
}

AddMoneyPage.propTypes = {
  addMoney: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired
  }).isRequired
};

export default compose(
  withStyles(styles),
  connect(
    null,
    { addMoney: addMoneyRecord }
  )
)(AddMoneyPage);
