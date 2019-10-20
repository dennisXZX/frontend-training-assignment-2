import React from 'react'

import './checkout.styles.scss'
import { connect } from 'react-redux'
import { selectCartItems, selectCartItemsTotalPrice } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'

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

      <div className='test-warning'>
        <div>*Please use the following test credit card for payments*</div>
        <div>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123</div>
      </div>

      <StripeButton
        price={totalPrice}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)
