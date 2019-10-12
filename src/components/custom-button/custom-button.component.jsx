import React from 'react'
import './custom-button.styles.scss'

const CustomButton = props => {
  const {
    children,
    isGoogleSignIn,
    ...otherCustomButtonProps
  } = props

  return (
    <button
      className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
      {...otherCustomButtonProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
