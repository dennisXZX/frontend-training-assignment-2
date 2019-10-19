import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const goToCheckout = () => {
    history.push('/checkout')
    toggleCartHidden()
  }

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length
            ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            : <span className="empty-message">Your cart is empty</span>
        }
      </div>

      <CustomButton onClick={goToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))
