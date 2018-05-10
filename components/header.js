import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../static/svgs/icons/mybit-color.svg'
import {Menu} from './menu'
import stylesheet from './header.scss'

export const Header = ({isInHomePage = false}) => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <header className={isInHomePage ? "Header--is-home" : "Header"}>
        <Logo className={isInHomePage ?"Header--is-home__logo" : "Header__logo"}/>
        <Menu isLight={isInHomePage} isInHomePage={isInHomePage} />
      </header>
    </div>
  )
};

Header.propTypes = {
  isInHomePage: PropTypes.bool,
}

Header.defaultProps = {
  isInHomePage: false
}
