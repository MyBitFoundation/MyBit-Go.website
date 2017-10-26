import React from 'react'
import stylesheet from './header.scss'

import { default as Logo } from './logo'
import { default as Nav } from './nav'


export default () => (
  <header className='Header'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Logo />
    <Nav />
  </header>
)