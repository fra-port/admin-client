import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import agentReducer from './fetchAgent/reducer'

const rootReducers = combineReducers({
  agentReducer
})

const store = createStore(
  rootReducers,
  applyMiddleware(thunk)
)

export default store