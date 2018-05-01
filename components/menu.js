import React from 'react'
import HamburgerButton from '../svgs/icons/hamburger.svg'
import {Link} from './link';
import stylesheet from './menu.scss'

export const Menu = () => {
  const menuOptions = ["Ecosystem", "Token", "About", "Sign Up"];

  const toRender = menuOptions.map((option) => {
    return(
      <Link key={option} name={option} handleClick={() => {}}/>
    )
  })

  return (
    <div className="Menu">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {toRender}
      <div className="Menu__hamburger-button">
        <HamburgerButton />
      </div>
    </div>
  )
}
