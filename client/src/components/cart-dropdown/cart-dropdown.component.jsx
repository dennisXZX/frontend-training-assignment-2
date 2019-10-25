import React from 'react'

import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const goToCheckout = () => {
    history.push('/checkout')
    toggleCartHidden()
  }

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length
            ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        }
      </CartItemsContainer>

      <CartDropdownButton onClick={goToCheckout}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))
