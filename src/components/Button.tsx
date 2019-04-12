import styled from 'styled-components'
import React from 'react'
import { Link } from '@reach/router'

export const Button = styled.div.attrs({
  className: 'bhover no-underline link tc tracked center b'
})`
  font-family: Gilroy;
  line-height: 48px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: #1890ff;
  border-radius: 4px;
  max-width: 200px;
  color: white;
  @media screen and (min-width: 30em) {
    line-height: 48px;
  }
`

const WhiteButton = styled.div.attrs({
  className: 'bhover no-underline tc tracked mh6 pb3 b mw5 center'
})`
  font-family: Gilroy;
  line-height: 48px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: white;
  border-radius: 4px;
  max-width: 200px;
  color: #1890ff;
  height: 48px;
`

export default class Btn extends React.Component<{
  linkTo: string
  text: string
  isWhite?: boolean
  target?: string
}> {
  private isExternal = false

  constructor(props: {
    linkTo: string
    text: string
    isWhite?: boolean
    target?: string
  }) {
    super(props)
    if (props.linkTo.substr(0, 4) === 'http') {
      this.isExternal = true
    }
  }

  render() {
    return this.isExternal ? (
      <a
        target={`${this.props.target ? this.props.target : '_blank'}`}
        rel="noreferrer"
        className="link no-underline"
        href={this.props.linkTo}
      >
        {this.props.isWhite ? (
          <WhiteButton>{this.props.text}</WhiteButton>
        ) : (
          <Button>{this.props.text}</Button>
        )}
      </a>
    ) : (
      <Link className="no-underline" to={this.props.linkTo}>
        {this.props.isWhite ? (
          <WhiteButton>{this.props.text}</WhiteButton>
        ) : (
          <Button>{this.props.text}</Button>
        )}
      </Link>
    )
  }
}
