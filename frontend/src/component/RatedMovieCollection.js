import React, { Component } from 'react';
import RatedMovie from './RatedMovie';

class RatedMovieCollection extends Component {
  render() {
    return (
      <div className="RatedMovieCollection">
        <RatedMovie name="Purple Rain" genre="Romance" rating="3"></RatedMovie>
        <RatedMovie name="High Fidelity" genre="Drama" rating="4"></RatedMovie>
        <RatedMovie name="The Dark Crystal" genre="Fantasy" rating="5"></RatedMovie>
      </div>
    )
  }
}

export default RatedMovieCollection;