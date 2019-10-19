import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'

import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import userReducer from './user/user.reducer'

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  user: userReducer
})

// Create a persisted version of root reducer
const persistedRootReducer = persistReducer(persistConfig, rootReducer)

export default persistedRootReducer
