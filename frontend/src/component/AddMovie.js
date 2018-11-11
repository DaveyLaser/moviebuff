import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SectionWrapper from './SectionWrapper';
import RatedMovie from './RatedMovie'

const addMovieStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: 'whitesmoke',
}

class AddMovie extends React.Component {
  render() {
    return(
      <SectionWrapper title="New movie:" backgroundColor="gray">
        <div className="AddMovie" style={addMovieStyle}>
          <RatedMovie>
            <Button>
              <AddIcon></AddIcon>
            </Button>
          </RatedMovie>
        </div>
      </SectionWrapper>
    )
  }
}

export default AddMovie;