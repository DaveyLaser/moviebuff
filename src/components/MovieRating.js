import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'

const maxStars = 5

class MovieRating extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      rating: this.props.rating,
      starCount: maxStars,
    }
  }

  onStarClick = newRating => {
    this.setState({
      rating: newRating
    })
    if (this.props.onChange) {
      this.props.onChange(newRating)
    }
  }
 
  render() {
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="yellow"
        starDimension="20px"
        starSpacing="2px"
        starHoverColor="#aa0000"
        changeRating={this.onStarClick}
        numberOfStars={this.state.starCount}
        name='rating'
      />
    )
  }
}

export default MovieRating
