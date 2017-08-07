import { START_FETCH, STOP_FETCH } from '../action-creator.sync.js'

export default function isFetching (state = false, action) {
  switch (action.type) {
    case START_FETCH:
      return true

    case STOP_FETCH:
      return false

    default:
      return state
  }
}
