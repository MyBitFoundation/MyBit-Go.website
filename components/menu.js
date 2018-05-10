import React from 'react'
import PropTypes from 'prop-types'
import HamburgerButton from '../static/svgs/icons/menu-icon.svg'
import { mobileMenu, headerMenu } from './constants/menu'
import {Link} from './link';
import stylesheet from './menu.scss'

export class Menu extends React.Component {

  constructor(props){
    super(props);
    this.state = {popup: false}
  }

  render(){
    const isInHomePage = this.props.isInHomePage ? this.props.isInHomePage : false;
    const isLight = this.props.isLight ? this.props.isLight : false;

    let menuOptions;

    if(isInHomePage){
      menuOptions = headerMenu
    }
    else{
      menuOptions = mobileMenu;
    }

    const toRender = menuOptions.map((option) => {
      return(
        <Link key={option.name} path={option.path} isInHomePage={isInHomePage} isLight={isLight} name={option.name}/>
      )
    })

    const toRenderMobile = mobileMenu.map((option) => {
      return(
        <a key={option.path} href={option.path} className="SidebarMobile__overlay-link">{option.name}</a>
      )
    })

    return (
      <div className={isInHomePage ? "Menu--is-home" : "Menu"}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {toRender}
        <div className={isInHomePage ? "Menu--is-home__hamburger-button" : "Menu__hamburger-button"}>
          <a onClick={() => this.setState({popup: true})}><HamburgerButton /></a>
        </div>
        <div className={this.state.popup ? "SidebarMobile SidebarMobile__showOverlay" : "SidebarMobile"}>
          <a className="SidebarMobile__overlay-btn-close" onClick={() => this.setState({popup: false})}>&times;</a>
          <div className="SidebarMobile__overlay-content">
            {toRenderMobile}
          </div>
        </div>
      </div>
    )
  }
}

Menu.defaultProps = {
  isInHomePage: false,
  isLight: false

}

Menu.propTypes = {
  isInHomePage: PropTypes.bool,
  isLight: PropTypes.bool
}
