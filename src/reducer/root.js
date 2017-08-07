import { combineReducers } from 'redux'
import isFetching from './isFetching.js'

const rootReducer = combineReducers({
  isFetching
})

export default rootReducer
