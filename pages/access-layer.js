import React from 'react'

import stylesheetGridlex from 'styles/gridlex.min.css'
import stylesheet from 'styles/access-layer.scss'

import { default as Layout } from '../components/layout/layout'

import CoinExchange from '../static/exchanges/coinexchange.png'
import Cryptopia from '../static/exchanges/cryptopia.png'
import Hitbtc from '../static/exchanges/hitbtc.png'
import Key from '../static/assets/key.png'

import { MediaCTA } from '../components/media-cta'
import { Media } from '../components/media'
import { Header } from '../components/header'
import { MyBitFooter } from '../components/footer/footer'

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
            <div style={{ padding: '0px 5%' }}>
              <style dangerouslySetInnerHTML={{ __html: stylesheetGridlex }} />
              <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
              <div className="grid-middle AccessLayer__media">
                <div className="col-3 col_sm-12 col_sm-last col_md-first col_lg-first MediaCTA__image-wrapper">
                  <img src={Key} className="AccessLayer__img-key" />
                </div>
                <div className="col-9 col_sm-12 col_sm-first col_md-last col_lg-last">
                  <MediaCTA
                    title="Access Layer"
                    content={
                      '<p>The MyBit Token (MYB) is used to access the MyBit Platform and unlock premium features.</p><p>Tokens spent in the Access Layer are automatically burnt, meaning they are taken out of the supply forever, thus continuously reducing the total supply of MYB.</p><p>Another mechanism to lower the total supply over time is the Monthly Burn Event. When assets on the MyBit platform are funded, 1% of the value (in Ether) goes to the MyBit Foundation to cover operating expenses. If the revenue received by the Foundation is greater than monthly expenses, the excess Ether is used to buyback MyBit on exchanges and the Tokens are burnt.</p>'
                    }
                    isLeft
                  />
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
              <div className="AccessLayer__exchanges">
                <Media media={mediaExchanges} />
              </div>
            </div>
          </div>
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}
