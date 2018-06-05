import React, { Component } from 'react'
import PropTypes from 'prop-types'
import stylesheet from './wallets.scss'

export const Wallet = ({ title, status, iconClassName }) => (
  <li className={['Wallets__card', `Wallets--${iconClassName}`].join(' ')}>
    <span>{title} - <b dangerouslySetInnerHTML={{ __html: status }} /></span>
  </li>
)

export class Wallets extends Component {
  render() {
    const { Wallets } = this.props
    return (
      <ul className="Wallets">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {Wallets.map(wallet => <Wallet key={wallet.title} {...wallet} />)}
      </ul>
    )
  }
}

Wallet.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  iconClassName: PropTypes.string.isRequired
}

Wallets.propTypes = {
  Wallets: PropTypes.arrayOf(PropTypes.element)
}

Wallets.defaultProps = []
