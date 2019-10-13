import { createStore, applyMiddleware } from 'redux'

import rootReducer from './root-reducer'

/* Middlewares configuration */
import logger from 'redux-logger'
const middlewares = [logger]

/* Create a store */
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
