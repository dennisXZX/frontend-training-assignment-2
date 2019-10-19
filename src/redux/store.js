import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer'

/* Middlewares configuration */
import logger from 'redux-logger'
const middlewares = [logger]

/* Create a store */
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

// Create a persisted version of store
export const persistedStore = persistStore(store)
