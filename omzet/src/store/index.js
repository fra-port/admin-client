import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import agentReducer from './fetchAgent/reducer'

import product from './product/reducers'

const rootReducers = combineReducers({
  agentReducer,
  product
})

const store = createStore(
  rootReducers,
  applyMiddleware(thunk)
)

export default store