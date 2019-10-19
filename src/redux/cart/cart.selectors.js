import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartHiddenState = createSelector(
  [selectCart],
  cart => cart.isHidden
)

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((totalCartItemsCount, cartItem) => {
    return totalCartItemsCount + cartItem.quantity
  }, 0)
)

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((totalPrice, cartItem) => {
    const cartItemsPrice = cartItem.price * cartItem.quantity

    return totalPrice + cartItemsPrice
  }, 0)
)
