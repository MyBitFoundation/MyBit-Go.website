import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './header.scss'

import { default as Logo } from './logo'
import { default as Nav } from './nav'
import { default as Links } from './links'


const header = ({ scrollToSection = () => {} }) => (
  <header className='Header row'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='col-md-2'>
      <Logo />
    </div>
    <div className='col-md-6'>
      <Nav scrollToSection={scrollToSection} />
    </div>
    <div className='col-md-4'>
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