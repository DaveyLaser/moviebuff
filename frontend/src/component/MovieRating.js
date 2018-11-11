import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './MovieRating.css';

class MovieRating extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating,
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    return (
      <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={this.state.rating}
        onStarClick={this.onStarClick.bind(this)}
      />
    );
  }
}

export default MovieRating;