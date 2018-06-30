import React from 'react'
import stylesheet from 'styles/products.scss'
import stylesheetGridlex from 'styles/gridlex.min.css'
import walletStylesheet from '../components/wallets.scss'

import { default as Layout } from '../components/layout/layout'

import Invest from '../static/assets/invest.png'
import Mobile from '../static/assets/mobile.png'
import { Highlights, Highlight } from '../components/highlights'
import { mediaHighlights, wallets } from '../components/constants'
import { Wallets } from '../components/wallets'
import { MediaCTA } from '../components/media-cta'
import { SecondaryPageContainer } from '../components/layout/container'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SecondaryPageContainer>
          <div className="Products">
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <style dangerouslySetInnerHTML={{ __html: walletStylesheet }} />
            <style dangerouslySetInnerHTML={{ __html: stylesheetGridlex }} />
            <div
              style={{ padding: '0px 5%', position: 'relative', zIndex: '0' }}
            >
              <div
                style={{
                  marginTop: '75px'
                }}
              >
                <Highlights highlights={mediaHighlights} />
              </div>
              <div className="grid-middle Products__apps">
                <div className="col-6 col_lg-12">
                  <div className="grid-noGutter">
                    <div className="col-2 col_sm-12 col_sm-last col_md-first col_lg-first MediaCTA__image-wrapper">
                      <img src={Mobile} className="Products__img-mobile" />
                    </div>
                    <div className="col-10 col_sm-12 col_sm-first col_md-last col_lg-last">
                      <MediaCTA
                        title="MyBit Mobile DApp"
                        content={
                          '<p>The MyBit Decentralized Application you know and love will be available soon on Android and iOS through CipherBrowser, which runs a lite node for you.</p>'
                        }
                        isLeft
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 col_lg-12">
                  <div className="grid-noGutter">
                    <div className="col-2 col_sm-12 col_sm-last col_md-first col_lg-first MediaCTA__image-wrapper">
                      <img src={Invest} className="Products__img-invest" />
                    </div>
                    <div className="col-10 col_sm-12 col_sm-first col_md-last col_lg-last">
                      <MediaCTA
                        title="IoT Asset Tracker"
                        content={
                          '<p>View all of your MyBit Asset Investments in one place. It’s essentially the blockfolio for IoT assets on the MyBit Platform!</p>'
                        }
                        isLeft
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="grid__container"
                style={{ width: '100%', margin: 'auto', marginTop: '75px' }}
              >
                <Highlight
                  title={'Native Wallets'}
                  isLight
                  isCentered
                  isTransparent
                  isFullWidth
                />
              </div>
              <div>
                <Wallets Wallets={wallets} />
              </div>
            </div>
          </div>
        </SecondaryPageContainer>
      </Layout>
    )
  }
}
