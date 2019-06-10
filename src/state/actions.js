import {
  fetchMovies,
  fetchGenres,
  fetchUpdate,
  fetchDelete
} from '../api/fetch'

export const INIT = 'INIT'
export const INIT_SUCCESS = 'INIT_SUCCESS'
export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
export const UPDATE_MOVIE = 'UPDATE_MOVIE'
export const UPDATE_MOVIE_SUCCESS = 'UPDATE_MOVIE_SUCCESS'
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

const addMovie = movie => ({
  type: ADD_MOVIE,
  movie: movie
})

const addMovieSuccess = () => ({
  type: ADD_MOVIE_SUCCESS
})

const doDelete = movie => ({
  type: DELETE_MOVIE,
})

const deleteMovieSuccess = movie => ({
  type: DELETE_MOVIE_SUCCESS,
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
    return fetchMovies()
      .then(movies => {
        dispatch(getMoviesSuccess(movies))
        dispatch(doGetGenres())
        return fetchGenres()
          .then(genres => {
            dispatch(getGenresSuccess(genres))
            dispatch(initSuccess(true))
          })
      })
      .catch(error => console.log(error))
  }
}

export function deleteMovie(movie) {
  return dispatch => {
    dispatch(doDelete())
    return fetchDelete(movie)
      .then(dispatch(deleteMovieSuccess(movie)))
  }
}

export function addMovieDispatch(movie) {
  return dispatch => {
    dispatch(addMovie(movie))
    // const url = ENDPOINT + '/api/movies';
    const url = ''
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(movie),
    }).then(response => response.json())
      .then(json => {
        dispatch(addMovieSuccess(json))
        return json
      })
      .then(json => console.log("Added: " + JSON.stringify(json)))
      .catch(error => console.log(error));
  }
}

export const updateMovie = (movieName, updatedMovie) => {
  return dispatch => {
    dispatch(doUpdate())
    return fetchUpdate(movieName, updatedMovie)
      .then(json => dispatch(updateSuccess(movieName, json)))
  }
}
