import React, { Component } from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { editMoneyRecord, removeMoneyRecord } from "../actions/moneyRecords";
import { findMoneyRecordById } from "../selectors/index";
import moneyRecordProps from "../config/moneyRecordProps";
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
  header: {
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

class EditMoneyPage extends Component {
  handleSubmit = updates => {
    const { selectedMoneyRecord, editMoney, history } = this.props;
    editMoney(selectedMoneyRecord.id, updates);
    history.push("/");
  };

  handleRemove = () => {
    const { selectedMoneyRecord, removeMoney, history } = this.props;
    removeMoney(selectedMoneyRecord.id);
    history.push("/");
  };

  render() {
    const { selectedMoneyRecord, classes } = this.props;
    return (
      <Paper className={classes.container}>
        <div className={classes.header}>
          <Typography variant="headline">Edit money record</Typography>
          <IconButton aria-label="Delete" onClick={this.handleRemove}>
            <DeleteIcon />
          </IconButton>
        </div>
        <Divider />
        <MoneyForm
          moneyRecord={selectedMoneyRecord}
          onSubmit={this.handleSubmit}
        />
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { match } = props;
  return {
    selectedMoneyRecord: findMoneyRecordById(state, match.params.id)
  };
};

EditMoneyPage.propTypes = {
  selectedMoneyRecord: PropTypes.shape({
    moneyRecordProps
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  editMoney: PropTypes.func.isRequired,
  removeMoney: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    container: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired
  }).isRequired
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    {
      editMoney: editMoneyRecord,
      removeMoney: removeMoneyRecord
    }
  )
)(EditMoneyPage);
