import React from 'react'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHiddenState } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>

        {/* show sign in or sign out button based on user signed in status */}

        {
          currentUser
            ? (
              <OptionLink as='div' onClick={() => auth.signOut()}>
                SIGN OUT
              </OptionLink>
            )
            : (
              <OptionLink to='/signin'>
                SIGN IN
              </OptionLink>
            )
        }

        <CartIcon />
      </OptionsContainer>

      {/* hide or show the cart drop down menu based on hidden flag in the store */}

      {
        hidden
          ? null
          : <CartDropdown />
      }

    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHiddenState
})

export default connect(mapStateToProps)(Header)
