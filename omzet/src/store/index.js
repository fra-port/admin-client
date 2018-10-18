import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import product from './product/reducers'

const rootReducers = combineReducers({
  product
})

const store = createStore(
  rootReducers,
  applyMiddleware(thunk)
)

export default store