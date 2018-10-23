import { createStore, combineReducers, applyMiddleware } from 'redux'
import reportsReducer from './reports/reports.reducer'
import reportMonthReducer from './reports/reports.month'
import thunk from 'redux-thunk'
import agentReducer from './fetchAgent/reducer'

import product from './product/reducers'

const rootReducers = combineReducers({
  agentReducer,
  product,
  reportsReducer,
  reportMonthReducer
})

const store = createStore(
  rootReducers,
  applyMiddleware(thunk)
)

export default store