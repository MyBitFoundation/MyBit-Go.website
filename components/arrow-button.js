import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './arrow-button.scss'

export const ArrowButton = ({rotate = false, onClick, disabled}) => (
  <div
    onClick={onClick}
    className={
        classNames({
          "ArrowButton": true,
          "ArrowButton--is-disabled": disabled
        })}
    style={{transform: rotate ? "rotate(180deg)" : ""}}
  >
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="ArrowButton__arrow"/>
  </div>
)

ArrowButton.defaultProps = {
  rotate: false,
}


ArrowButton.propTypes = {
  rotate: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}
