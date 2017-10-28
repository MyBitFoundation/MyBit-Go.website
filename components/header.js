import React from 'react'
import stylesheet from './header.scss'

import { default as Logo } from './logo'
import { default as Nav } from './nav'
import { default as Links } from './links'


export default () => (
  <header className='Header row'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='col-md-2'>
      <Logo />
    </div>
    <div className='col-md-6'>
      <Nav />
    </div>
    <div className='col-md-4'>
      <Links />
    </div>
  </header>
)