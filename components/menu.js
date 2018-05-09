import React from 'react'
import PropTypes from 'prop-types'
import HamburgerButton from '../static/svgs/icons/menu-icon.svg'
import {Link} from './link';
import stylesheet from './menu.scss'

export const Menu = ({
  isInHomePage = false,
  isLight = true,
 }) => {
  let menuOptions;

  if(isInHomePage){
    menuOptions = ["Ecosystem", "Token", "About", "Sign Up"];
  }
  else{
    menuOptions = ["Ecosystem", "Token", "About", "Get started"];
  }

  const toRender = menuOptions.map((option) => {
    return(
      <Link key={option} handleClick={() => {}} isInHomePage={isInHomePage} isLight={isLight} name={option}/>
    )
  })

  return (
    <div className={isInHomePage ? "Menu--is-home" : "Menu"}>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {toRender}
      <div className={isInHomePage ? "Menu--is-home__hamburger-button" : "Menu__hamburger-button"}>
        <HamburgerButton />
      </div>
    </div>
  )
}

Menu.defaultProps = {
  isInHomePage: false,
  isLight: true

}

Menu.propTypes = {
  isInHomePage: PropTypes.bool,
  isLight: PropTypes.bool
}
