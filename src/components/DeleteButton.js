import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

class DeleteButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieName: this.props.movieName,
      deleteMovie: this.props.deleteMovie
    }
  }

  onClick = () => {
    this.state.deleteMovie(this.state.movieName)
  }
  render() {
    return (
      <Button onClick={this.onClick}>
        <DeleteIcon></DeleteIcon>
      </Button>
    )
  }
}

// let DeleteButton = ({deleteMovie}) => (
//   <Button onClick={deleteMovie}>
//     <DeleteIcon></DeleteIcon>
//   </Button>
// )

DeleteButton.propTypes = {
  movieName: PropTypes.string.isRequired,
  deleteMovie: PropTypes.func.isRequired
}

// const mapStateToProps = state => ({
//   movie: state.movie,
// })

// const mapDispatchToProps = (dispatch, props) => ({
//   deleteMovie: () => {
//     dispatch(deleteMovieDispatch(props.movie))
//   }
// })

// DeleteButton = connect(mapStateToProps, mapDispatchToProps)(DeleteButton)

export default DeleteButton
