import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHiddenState } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>

      <div className="options">
        <Link className='option' to='/shop'>
          SHOP
        </Link>

        <Link className='option' to='/contact'>
          CONTACT
        </Link>

        {/* show sign in or sign out button based on user signed in status */}

        {
          currentUser
            ? (
              <div
                className='option'
                onClick={() => auth.signOut()}>
                SIGN OUT
              </div>
            )
            : (
              <Link
                className='option'
                to='/signin'>
                SIGN IN
              </Link>
            )
        }

        <CartIcon />
      </div>

      {/* hide or show the cart drop down menu based on hidden flag in the store */}

      {
        hidden
          ? null
          : <CartDropdown />
      }

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHiddenState
})

export default connect(mapStateToProps)(Header)
