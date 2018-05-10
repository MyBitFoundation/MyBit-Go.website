import React from 'react'
import stylesheetGridlex from 'styles/gridlex.min.css'
import stylesheet from 'styles/asset-manager.scss'
import { default as Layout } from '../components/layout/layout'
import { Media } from '../components/media'
import { Header } from '../components/header'
import { MyBitFooter } from '../components/footer/footer'
import Toolbox from '../static/svgs/other/Toolbox.svg'
import { mediaContent } from '../components/constants/asset-manager'

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
                <div
                  className="col-3 AssetManager__media-image-wrapper"
                  style={{ position: 'relative' }}
                >
                  <Toolbox
                    alt="Toolbox"
                    className="AssetManager__media-image"
                  />
                </div>
                <div className="col-9 AssetManager__media-desc-wrapper">
                  <div className="AssetManager__media-desc">
                    <Media media={mediaContent} />
                  </div>
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
