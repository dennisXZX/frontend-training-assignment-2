import React from 'react'
import { FormInputContainer, FormInputLabel, GroupContainer } from './form-input.styles'

const FormInput = props => {
  const {
    handleChange,
    label,
    ...otherFormInputProps
  } = props;

  return (
    <GroupContainer>
      <FormInputContainer
        onChange={handleChange}
        {...otherFormInputProps}
      />

      {
        label
          ? (
            <FormInputLabel className={props.value.length ? 'shrink' : ''}>
              {label}
            </FormInputLabel>
          )
          : null
      }
    </GroupContainer>
  )
}

export default FormInput
