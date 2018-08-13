import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
// Icons
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import LocalActivity from "@material-ui/icons/LocalActivity";
import LocalDining from "@material-ui/icons/LocalDining";
import LocalMall from "@material-ui/icons/LocalMall";
import MoneyOff from "@material-ui/icons/MoneyOff";
// Colors
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
// Config
import categories from "../config/categories";

const styles = {
  incomeNumber: {
    fontWeight: 500,
    color: green[400]
  },
  costNumber: {
    fontWeight: 500,
    color: red[400]
  },
  income: {
    backgroundColor: green[400]
  },
  entertainment: {
    backgroundColor: amber[400]
  },
  food: {
    backgroundColor: blue[400]
  },
  shopping: {
    backgroundColor: pink[400]
  },
  others: {
    backgroundColor: red[400]
  }
};

const propTypes = {
  classes: PropTypes.shape({
    incomeNumber: PropTypes.string.isRequired,
    costNumber: PropTypes.string.isRequired,
    income: PropTypes.string.isRequired,
    entertainment: PropTypes.string.isRequired,
    food: PropTypes.string.isRequired,
    shopping: PropTypes.string.isRequired,
    others: PropTypes.string.isRequired
  }).isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.oneOf(categories).isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.instanceOf(moment).isRequired
};

function MoneyItem({ classes, id, category, description, amount, createdAt }) {
  return (
    <ListItem button component={Link} to={`/edit/${id}`}>
      <Avatar className={classes[category]}>
        {
          {
            income: <ArrowDownward />,
            entertainment: <LocalActivity />,
            food: <LocalDining />,
            shopping: <LocalMall />,
            others: <MoneyOff />
          }[category]
        }
      </Avatar>
      <ListItemText
        primary={description}
        secondary={moment(createdAt).format("ddd, MMMM Do YYYY")}
      />
      {category === "income" ? (
        <span className={classes.incomeNumber}>+{amount / 100}</span>
      ) : (
        <span className={classes.costNumber}>-{amount / 100}</span>
      )}
    </ListItem>
  );
}

MoneyItem.propTypes = propTypes;

export default withStyles(styles)(MoneyItem);
