import {
  GET_MOVIES,
  RECEIVE_MOVIES,
} from './actions'

function posts(
  state = {
    isFetching: false,
    movies: []
  },
  action
) {
  switch (action.type) {
    case GET_MOVIES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        isFetching: false,
        movies: action.movies,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}