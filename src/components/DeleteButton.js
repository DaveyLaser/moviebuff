import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteMovieDispatch } from '../state/actions';

let DeleteButton = ({deleteMovie}) => {
  return (
    <Button onClick={deleteMovie}>
      <DeleteIcon></DeleteIcon>
    </Button>
  )
}

DeleteButton.propTypes = {
  deleteMovie: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  movie: state.movie,
})

const mapDispatchToProps = (dispatch, props) => ({
  deleteMovie: () => {
    dispatch(deleteMovieDispatch(props.movie))
  }
})

DeleteButton = connect(mapStateToProps, mapDispatchToProps)(DeleteButton)

export default DeleteButton
