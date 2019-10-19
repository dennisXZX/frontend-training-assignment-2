import CartActionTypes from './cart.types'
import { addItemToCart, clearItemsFromCart } from './cart.utils'

const INITIAL_STATE = {
  isHidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearItemsFromCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer
