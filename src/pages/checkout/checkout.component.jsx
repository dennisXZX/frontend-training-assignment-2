import React from 'react'

import { connect } from 'react-redux'
import { selectCartItems, selectCartItemsTotalPrice } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles'

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>

      {
        cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
      }

      <TotalContainer>
        <span>TOTAL: ${totalPrice}</span>
      </TotalContainer>

      <WarningContainer>
        <div>*Please use the following test credit card for payments*</div>
        <div>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123</div>
      </WarningContainer>

      <StripeButton price={totalPrice} />
    </CheckoutPageContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)
