import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './header.scss'

import { default as Logo } from './logo'
import { default as Nav } from './nav'
import { default as Links } from './links'


const header = ({ scrollToSection = () => {} }) => (
  <header className='Header row'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='col-md-2 col-sm-2 col-xs-5'>
      <Logo />
    </div>
    <div className='col-md-6 col-sm-10 col-xs-7'>
      <Nav scrollToSection={scrollToSection} />
    </div>
    <div className='col-md-4 col-sm-0 col-xs-0'>
      <Links />
    </div>
  </header>
)

header.defaultProps = {
  scrollToSection: () => {}
}

header.propTypes = {
  scrollToSection: PropTypes.function,
}

export default header;