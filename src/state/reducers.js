import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS
} from './actions'

const defaultState = {movies: undefined, movie: {}}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {...state}
    case GET_MOVIES_SUCCESS:
      return {...state, movies: action.movies}
    case ADD_MOVIE:
      return state;
    case ADD_MOVIE_SUCCESS:
      return {...state, movie: action.movie}
    case DELETE_MOVIE:
      return {...state, movie: action.movie}
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.name !== action.movie.name)
      }
    default:
      return state
  }
}

export default reducer;
