import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// Icons
import AddIcon from "@material-ui/icons/Add";
// Configs
import moneyRecordProps from "../config/moneyRecordProps";
// Components
import MoneyList from "./MoneyList";
import Total from "./Total";
import NoMoney from "./NoMoney";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: `calc(100% - ${theme.spacing.unit * 6}px)`, // totalContainer height
    position: "relative"
  },
  totalContainer: {
    height: theme.spacing.unit * 6
  },
  button: {
    position: "absolute",
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 4,
    color: "white"
  }
});

const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    totalContainer: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired
  }).isRequired,
  money: PropTypes.arrayOf(PropTypes.shape(moneyRecordProps).isRequired)
    .isRequired,
  total: PropTypes.number.isRequired
};

function ListTab(props) {
  const { classes, money, total } = props;
  return (
    <div className={classes.root}>
      {money.length === 0 ? <NoMoney /> : <MoneyList money={money} />}
      <div className={classes.totalContainer}>
        <Total total={total} />
      </div>
      <Button
        variant="fab"
        color="secondary"
        aria-label="add"
        className={classes.button}
        component={Link}
        to="/create"
      >
        <AddIcon />
      </Button>
    </div>
  );
}

ListTab.propTypes = propTypes;

export default withStyles(styles)(ListTab);
