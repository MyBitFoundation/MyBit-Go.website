import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './arrow-button.scss'

export const ArrowButton = ({rotate, onClick, disabled, fullOpacity, isBig}) => (
  <button
    onClick={disabled ? () => {} : onClick}
    className={
        classNames({
          "ArrowButton": true,
          "ArrowButton--is-disabled": disabled,
          "ArrowButton--is-full-opacity": fullOpacity,
          "ArrowButton--is-big": isBig,
        })}
    style={{transform: rotate ? "rotate(180deg)" : "rotate(0deg)"}}
  >
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="ArrowButton__arrow"/>
  </button>
)

ArrowButton.defaultProps = {
  rotate: false,
  fullOpacity: false,
  disabled: false,
  isBig: false
}


ArrowButton.propTypes = {
  rotate: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  fullOpacity: PropTypes.bool,
  isBig: PropTypes.bool
}
