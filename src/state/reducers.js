import {
  INIT,
  INIT_SUCCESS,
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_GENRES,
  GET_GENRES_SUCCESS,
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS,
  UPDATE_MOVIE,
  UPDATE_MOVIE_SUCCESS
} from './actions'

const defaultState = {
  movies: {},
  genres: [],
  movieToAdd: {
    name: '',
    genre: '',
    rating: 0
  },
  isInit: false
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INIT:
      return state;
    case INIT_SUCCESS:
      return {
        ...state,
        isInit: action.isInit
      }
    case GET_MOVIES:
      return state
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies
      }
    case GET_GENRES:
      return state;
    case GET_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.genres
      }
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
    case UPDATE_MOVIE:
      return state;
    case UPDATE_MOVIE_SUCCESS:
      if (state.movies[action.movieData.name] === undefined) {
        // name was updated, replaced existing entry
        let movies = {...state.movies}
        delete Object.assign(
          movies,
          {[action.movieData.name]: state.movies[action.movieName]}
        )[action.movieName]
        return {
          ...state,
          movies: movies
        }
      } else {
        // name wasn't updated, no need to replace old entry
        return {
          ...state,
          movies: {
            ...state.movies,
            [action.movieName]: {
              genre: action.movieData.genre,
              rating: action.movieData.rating
            }
          }
        }
      }
    default:
      return state
  }
}

export default reducer;
