const ENDPOINT = 'http://localhost:8080'

const convertMovieArrayToKeyValueMap = moviesArray => (
  Object.assign({}, ...moviesArray.map(item => ({
    [item.name]: {
      genre: item.genre,
      rating: item.rating
    }
  })))
)

export const fetchMovies = () => {
  const url = ENDPOINT + '/api/movies'
  return fetch(url)
    .then(response => response.json())
    .then(movieArray => convertMovieArrayToKeyValueMap(movieArray))
    .catch(error => console.log(error))
}

export const fetchGenres = () => {
  const url = ENDPOINT + '/api/movie-genres'
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

export const fetchUpdate = (movieName, updatedMovieData) => {
  const url = ENDPOINT + `/api/movies/${encodeURIComponent(movieName)}`
  return fetch(url, {
    method: 'put',
    body: JSON.stringify(updatedMovieData),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .catch(e => console.log('An error occurred! ' + e));
}

export const fetchDelete = movieName => {
  const url = ENDPOINT + `/api/movies/${encodeURIComponent(movieName)}`;
  return fetch(url, {
    method: 'delete',
  }).then(movieName)
    .catch(error => console.log(error));
}
