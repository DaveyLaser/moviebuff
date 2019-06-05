import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS
} from './actions'

const defaultState = {init: true, loading: true, movies: []}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {...state, init: false, loading: true}
    case GET_MOVIES_SUCCESS:
      return {...state, movies: action.movies, loading: false}
    case ADD_MOVIE:
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
