import React from 'react'
import { navigate, Link } from '@reach/router'
import styled from 'styled-components'
import logo from '../../static/img/logo.svg'
import openmenu from '../../static/img/openmenu.svg'
import closemenu from '../../static/img/closemenu.svg'
import hovermenu from '../../static/img/menuhover.svg'
import Btn from '@components/Button'

interface MenuProps {
  items: Array<{ text: string; linkTo: string }>
}

export default class Menu extends React.Component<MenuProps, MenuState> {
  state: MenuState = {
    activeItem: null,
    open: false,
    hoverOpen: false
  }

  toggleOpen = (): void => {
    this.setState({
      open: !this.state.open
    })
  }

  toggleItem = (index: number): void => {
    this.setState({
      activeItem: this.state.activeItem === index ? null : index
    })
  }

  openItem = (index: number): void => {
    this.setState({
      activeItem: index
    })
  }

  closeItem = (): void => {
    this.setState({
      activeItem: null
    })
  }

  onHover = () => {
    this.setState({
      hoverOpen: true
    })
  }

  onHoverExit = () => {
    this.setState({
      hoverOpen: false
    })
  }

  render() {
    return (
      <>
        <SHeader>
          <SLogo src={logo} alt="myBit" onClick={() => navigate('/')} />
          <SMenuToggle
            src={
              this.state.open
                ? closemenu
                : this.state.hoverOpen
                ? hovermenu
                : openmenu
            }
            alt="toggle menu"
            onClick={this.toggleOpen}
            onMouseEnter={() => this.onHover()}
            onMouseLeave={() => this.onHoverExit()}
          />
          <div className="dn db-l tr">
            <SMenuItemsDesktop>
              <div className="flex flex-row items-top pt3 pr3">
                {this.props.items.map(e => (
                  <SItem>
                    <Link className='no-underline link white' to={e.linkTo}>{e.text}</Link>
                  </SItem>
                ))}
                <div className="" />
                <SButton
                  target="_blank"
                  rel="noreferrer"
                  href="https://app.mybit.io"
                >
                  Launch Go
                </SButton>
              </div>
            </SMenuItemsDesktop>
          </div>
        </SHeader>

        <SMenuItemsMobile open={this.state.open}>
          {this.props.items.map(() => (
            <></>
          ))}
          <Btn linkTo="https://app.mybit.io" text="Launch Go" />
        </SMenuItemsMobile>
      </>
    )
  }
}
interface MenuState {
  activeItem: number
  open: boolean
  hoverOpen: boolean
}

const SItem = styled.div.attrs({ className: 'pr4 no-underline underline-hover white' })`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  text-align: right;
  text-decoration: none;

  color: #ffffff;
`

const SMenuItemsDesktop = styled.div.attrs({
  className: ''
})`
  z-index: 1;
`

const SMenuItemsMobile = styled.div.attrs({
  className: ''
})`
  overflow-x: hidden;
  height: ${(props: { open: boolean }) => (props.open ? '100vh' : '0vh')};
  width: 100%;
  z-index: 1;
  position: relative;
  left: 0;
  top: 0;
  transition: height 0.5s;
`

const SMenuToggle = styled.img.attrs({
  className: 'dn-l pt0'
})``

const SLogo = styled.img.attrs({
  className: 'pa3 w4'
})`
  cursor: pointer;
`

const SHeader = styled.header.attrs({
  className: 'flex flex-row justify-between align-center'
})``

const SButton = styled.a.attrs({
  className: 'link no-underline tc center b whover pv1 ph2'
})`
  background: #1890ff;
  border-radius: 4px;
  font-family: Gilroy;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
`
