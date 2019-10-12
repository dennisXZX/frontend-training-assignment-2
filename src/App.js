import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import { auth } from './firebase/firebase.utils'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth  = null

  componentDidMount () {
    // Create an open connection with Firebase to check auth state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })

      console.log(user)
    })
  }

  componentWillUnmount () {
    // Unsubscribe from the Firebase auth state check
    this.unsubscribeFromAuth()
  }

  render () {
    const { currentUser } = this.state

    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
