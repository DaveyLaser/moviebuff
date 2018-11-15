import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

class DeleteButton extends React.Component {
  render() {
    return (
      <Button onClick={this.props.onDelete(this.props.movie)}>
        <DeleteIcon></DeleteIcon>
      </Button>
    );
  }
}

export default DeleteButton;