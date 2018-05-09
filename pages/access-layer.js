import React from 'react'
import stylesheet from '../components/access-layer.scss'

import { default as Layout } from '../components/layout/layout'

import CoinExchange from '../static/exchanges/coinexchange.png'
import Cryptopia from '../static/exchanges/cryptopia.png'
import Hitbtc from '../static/exchanges/hitbtc.png'
import Key from '../static/svgs/other/Key.svg'

import { Media } from '../components/media'
import { Header } from '../components/header'
import { MyBitFooter } from '../components/footer/footer'
import { mediaContent } from '../components/constants/access-layer'

export default class Index extends React.Component {
  render() {
    const exchanges = (
      <div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.coinexchange.io"
        >
          <img className="AccessLayer__exchanges-img" src={CoinExchange} />
        </a>
        <a rel="noopener noreferrer" target="_blank" href="https://hitbtc.com">
          <img className="AccessLayer__exchanges-img" src={Hitbtc} />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.cryptopia.co.nz"
        >
          <img className="AccessLayer__exchanges-img" src={Cryptopia} />
        </a>
      </div>
    )

    const mediaExchanges = [
      {
        title: 'Mybit is available on these exchanges',
        content: exchanges,
        isCentered: true
      }
    ]

    return (
      <Layout>
        <div style={{ maxWidth: '1650px', margin: '0 auto' }}>
          <div className="AccessLayer">
            <Header isLight={false} />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <div className="grid AccessLayer__media">
              <div className="col-3 AccessLayer__media-image-wrapper">
                <Key alt="Key" className="AccessLayer__media-image" />
              </div>
              <div className="col-9 AccessLayer__media-desc-wrapper">
                <div className="AccessLayer__media-desc">
                  <Media media={mediaContent} />
                  <b className="AccessLayer__text">Staking</b>
                  <p className="AccessLayer__text">
                    More details will be released closer to the Beta Release.
                  </p>
                  <b
                    className="AccessLayer__text"
                    style={{ marginTop: '35px' }}
                  >
                    How to acquire
                  </b>
                  <p className="AccessLayer__text">
                    MyBit Tokens are available on several exchanges. For a list
                    of markets you can view on CoinMarketCap
                  </p>
                </div>
              </div>
            </div>
            <div className="AccessLayer__exchanges">
              <Media media={mediaExchanges} />
            </div>
          </div>
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}
