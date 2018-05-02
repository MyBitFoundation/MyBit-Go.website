import React from 'react'
import Logo from '../svgs/icons/mybit.svg'
import {Menu} from './menu'
import stylesheet from './header.scss'

export const Header = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <header className="Header">
        <Logo className="Header__logo"/>
        <Menu />
      </header>
    </div>
  )
};

