import React from 'react'
import Logo from '../static/svgs/logo.svg'
import stylesheet from './logo.scss'

export default () => (
  <div className="Logo">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Logo />
  </div>
)
