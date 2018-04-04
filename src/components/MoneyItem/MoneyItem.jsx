import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';

const propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

function MoneyItem({
  type, name, date, value,
}) {
  return (
    <ListItem>
      <Avatar>
        <ImageIcon />
      </Avatar>
      <ListItemText primary={name} secondary={date} />
      {value}
    </ListItem>
  );
}

MoneyItem.propTypes = propTypes;

export default MoneyItem;
