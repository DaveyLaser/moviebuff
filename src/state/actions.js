import {fetchMovies, fetchGenres} from '../api/fetch'

export const INIT = 'INIT'
export const INIT_SUCCESS = 'INIT_SUCCESS'
export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
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

const getMovies = () => ({
  type: GET_MOVIES,
})

const getMoviesSuccess = movies => ({
  type: GET_MOVIES_SUCCESS,
  movies: movies
})

const getGenres = () => ({
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

const deleteMovie = movie => ({
  type: DELETE_MOVIE,
  movie: movie
})

const deleteMovieSuccess = movie => ({
  type: DELETE_MOVIE_SUCCESS,
  movie: movie
})

export const initState = () => {
  return dispatch => {
    dispatch(doInit())
    dispatch(getMovies())
    return fetchMovies()
      .then(movies => {
        dispatch(getMoviesSuccess(movies))
        dispatch(getGenres())
        return fetchGenres()
          .then(genres => {
            dispatch(getGenresSuccess(genres))
            dispatch(initSuccess(true))
          })
      })
      .catch(error => console.log(error))
  }
}

export function deleteMovieDispatch(movie) {
  return dispatch => {
    dispatch(deleteMovie(movie))
    // const url = ENDPOINT + `/api/movies/${encodeURIComponent(movie.name)}`;
    const url = ''
    return fetch(url, {
      method: 'delete',
    }).then(dispatch(deleteMovieSuccess(movie)))
      .catch(error => console.log(error));
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
