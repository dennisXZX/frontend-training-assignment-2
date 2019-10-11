import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      email: '',
      password: ''
    })
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
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={email}
            required
            handleChange={this.handleChange}
            label='Email'
          />

          <FormInput
            name='password'
            value={password}
            required
            handleChange={this.handleChange}
            label='Password'
          />

          <CustomButton type='submit'>
            Sign in
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
