import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import projectsReducer from './projects/projectsReducer'

const rootReducer = combineReducers({
  projects: projectsReducer,
})

const generateStore = () => {
  const middlewareEnhancer = applyMiddleware(thunk)
  const composeEnhancers = composeWithDevTools(middlewareEnhancer)
  const store = createStore(rootReducer, composeEnhancers)

  return store
}

export default generateStore
