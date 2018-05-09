import React from 'react'
import Toolbox from '../static/svgs/other/Toolbox.svg'
import stylesheet from './asset-manager.scss'
import { Media } from './media'
import { Header } from './header'
import { MyBitFooter } from './footer/footer'
import {
  mediaContent
} from './constants/asset-manager'

export const AssetManager = () => {
  return (
    <div style={{ maxWidth: '1650px', margin: '0 auto' }}>
      <div className="AssetManager">
        <Header isLight={false} />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="grid-middle AssetManager__media">
          <div
            className="col-3 AssetManager__media-image-wrapper"
            style={{ position: 'relative' }}
          >
            <Toolbox alt="Toolbox" className="AssetManager__media-image" />
          </div>
          <div className="col-9 AssetManager__media-desc-wrapper">
            <div className="AssetManager__media-desc">
              <Media media={mediaContent} />
            </div>
          </div>
        </div>
      </div>
      <MyBitFooter />
    </div>
  )
}
