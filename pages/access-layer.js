import React from 'react'

import stylesheetGridlex from 'styles/gridlex.min.css'
import stylesheet from 'styles/access-layer.scss'

import { default as Layout } from '../components/layout/layout'

import { exchanges } from '../components/constants'
import Key from '../static/assets/key.png'

import { MediaCTA } from '../components/media-cta'
import { Media } from '../components/media'
import { SecondaryPageContainer } from '../components/layout/container'

import { withI18next } from '../lib/withI18next'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  changeLanguage = language => {
    this.props.i18n.changeLanguage(language)
  }

  render() {
    const toRender = (
      <div className="AccessLayer__exchanges-logos">
        {exchanges.map(exchange => (
          <a
            key={exchange.imageSrc}
            rel="noopener noreferrer"
            target="_blank"
            href={exchange.url}
            className={exchange.className}
          >
            <img
              className="AccessLayer__exchanges-img"
              src={exchange.imageSrc}
            />
          </a>
        ))}
      </div>
    )

    const mediaExchanges = translator => [
      {
        title: translator('common:mybit_token_exchanges'),
        content: toRender,
        isCentered: true
      }
    ]

    return (
      <Layout>
        <SecondaryPageContainer
          translator={this.props.t}
          changeLanguage={this.changeLanguage}
          currentLanguage={this.props.i18n.language}
        >
          <div className="AccessLayer">
            <div style={{ padding: '0px 5%' }}>
              <style dangerouslySetInnerHTML={{ __html: stylesheetGridlex }} />
              <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
              <div className="grid-middle AccessLayer__media">
                <div className="col-3 col_sm-12 col_sm-last col_md-first col_lg-first MediaCTA__image-wrapper">
                  <img src={Key} className="AccessLayer__img-key" />
                </div>
                <div className="col-9 col_sm-12 col_sm-first col_md-last col_lg-last">
                  <MediaCTA
                    title={this.props.t('common:mybit_token_title')}
                    content={`<h2>${this.props.t(
                      'common:mybit_token_access_layer'
                    )}</h2>
                      <p>${this.props.t(
                        'common:mybit_token_access_layer_one'
                      )}</p>
                      <p>${this.props.t(
                        'common:mybit_token_access_layer_two'
                      )}</p>
                      <p>${this.props.t(
                        'common:mybit_token_access_layer_three'
                      )}</p>
                      <b>${this.props.t(
                        'common:mybit_token_access_layer_level_one-bold'
                      )}</b> ${this.props.t(
                      'common:mybit_token_access_layer_level_one'
                    )}<br/>
                      <b>${this.props.t(
                        'common:mybit_token_access_layer_level_two-bold'
                      )}</b> ${this.props.t(
                      'common:mybit_token_access_layer_level_two'
                    )}<br/>
                      <b>${this.props.t(
                        'common:mybit_token_access_layer_level_three-bold'
                      )}</b> ${this.props.t(
                      'common:mybit_token_access_layer_level_three'
                    )}</p><br/>
                      <h2>${this.props.t(
                        'common:mybit_token_escrow-title'
                      )}</h2>
                      <p>${this.props.t('common:mybit_token_escrow')}</p><br/>
                      <h2>${this.props.t(
                        'common:mybit_home_diamond_staking_title'
                      )}</h2>
                      <p>${this.props.t(
                        'common:mybit_home_diamond_staking'
                      )}</p></br>
                      <h2>${this.props.t(
                        'common:mybit_token_acquire_title'
                      )}</h2>
                      <p>${this.props.t('common:mybit_token_acquire')}</p>`}
                    isLeft
                  />
                </div>
              </div>
              <div className="AccessLayer__exchanges">
                <Media media={mediaExchanges(this.props.t)} />
              </div>
            </div>
          </div>
        </SecondaryPageContainer>
      </Layout>
    )
  }
}

export default withI18next(['common'])(Index)
