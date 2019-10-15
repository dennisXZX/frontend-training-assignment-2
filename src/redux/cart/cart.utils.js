export const addItemToCart = (currentCartItems, addedCartItem) => {
  const existingCartItem = currentCartItems.find(cartItem => cartItem.id === addedCartItem.id)

  // If the addedCartItem is already in the cart, update the quantity
  if (existingCartItem) {
    const updatedCartItems = currentCartItems.map(
      cartItem =>
        cartItem.id === addedCartItem.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
    )

    return updatedCartItems
  }

  // If the addedCartItem is currently not in the cart, add it to the cart with an initial quantity amount
  return [...currentCartItems, { ...addedCartItem, quantity: 1 }]
}
