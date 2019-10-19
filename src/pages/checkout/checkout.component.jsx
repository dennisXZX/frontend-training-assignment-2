import React from 'react'

import './checkout.styles.scss'
import { connect } from 'react-redux'
import { selectCartItems, selectCartItemsTotalPrice } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>

      {
        cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
      }

      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)
