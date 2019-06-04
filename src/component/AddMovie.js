import React from 'react';
import AddButton from './AddButton';
import MovieName from './MovieName';
import MovieGenre from './MovieGenre';
import MovieRating from './MovieRating';

const addMovieStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: 'whitesmoke',
  minWidth: '100vw',
  justifyContent: 'space-evenly',
  backgroundColor: 'gray',
  paddingBottom: '1vh',
};

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const headerStyle = {
  display: 'flex',
  fontSize: '30px',
  color: 'whitesmoke',
};

const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: 'whitesmoke',
};

const defaultState = {
  name: "",
  genre: "",
  rating: 0,
}

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.state = {...defaultState};
  }


  onNameChange = name => {
    this.setState({
      name: name,
    });
  }

  onGenreChange = genre => {
    this.setState({
      genre: genre,
    });
  }

  onRatingChange = rating => {
    this.setState({
      rating: rating,
    });
  }

  onAdd = () => {
    let state = {...this.state};
    this.props.onAdd(state);
    this.setState(defaultState);
  }

  render() {
    return(
      <div className="AddMovie" style={addMovieStyle}>
        <div />
        <div style={centerStyle}>
          <div style={headerStyle}>
            <p>Add a favorite:</p>
          </div>
          <div style={rowStyle}>
            <MovieName
              name={this.state.name}
              onChange={this.onNameChange}
            />
            <MovieGenre
              genre={this.state.genre}
              onChange={this.onGenreChange}
            />
            <MovieRating
              rating={this.state.rating}
              onChange={this.onRatingChange}
            />
            <AddButton onAdd={this.onAdd}/>
          </div>
        </div>
        <div />
      </div>
    )
  }
}

export default AddMovie;