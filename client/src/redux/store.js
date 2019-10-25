import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './root-reducer'

/* Middlewares configuration */
const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

/* Create a store */
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

// Create a persisted version of store
export const persistedStore = persistStore(store)
