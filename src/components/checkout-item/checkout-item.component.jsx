import React from 'react'

import './checkout-item.styles.scss'
import { clearItems } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CheckoutItem = ({ cartItem, clearItems }) => {
  const {
    imageUrl,
    name,
    price,
    quantity
  } = cartItem

  return (
    <div className='checkout-item'>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => clearItems(cartItem)}
      >&#10005;
      </span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItems: item => dispatch(clearItems(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
