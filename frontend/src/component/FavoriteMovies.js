import React, { Component } from 'react';
import MovieInfoRow from './MovieInfoRow';
import SectionWrapper from './SectionWrapper';
import DeleteButton from './DeleteButton';

class FavoriteMovies extends Component {
  render() {
    return (
      <SectionWrapper title="My favorite movies:" backgroundColor="darkgray">
        <div className="RatedMovieCollection">
          {this.props.movies.map(movie => (
            <MovieInfoRow
              key={movie.name}
              name={movie.name}
              genre={movie.genre}
              rating={movie.rating}
            >
              <DeleteButton
                onDelete={this.props.onDelete}
                movieKey={movie.name}/>
            </MovieInfoRow>
          ))}
        </div>
      </SectionWrapper>
    )
  }
}

export default FavoriteMovies;