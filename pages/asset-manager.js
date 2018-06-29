import React from 'react'
import stylesheetGridlex from 'styles/gridlex.min.css'
import stylesheet from 'styles/asset-manager.scss'
import { default as Layout } from '../components/layout/layout'
import { MediaCTA } from '../components/media-cta'
import Toolbox from '../static/assets/toolbox.png'
import { Button } from '../components/button'
import { SecondaryPageContainer } from '../components/layout/container'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SecondaryPageContainer>
          <div className="AssetManager">
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
                          Even with autonomous machines, some human oversight is
                          needed. This is where the Asset Manager comes in.
                        </p>{' '}
                        <p>
                          Installing a Bitcoin ATM or solar bench could mean
                          serious planning, paperwork and logistics - but it
                          must happen before the crowdfunding period starts.
                          MyBit verifies that all preparations are in good order
                          and that the Asset Manager is backed via a compulsory
                          MYB deposit (escrow).
                        </p>
                        <p>
                          Asset Managers are in charge of overseeing asset
                          deployment, maintenance, updates and repairs. In
                          return for the hard work they put in, they receive a
                          fair percentage of the asset’s earnings. The Asset
                          Manager is not only crucial but also offers a chance
                          to participate for those who are not able to invest
                          (yet). This model empowers everyone to take part in
                          the machine economy of the future.
                        </p>
                        <Button
                          label={'Sign Up'}
                          url={'https://mybit.typeform.com/to/gVVEWM'}
                          isLink
                          isCentered
                        />
                      </div>
                    }
                    isLeft
                  />
                </div>
              </div>
            </div>
          </div>
        </SecondaryPageContainer>
      </Layout>
    )
  }
}
