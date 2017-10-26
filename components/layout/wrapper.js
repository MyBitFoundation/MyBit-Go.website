import React from 'react'
import PropTypes from 'prop-types'

const wrapper = ({ children }) => (
  <div className='Wrapper'>
    { children }
    <style jsx>
      {`
        .Wrapper {
          display: flex;
          width: 100%;
          margin: 0 5em;
        }
      `}
    </style>
  </div>
)

wrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default wrapper;