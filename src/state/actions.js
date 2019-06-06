import ENDPOINT from '../common/endpoints'

export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
export const ADD_MOVIE = 'ADD_MOVIE'
export const ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS'
export const DELETE_MOVIE = 'DELETE_MOVIE'
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS'

const httpHeader = {
  'Content-Type': 'application/json'
}

const getMovies = () => ({
  type: GET_MOVIES,
})

const getMoviesSuccess = json => ({
  type: GET_MOVIES_SUCCESS,
  movies: json
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

export function getMoviesDispatch() {
  return dispatch => {
    dispatch(getMovies())
    const url = ENDPOINT + '/api/movies';
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(getMoviesSuccess(json)))
      .catch(error => console.log('An error occurred!', error))
  }
}

export function deleteMovieDispatch(movie) {
  return dispatch => {
    dispatch(deleteMovie(movie))
    const url = ENDPOINT + '/api/movies/' + movie.name;
    return fetch(url, {
      method: 'delete',
      body: movie.name,
      headers: httpHeader
    }).then(dispatch(deleteMovieSuccess(movie)))
      .catch(e => console.log(e));
  }
}

export function addMovieDispatch(movie) {
  return dispatch => {
    dispatch(addMovie(movie))
    const url = ENDPOINT + '/api/movies';
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(movie),
      headers: httpHeader
    }).then(response => response.json())
      .then(json => {
        dispatch(addMovieSuccess(json))
        return json
      })
      .then(json => console.log("Added: " + JSON.stringify(json)))
      .catch(e => console.log(e));
  }
}