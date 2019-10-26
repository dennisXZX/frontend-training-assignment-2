import React from 'react'
import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles'

const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <span>{name}</span>

        <span>{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

export default React.memo(CartItem)
