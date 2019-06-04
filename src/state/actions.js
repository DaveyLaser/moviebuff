export const GET_MOVIES = 'REQUEST_ALL_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

function getMovies() {
  return {
    type: GET_MOVIES
  }
}

function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    movies: json.data.children.map(child => child.data),
    receivedAt: Data.now()
  }
}

function fetchMovies() {
  return dispatch => {
    dispatch(getMovies())
    return fetch(ENDPOINT + '/api/movies')
      .then(response => response.json())
      .then(movies => dispatch(receiveMovies(movies)));
  }
}
