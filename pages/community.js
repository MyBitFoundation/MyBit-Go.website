import React from 'react'
import stylesheet from 'styles/main.scss'
import { default as Layout } from '../components/layout/layout'

import { Highlights } from '../components/highlights'
import { Header } from '../components/header'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{ maxWidth: '1650px', margin: '0 auto' }}>
          <style dangerouslySetInnerHTML={{ __html: stylesheet}} />
          <div
            className="grid__container"
            style={{
              height: '273px'
            }}
          >
            <Header isLight={false}/>
          </div>
        </div>
      </Layout>
    )
  }
}
