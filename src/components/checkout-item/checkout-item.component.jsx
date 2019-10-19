import React from 'react'

import './checkout-item.styles.scss'
import { addItem, clearItems, removeItem } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CheckoutItem = ({
  addItem,
  cartItem,
  clearItems,
  removeItem
}) => {
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

      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
          <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>

      <span className="price">{price}</span>

      <span
        className="remove-button"
        onClick={() => clearItems(cartItem)}
      >
        &#10005;
      </span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  clearItems: item => dispatch(clearItems(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
