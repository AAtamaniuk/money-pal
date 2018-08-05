import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// Icons
import AddIcon from "@material-ui/icons/Add";
// Configs
import categories from "../config/categories";
// Components
import MoneyList from "./MoneyList";
import Total from "./Total";

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
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  money: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.oneOf(categories).isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  total: PropTypes.number.isRequired
};

function ListTab(props) {
  const { classes, money, total } = props;
  return (
    <div className={classes.root}>
      <MoneyList money={money} />
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
