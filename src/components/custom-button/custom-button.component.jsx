import React from 'react'
import './custom-button.styles.scss'

const CustomButton = props => {
  const {
    children,
    isGoogleSignIn,
    inverted,
    ...otherCustomButtonProps
  } = props

  const buttonStyle = `
    custom-button 
    ${inverted ? 'inverted' : ''}
    ${isGoogleSignIn ? 'google-sign-in' : ''}
  `
  return (
    <button
      className={buttonStyle}
      {...otherCustomButtonProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
