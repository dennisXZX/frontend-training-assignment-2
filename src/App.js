import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth  = null

  componentDidMount () {
    // Create an open connection with Firebase to check auth state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      // If the user is logged in, populate the currentUser state
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState({
          currentUser: null
        })
      }
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
