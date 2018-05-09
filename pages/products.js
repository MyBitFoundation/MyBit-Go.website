import React from 'react'
import stylesheet from 'styles/main.scss'
import { default as Layout } from '../components/layout/layout'

import { Highlights } from '../components/highlights'
import { Header } from '../components/header'
import { mediaHighlights, media, wallets } from '../components/constants'
import { Media } from '../components/media'
import { Wallets } from '../components/wallets'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div
          className="grid__container"
          style={{
            height: '273px'
          }}
        >
          <Header />
        </div>
        <div
          style={{
            marginTop: '100px'
          }}
        >
          <Highlights highlights={mediaHighlights} />
        </div>
        <div
          style={{
            marginTop: '50px'
          }}
        >
          <Media media={media} />
        </div>
        <div
          style={{
            marginTop: '20px'
          }}
        >
          <Wallets Wallets={wallets} />
        </div>
      </Layout>
    )
  }
}
