import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

class DeleteButton extends React.Component {
  render() {
    return (
      // <div style={paddedStyle}>
        <Button onClick={this.props.onDelete(this.props.movieKey)}>
          <DeleteIcon></DeleteIcon>
        </Button>
      // </div>
    );
  }
}

export default DeleteButton;