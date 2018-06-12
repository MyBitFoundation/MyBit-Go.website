import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './button.scss'

export const Button = ({ disabled, label, onClick, isLight, isSecondary }) => {
  const ButtonClass = classNames({
    'Button': true,
    'Button--is-light': isLight,
    'Button--is-secondary': isSecondary,
  })
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <button disabled={disabled} onClick={onClick} className={ButtonClass}>
        {label}
      </button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  isLight: PropTypes.bool,
  isSecondary: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
  isLight: false,
  isSecondary: false,
}
