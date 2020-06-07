import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { ButtonsBarContainer, SignInContainer, SignInTitle } from './sign-in.styles'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)

      this.setState({
        email: '',
        password: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({
      [name]: value
    })
  }

  render () {
    const { email, password } = this.state

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={email}
            label='email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleChange}
            label='password'
            required
          />

          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  }
}

export default SignIn