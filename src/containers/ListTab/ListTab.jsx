import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
// Material UI
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
// Icons
import AddIcon from 'material-ui-icons/Add';
// Selectors
import { getTotal } from '../../reducers/money';
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
};

class ListTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormDialogOpen: false,
    };
    this.handleFormDialogOpen = this.handleFormDialogOpen.bind(this);
    this.handleFormDialogClose = this.handleFormDialogClose.bind(this);
  }

  handleFormDialogOpen() {
    this.setState({ isFormDialogOpen: true });
  }

  handleFormDialogClose() {
    this.setState({ isFormDialogOpen: false });
  }

  render() {
    const { classes, money, total } = this.props;
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

const mapStateToProps = state => ({
  money: state.money,
  total: getTotal(state.money),
});


export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(ListTab);
