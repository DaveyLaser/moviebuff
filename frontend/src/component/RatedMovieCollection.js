import React, { Component } from 'react';
import RatedMovie from './RatedMovie';
import SectionWrapper from './SectionWrapper'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

class RatedMovieCollection extends Component {
  render() {
    return (
      <SectionWrapper title="My favorite movies:" backgroundColor="darkgray">
        <div className="RatedMovieCollection">
          <RatedMovie name="Purple Rain" genre="Romance" rating={3}>
            <Button>
              <DeleteIcon></DeleteIcon>
            </Button>
          </RatedMovie>
          <RatedMovie name="High Fidelity" genre="Comedy" rating={4}>
            <Button>
              <DeleteIcon></DeleteIcon>
            </Button>
          </RatedMovie>
          <RatedMovie name="The Dark Crystal" genre="Fantasy" rating={5}>
          <Button>
            <DeleteIcon></DeleteIcon>
              </Button>
            </RatedMovie>
          <RatedMovie name="Heat" genre="Suspense" rating={2}>
            <Button>
              <DeleteIcon></DeleteIcon>
            </Button>
          </RatedMovie>
        </div>
      </SectionWrapper>
    )
  }
}

export default RatedMovieCollection;