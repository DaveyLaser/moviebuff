import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick = function() {
    this.props.onAdd()
  }

  render() {
    return (
      <Button onClick={this.onClick}>
        <AddIcon fontSize="large"></AddIcon>
      </Button>
    )
  }
}

export default AddButton
