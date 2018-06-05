import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import stylesheet from './bit.scss'

export const Bit = ({ small }) => {
  return (
    <div
      className={
        classNames({
          "Bit": true,
          "Bit--is-small": small
        })
      }
    >
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </div>
  )
}

Bit.propTypes = {
  small: PropTypes.bool
}

Bit.defaultProps = {
  small: false
}
