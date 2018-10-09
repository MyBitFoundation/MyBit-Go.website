import React from 'react'
import stylesheet from 'styles/main.scss'
import stylesheetAbout from 'styles/about.scss'
import { translate } from 'react-i18next'
import stylesheetGridlex from 'styles/gridlex.min.css'
import { default as Layout } from '../components/layout/layout'
import { Highlights } from '../components/highlights'
import Achievements from '../components/achievements'
import {
  highlights,
  teamDesc,
  achievements
} from '../components/constants/index'
import { reasons } from '../components/constants/investor'

import { SecondaryPageContainer } from '../components/layout/container'
import { Button } from '../components/button'
import { MediaCTA } from '../components/media-cta'
import Person from '../static/assets/people.png'
import Toolbox from '../static/assets/toolbox.png'
import Blocks from '../static/assets/blocks.png'
import Robot from '../static/assets/robot.png'

import i18n from '../i18n'

class Index extends React.Component {
  changeLanguage = language => {
    this.props.i18n.changeLanguage(language)
  }

  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style dangerouslySetInnerHTML={{ __html: stylesheetAbout }} />
        <style dangerouslySetInnerHTML={{ __html: stylesheetGridlex }} />
        <SecondaryPageContainer
          translator={this.props.t}
          changeLanguage={this.changeLanguage}
          currentLanguage={this.props.i18n.language}
        >
          <div className="About">
            <div className="grid-middle About__platform">
              <div className="col-8 col_sm-12">
                <MediaCTA
                  title={this.props.t('common:mybit_about_platform_title')}
                  content={`<p>${this.props.t(
                    'common:mybit_about_platform'
                  )}</p>`}
                  isLeft
                />
              </div>
              <div className="col-4 col_sm-12 About__image">
                <img src={Person} />
              </div>
            </div>

            <div className="grid-middle About__investors">
              <div className="col-8 col_sm-12">
                <MediaCTA
                  title={this.props.t(
                    'common:mybit_home_diamond_investors_title'
                  )}
                  content={`<div> <p>${this.props.t(
                    'common:mybit_about_investors_one'
                  )}</p><p>${this.props.t(
                    'common:mybit_about_investors_two'
                  )}</p></div>`}
                  isLeft
                />
              </div>
              <div className="col-4 col_sm-12 About__image">
                <img src={Blocks} />
              </div>
            </div>

            <div className="About__reasons">
              {reasons.map(val => (
                <div key={val.header} className="About__reasons-group">
                  <b>{this.props.t(val.header)}</b>
                  <p>{this.props.t(val.description)}</p>
                </div>
              ))}
            </div>

            <div className="grid-middle About__managers">
              <div className="col-8 col_sm-12">
                <MediaCTA
                  title={this.props.t(
                    'common:mybit_home_diamond_asset_managers_title'
                  )}
                  content={`<div> <p>${this.props.t(
                    'common:mybit_about_asset_managers_one'
                  )}</p><p>${this.props.t(
                    'common:mybit_about_asset_managers_two'
                  )}</p></div>`}
                  isLeft
                />
              </div>
              <div className="col-4 col_sm-12 About__image">
                <img src={Toolbox} />
              </div>
            </div>

            <div className="grid-middle About__partners">
              <div className="col-8 col_sm-12">
                <MediaCTA
                  title={this.props.t('common:mybit_about_partners-title')}
                  content={`<div> <p>${this.props.t(
                    'common:mybit_about_partners_one'
                  )}</p><p>${this.props.t(
                    'common:mybit_about_partners_two'
                  )}</p></div>`}
                  isLeft
                />
              </div>
              <div className="col-4 col_sm-12 About__image">
                <img src={Robot} />
              </div>
            </div>
          </div>
        </SecondaryPageContainer>
      </Layout>
    )
  }
}

const ExtendedIndex = translate(['common'], {
  i18n,
  wait: process.browser
})(Index)

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
ExtendedIndex.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['common'])
  return {}
}

export default ExtendedIndex
