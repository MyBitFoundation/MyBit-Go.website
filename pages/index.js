import React from 'react'
import stylesheet from 'styles/main.scss'
import { default as Layout } from '../components/layout/layout'
import { Container } from '../components/layout/container'

import { Highlights, Highlight } from '../components/highlights'
import { diamondHighlights } from '../components/constants'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Highlights highlights={diamondHighlights} isDiamond />
        <div
          className="grid__container"
          style={{
            marginTop: '-500px',
            marginBottom: '750px'
          }}
        >
          <Container
            isStyled
            leftNode={
              <Highlight
                title={'Investors'}
                content={`<p>Gain direct access to the 11.1 Trillion
                  dollar machine economy.</p>`}
                icon="MyBitInvestorsIcon"
                isDiamond
                style={{ margin: 'auto 0', paddingLeft: '50px' }}
                isTransparent
              />
            }
            rightNode={
              <Highlight
                title={'Asset Manager'}
                content={`<p>Profit from operating and maintaining
                  IoT devices.</p>`}
                icon="MyBitAssetManagerIcon"
                isDiamond
                style={{
                  margin: 'auto 0',
                  paddingRight: '50px',
                  right: 0,
                  left: 'auto'
                }}
                isTransparent
              />
            }
          />
        </div>
        <div
          className="grid__container"
          style={{ width: '100%', margin: 'auto' }}
        >
          <Highlights
            highlights={[
              {
                title: 'Agriculture',
                content: `<p>Our ecosystem succeeds with cutting
                edge technology and an amazing community</p>`,
                icon: 'MyBitAgricultureIcon',
                isLight: false
              },
              {
                title: 'Manufacturing',
                content: `<p>Our ecosystem succeeds with cutting
                edge technology and an amazing community</p>`,
                icon: 'MyBitManufacturingIcon',
                isLight: false
              },
              {
                title: 'Logistics',
                content: `<p>Our ecosystem succeeds with cutting
                edge technology and an amazing community</p>`,
                icon: 'MyBitLogisticsIcon',
                isLight: false
              }
            ]}
          />
        </div>
      </Layout>
    )
  }
}
