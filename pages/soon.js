import React from 'react'
import stylesheet from 'styles/main.scss'
import { default as Layout } from '../components/layout/layout'

import { Header } from '../components/header'
import { SoonBanner } from '../components/hero-banner'
import { MyBitFooter } from '../components/footer/footer'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="grid__container">
          <Header isInHomePage isDark />
        </div>
        <div
          className="grid__container"
          style={{
            height: '600px'
          }}
        >
          <SoonBanner />
        </div>
        <div className="grid__container" style={{ margin: 'auto' }}>
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}
