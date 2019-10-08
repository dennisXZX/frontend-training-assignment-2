import React from 'react'
import './form-input.styles.scss'

const FormInput = props => {
  const {
    handleChange,
    label,
    ...otherFormInputProps
  } = props;

  return (
    <div className='group'>
      <input
        className='form-input'
        onChange={handleChange}
        {...otherFormInputProps}
      />

      {
        label
          ? (
            <label className={`${otherFormInputProps.value.length ? 'shrink' : ''} form-input-label`}>
              {label}
            </label>
          )
          : null
      }
    </div>
  )
}

export default FormInput
