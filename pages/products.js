import React from 'react'
import { action } from '@storybook/addon-actions'

import stylesheet from 'styles/main.scss'
import walletStylesheet from '../components/wallets.scss'
import buttonStyleSheet from '../components/button.scss'

import { default as Layout } from '../components/layout/layout'

import { Highlights } from '../components/highlights'
import { Header } from '../components/header'
import { mediaHighlights, media, wallets } from '../components/constants'
import { Media } from '../components/media'
import { Wallets } from '../components/wallets'
import { MediaCTA } from '../components/media-cta'
import { Button } from '../components/button'
import { MyBitFooter } from '../components/footer/footer'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{ maxWidth: '1650px', margin: '0 auto' }}>
          <style dangerouslySetInnerHTML={{ __html: stylesheet, __html: walletStylesheet }} />
          <div
            className="grid__container"
            style={{
              height: '273px'
            }}
          >
            <Header isLight={false}/>
          </div>
          <div
            style={{
              marginTop: '50px'
            }}
          >
            <Highlights highlights={mediaHighlights} />
          </div>
          <div
            style={{
              marginTop: '75px'
            }}
          >
            <Media media={media} />
          </div>
          <div
            className="grid__container"
            style={{ width: '100%', margin: 'auto', marginTop: '119px' }}
          >
            <Highlights
              highlights={[
                {
                  title: 'Native Wallets',
                  isLight: true,
                  isCentered: true,
                  isTransparent: true,
                  isFullWidth: true
                }
              ]}
            />
          </div>
          <div
            style={{
              marginLeft: '160px'
            }}
          >
            <Wallets Wallets={wallets} />
          </div>
          <div
            style={{
                marginTop: '40px'
            }}
          >
            <style dangerouslySetInnerHTML={{ __html: buttonStyleSheet }} />
            <MediaCTA
              title="Are you an app developer?"
              content="<p>Learn about being rewarded for developing for MyBit.</p>"
              button={[
                <Button
                  key="buttonA"
                  label="Learn more"
                  isLight
                  onClick={action('button-click')}
                />,
                <Button
                  key="buttonB"
                  label="Learn even more"
                  isLight
                  onClick={action('button-click')}
                />
              ]}
            />
          </div>
          <div
            className="grid__container"
            style={{ marginTop: '134px', margin: 'auto' }}
          >
            <MyBitFooter />
          </div>
        </div>
      </Layout>
    )
  }
}
