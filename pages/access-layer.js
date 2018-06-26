import React from 'react'

import stylesheetGridlex from 'styles/gridlex.min.css'
import stylesheet from 'styles/access-layer.scss'

import { default as Layout } from '../components/layout/layout'

import { exchanges } from '../components/constants'
import Key from '../static/assets/key.png'

import { MediaCTA } from '../components/media-cta'
import { Media } from '../components/media'
import { SecondaryPageContainer } from '../components/layout/container'

export default class Index extends React.Component {
  render() {
    const toRender = (
      <div>
        {exchanges.map(exchange => (
          <a
            key={exchange.imageSrc}
            rel="noopener noreferrer"
            target="_blank"
            href={exchange.url}
          >
            <img
              className="AccessLayer__exchanges-img"
              src={exchange.imageSrc}
            />
          </a>
        ))}
      </div>
    )

    const mediaExchanges = [
      {
        title: 'Mybit is available on these exchanges',
        content: toRender,
        isCentered: true
      }
    ]

    return (
      <Layout>
        <SecondaryPageContainer>
          <div className="AccessLayer">
            <div style={{ padding: '0px 5%' }}>
              <style dangerouslySetInnerHTML={{ __html: stylesheetGridlex }} />
              <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
              <div className="grid-middle AccessLayer__media">
                <div className="col-3 col_sm-12 col_sm-last col_md-first col_lg-first MediaCTA__image-wrapper">
                  <img src={Key} className="AccessLayer__img-key" />
                </div>
                <div className="col-9 col_sm-12 col_sm-first col_md-last col_lg-last">
                  <MediaCTA
                    title="MyBit Token (MYB)"
                    content={
                      '<h2>Access Layer</h2><p>The MyBit Token (MYB) is a utility token used to access the MyBit Platform and unlock premium features.</p><p>Tokens spent in the Access Layer are automatically burnt, meaning they are taken out of the supply forever, thus continuously reducing the total supply of MYB.</p><p>There are three access levels:<br/> <b>Level one</b> costs 25$ per annum and unlocks investing. <br/><b>Level two</b> costs 75$ per annum and includes investing and staking. <br/><b>Level three</b> costs 100$ per annum and provides access to investing, staking and MYDAX.</p><br/><h2>Escrow and Locking</h2><p>Asset Managers, whose role is to maintain assets which require human oversight, must lock a percentage of MyBit Tokens in an escrow contract as collateral.  This creates an incentive to perform their duties up to expectations to ensure investors are protected to the highest extent possible. Escrowed tokens remain locked until the asset begins generating revenue and are slowly made available for withdrawal in increments after 25% of the asset ROI is reached.</p><br/><h2>Staking</h2><p>More details will be released closer to the Beta Release.</p></br><h2>How to acquire</h2><p>MyBit Tokens are available on several exchanges. For a list of markets you can view CoinMarketCap.</p>'
                    }
                    isLeft
                  />
                </div>
              </div>
              <div className="AccessLayer__exchanges">
                <Media media={mediaExchanges} />
              </div>
            </div>
          </div>
        </SecondaryPageContainer>
      </Layout>
    )
  }
}
