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
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherCustomButtonProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
