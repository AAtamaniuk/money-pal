import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
// Icons
import AddIcon from 'material-ui-icons/Add';
// Configs
import categories from '../../config/categories';
// Components
import MoneyList from '../../components/MoneyList/MoneyList';
import Total from '../../components/Total/Total';
import FormDialog from '../../components/FormDialog/FormDialog';


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: `calc(100% - ${theme.spacing.unit * 6}px)`, // totalContainer height
    position: 'relative',
  },
  totalContainer: {
    height: theme.spacing.unit * 6,
  },
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 4,
    color: 'white',
  },
});

const propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  money: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.oneOf(categories).isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  total: PropTypes.number.isRequired,
  addMoneyItem: PropTypes.func.isRequired,
};

class ListTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormDialogOpen: false,
    };
    this.handleFormDialogOpen = this.handleFormDialogOpen.bind(this);
    this.handleFormDialogClose = this.handleFormDialogClose.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleFormDialogOpen() {
    this.setState({ isFormDialogOpen: true });
  }

  handleFormDialogClose() {
    this.setState({ isFormDialogOpen: false });
  }

  handleAddItem(name, type, value) {
    this.props.addMoneyItem(name, type, value);
  }

  render() {
    const {
      classes, money, total,
    } = this.props;
    const { isFormDialogOpen } = this.state;
    return (
      <div className={classes.root}>
        <MoneyList money={money} />
        <div className={classes.totalContainer}>
          <Total total={total} />
        </div>
        <FormDialog
          isOpen={isFormDialogOpen}
          onDialogClose={this.handleFormDialogClose}
          onAddItem={this.handleAddItem}
        />
        <Button
          variant="fab"
          color="secondary"
          aria-label="add"
          className={classes.button}
          onClick={this.handleFormDialogOpen}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

ListTab.propTypes = propTypes;

export default withStyles(styles)(ListTab);
