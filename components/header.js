import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../static/svgs/icons/mybit-color.svg'
import {Menu} from './menu'
import stylesheet from './header.scss'

export const Header = ({isInHomePage = false, isDark = false}) => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <header className={isInHomePage ? "Header--is-home" : "Header"}>
        <a href='/'>
          <Logo className={isInHomePage ?"Header--is-home__logo" : "Header__logo"}/>
        </a>
        <Menu isLight={isInHomePage && !isDark} isInHomePage={isInHomePage} />
      </header>
    </div>
  )
};

Header.propTypes = {
  isInHomePage: PropTypes.bool,
  isDark: PropTypes.bool,
}

Header.defaultProps = {
  isInHomePage: false,
  isDark: false,
}
