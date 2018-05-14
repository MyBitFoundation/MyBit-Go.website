import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './responsive-wrapper.scss'

export const ResponsiveWrapper = ({ phone, tablet, desktop }) => (
  <React.Fragment>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='ResponsiveWrapper__phone-content'>
      { phone }
    </div>
    <div className='ResponsiveWrapper__tablet-content'>
      { tablet }
    </div>
    <div className='ResponsiveWrapper__desktop-content'>
      { desktop }
    </div>
  </React.Fragment>
)

ResponsiveWrapper.propTypes = {
  phone: PropTypes.node.isRequired,
  tablet: PropTypes.node.isRequired,
  desktop: PropTypes.node.isRequired
}
