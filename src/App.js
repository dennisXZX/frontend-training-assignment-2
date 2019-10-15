import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

class App extends Component {
  unsubscribeFromAuth  = null

  componentDidMount () {
    const { setCurrentUser } = this.props

    // Create an open connection with Firebase to check auth state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      // If the user is logged in, populate the currentUser state
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(null)
      }
    })
  }

  componentWillUnmount () {
    // Unsubscribe from the Firebase auth state check
    this.unsubscribeFromAuth()
  }

  render () {
    const { currentUser } = this.props

    // Redirect user after they sign in
    const redirectSignedInUser = () => (
      currentUser
        ? <Redirect to='/' />
        : <SignInAndSignUpPage />
    )

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={redirectSignedInUser} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
