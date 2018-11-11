import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import './MovieName.css';

class MovieName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    }
  }
  render() {
    return (
      <div className="MovieName">
        <Input type="text" name="MovieName" defaultValue={this.state.name}></Input>
      </div>
    );
  }
}

export default MovieName;