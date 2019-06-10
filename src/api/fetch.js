const ENDPOINT = 'http://localhost:8080'
const HEADERS = {
  'Content-Type': 'application/json'
}

const convertMovieArrayToKeyValueMap = moviesArray => (
  Object.assign({}, ...moviesArray.map(item => ({
    [item.name]: {
      genre: item.genre,
      rating: item.rating
    }
  })))
)

export const fetchGetMovies = () => {
  const url = ENDPOINT + '/api/movies'
  return fetch(url)
    .then(response => response.json())
    .then(movieArray => convertMovieArrayToKeyValueMap(movieArray))
    .catch(error => console.log(error))
}

export const fetchGetGenres = () => {
  const url = ENDPOINT + '/api/movie-genres'
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

export const fetchUpdateMovie = (movieName, updatedMovieData) => {
  const url = ENDPOINT + `/api/movies/${encodeURIComponent(movieName)}`
  return fetch(url, {
    method: 'put',
    body: JSON.stringify(updatedMovieData),
    headers: HEADERS
  }).then(response => response.json())
    .catch(e => console.log('An error occurred! ' + e));
}

export const fetchDeleteMovie = movieName => {
  const url = ENDPOINT + `/api/movies/${encodeURIComponent(movieName)}`;
  return fetch(url, {
    method: 'delete',
    headers: HEADERS
  }).then(movieName)
    .catch(error => console.log(error));
}

export const fetchCreateMovie = movie => {
    const url = ENDPOINT + '/api/movies';
    return fetch(url, {
      method: 'post',
      headers: HEADERS,
      body: JSON.stringify(movie),
    }).then(response => response.json())
      .catch(error => console.log(error))
}
