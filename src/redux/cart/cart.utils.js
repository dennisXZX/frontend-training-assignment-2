export const addItemToCart = (currentCartItems, newCartItem) => {
  const existingCartItem = currentCartItems.find(cartItem => cartItem.id === newCartItem.id)

  // If the newCartItem is already in the cart, update the quantity
  if (existingCartItem) {
    const updatedCartItems = currentCartItems.map(
      cartItem =>
        cartItem.id === newCartItem.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
    )

    return updatedCartItems
  }

  // If the newCartItem is currently not in the cart, add it to the cart with an initial quantity amount
  return [...currentCartItems, { ...newCartItem, quantity: 1 }]
}

export const clearItemsFromCart = (currentCartItems, itemToBeCleared) => {
  const filteredCartItems = currentCartItems.filter(cartItem => {
    return cartItem.id !== itemToBeCleared.id
  })

  return filteredCartItems
}
