import React from 'react'
import './custom-button.styles.scss'

const CustomButton = props => {
  const { children, ...otherCustomButtonProps } = props

  return (
    <button
      className='custom-button'
      {...otherCustomButtonProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
