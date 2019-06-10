import {
  fetchGetMovies,
  fetchGetGenres,
  fetchUpdateMovie,
  fetchDeleteMovie,
  fetchCreateMovie,
} from '../api/fetch'

export const INIT = 'INIT'
export const INIT_SUCCESS = 'INIT_SUCCESS'
export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
export const UPDATE_MOVIE = 'UPDATE_MOVIE'
export const UPDATE_MOVIE_SUCCESS = 'UPDATE_MOVIE_SUCCESS'
export const UPDATE_ADD_MOVIE = 'UPDATE_ADD_MOVIE'
export const GET_GENRES = 'GET_GENRES'
export const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS'
export const ADD_MOVIE = 'ADD_MOVIE'
export const ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS'
export const DELETE_MOVIE = 'DELETE_MOVIE'
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS'

const doInit = () => ({
  type: INIT
})

const initSuccess = (isInit) => ({
  type: INIT_SUCCESS,
  isInit: isInit
})

const doGetMovies = () => ({
  type: GET_MOVIES,
})

const getMoviesSuccess = movies => ({
  type: GET_MOVIES_SUCCESS,
  movies: movies
})

const doGetGenres = () => ({
  type: GET_GENRES,
})

const getGenresSuccess = genres => ({
  type: GET_GENRES_SUCCESS,
  genres: genres
})

const doCreateMovie = () => ({
  type: ADD_MOVIE,
})

const createMovieSuccess = (movie) => ({
  type: ADD_MOVIE_SUCCESS,
  movie: movie
})

const doDeleteMovie = movie => ({
  type: DELETE_MOVIE,
})

const deleteMovieSuccess = movie => ({
  type: DELETE_MOVIE_SUCCESS,
  movie: movie
})

const doUpdateCreateMovie = (movie) => ({
  type: UPDATE_ADD_MOVIE,
  movie: movie
})

const doUpdate = () => ({
  type: UPDATE_MOVIE
})

const updateSuccess = (movieName, movieData) => ({
  type: UPDATE_MOVIE_SUCCESS,
  movieName: movieName,
  movieData: movieData
})

export const initState = () => {
  return dispatch => {
    dispatch(doInit())
    dispatch(doGetMovies())
    return fetchGetMovies()
      .then(movies => {
        dispatch(getMoviesSuccess(movies))
        dispatch(doGetGenres())
        return fetchGetGenres()
          .then(genres => {
            dispatch(getGenresSuccess(genres))
            dispatch(initSuccess(true))
          })
      })
      .catch(error => console.log(error))
  }
}

export const deleteMovie = (movie) => {
  return dispatch => {
    dispatch(doDeleteMovie())
    return fetchDeleteMovie(movie)
      .then(dispatch(deleteMovieSuccess(movie)))
  }
}

export const createMovie = (movie) => {
  return dispatch => {
    dispatch(doCreateMovie(movie))
    return fetchCreateMovie(movie)
      .then(json => dispatch(createMovieSuccess(json)))
  }
}

export const updateCreateMovie = (movie) => {
  return dispatch => {
    dispatch(doUpdateCreateMovie(movie))
  }
}

export const updateMovie = (movieName, updatedMovie) => {
  return dispatch => {
    dispatch(doUpdate())
    return fetchUpdateMovie(movieName, updatedMovie)
      .then(json => dispatch(updateSuccess(movieName, json)))
  }
}
