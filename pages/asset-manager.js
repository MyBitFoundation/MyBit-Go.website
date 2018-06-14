import React from 'react'
import stylesheetGridlex from 'styles/gridlex.min.css'
import stylesheet from 'styles/asset-manager.scss'
import { default as Layout } from '../components/layout/layout'
import { MediaCTA } from '../components/media-cta'
import { Header } from '../components/header'
import { MyBitFooter } from '../components/footer/footer'
import Toolbox from '../static/assets/toolbox.png'
import { Button } from '../components/button'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{ maxWidth: '1650px', margin: '0 auto' }}>
          <div className="AssetManager">
            <Header isLight={false} />
            <style dangerouslySetInnerHTML={{ __html: stylesheetGridlex }} />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <div style={{ padding: '0px 5%' }}>
              <div className="grid-middle AssetManager__media">
                <div className="col-3 col_sm-12 col_sm-last col_md-first col_lg-first MediaCTA__image-wrapper">
                  <img src={Toolbox} className="AssetManager__img-toolbox" />
                </div>
                <div className="col-9 col_sm-12 col_sm-first col_md-last col_lg-last">
                  <MediaCTA
                    title="The Asset manager"
                    content={
                      <div>
                        <p>
                          Even with autonomous machines, a human still needs to
                          supervise overall operations. This is where the Asset
                          Manager comes into play. Asset Managers are in charge
                          of managing the IoT assets which includes the
                          oversight of deployment, ongoing maintenance, and
                          necessary repairs/updates.
                        </p>{' '}
                        <p>
                          Asset Managers receive a fair percentage of the
                          asset’s revenue stream in exchange for the hard work
                          they put in. Some machine placements require research,
                          permissions or other logistical requirements that the
                          Asset manager took care of before you were even able
                          to invest in the asset. MyBit verifies that all
                          preparations are in good order and that the asset
                          manager is backed via a compulsory MYB deposit
                          (escrow).
                        </p>
                        <p>
                          At MyBit we strive to improve everyone’s life. The
                          Asset manager role is not only highly necessary but
                          also offers a chance of participation for the ones
                          that aren’t fortunate enough to be able to invest
                          (yet). This operating model gives everyone the
                          possibility to partake in future’s autonomous economy.
                        </p>
                        <a
                          href="https://mybit.typeform.com/to/SmGzHj"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textAlign: 'center',
                            position: 'relative',
                            top: '20px'
                          }}
                        >
                          <Button label="Sign Up" />
                        </a>
                      </div>
                    }
                    isLeft
                  />
                </div>
              </div>
            </div>
          </div>
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}
