import React from 'react'
import stylesheet from 'styles/main.scss'
import { default as Layout } from '../components/layout/layout'

import { Highlights } from '../components/highlights'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div
          className="grid__container"
          style={{
            position: 'relative',
            height: '600px'
          }}
        >
          <Highlights
            highlights={[
              {
                title: 'Products Page',
                isDiamond: true,
                isLight: true,
                isTransparent: true,
                isBig: true,
                style: { margin: 'auto' }
              }
            ]}
          />
        </div>
      </Layout>
    )
  }
}
