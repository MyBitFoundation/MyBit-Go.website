import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './button.scss'

export const Button = ({ disabled, label, onClick, isLight, isSecondary, isLink, url, newTab, isCentered, className }) => {
  const ButtonClass = classNames({
    'Button': true,
    'Button--is-light': isLight,
    'Button--is-secondary': isSecondary,
    'Button--is-disabled': disabled,
  })

  const LinkClass = classNames({
    'Button__wrapper': true,
    'Button__wrapper--is-centered': isCentered,
    [className]: true,
  })

  let button =       
    (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <button disabled={disabled} onClick={onClick} className={ButtonClass}>
          <span>{label}</span>
        </button>
      </div>
    )

  if(isLink){
    button =
      (
        <a 
          className={className ? className : LinkClass}
          href={disabled ? undefined : url} 
          target={newTab ? "_blank" : undefined} 
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          {button}
        </a>
      )
  }

  return button;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  isLight: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isLink: PropTypes.bool,
  url: PropTypes.string,
  newTab: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
  isLight: false,
  isSecondary: false,
  isLink: true,
  url: "",
  newTab: false,
  className: "",
}
