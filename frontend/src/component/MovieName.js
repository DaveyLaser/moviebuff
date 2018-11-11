import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

const inputStyle = {
  color: 'whitesmoke',
};

const movieNameStyle = {
  display: 'flex',
};

class MovieName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    }
  }
  render() {
    return (
      <div className="MovieName" style={movieNameStyle}>
        <Input
          type="text"
          name="MovieName"
          defaultValue={this.state.name}
          style={inputStyle}
        />
      </div>
    );
  }
}

export default MovieName;