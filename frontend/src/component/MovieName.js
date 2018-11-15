import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  movieName: {
    display: 'flex',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "200px",
    textAlign: "left",
  },
  input: {
    color: "whitesmoke"
  }
});

class MovieName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      label: "Name",
      value: ""
    }
  }

  onNameChange = (name, label) => event => {
    this.setState({ 
      [name]: event.target.value,
      [label]: ""
    });
    if (this.props.onChange) {
      this.props.onChange(event.target.value)
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="MovieName">
        <TextField
          label={this.state.name ? "" : this.state.label}
          type="text"
          name="value"
          defaultValue={this.state.name}
          className={classes.movieName}
          InputProps={{
            className: classes.input,
            readOnly: this.props.readOnly,
          }}
          onChange={this.onNameChange("name", "label")}
        />
      </div>
    );
  }
}

export default withStyles(styles)(MovieName);