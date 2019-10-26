import React, { Component, lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import Header from './components/header/header.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component'

// Set up lazy loading
const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))

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
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/signin' render={redirectSignedInUser} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
