import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

const maxStars = 5;

class MovieRating extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating,
      starCount: maxStars,
    }
  }

  onStarClick(nextValue) {
    this.setState({
      rating: nextValue
    });
    if (this.props.onChange) {
      this.props.onChange(nextValue);
    }
  }
 
  render() {
    return (
      <StarRatingComponent
        name="movieRating"
        starCount={this.state.starCount}
        value={this.state.rating}
        onStarClick={this.onStarClick.bind(this)}
      />
    );
  }
}

export default MovieRating;