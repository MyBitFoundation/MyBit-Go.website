import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Logo from '../static/svgs/icons/mybit-color.svg'
import {Menu} from './menu'
import stylesheet from './header.scss'

export const Header = ({isInHomePage = false, isLight = false}) => {
  return (
    <React.Fragment>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <header
        className={
          classNames({
            'Header': true,
            'Header--is-home': isInHomePage
          })
        }
      >
        <a href='/'>
          <Logo
            className={
              classNames({
                'Header__logo': true,
                'Header__logo--is-home': isInHomePage
              })
            }
          />
        </a>
        <Menu isLight={isLight} isInHomePage={isInHomePage} />
      </header>
    </React.Fragment>
  )
};

Header.propTypes = {
  isInHomePage: PropTypes.bool,
  isLight: PropTypes.bool,
}

Header.defaultProps = {
  isInHomePage: false,
  isLight: false,
}
