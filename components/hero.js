import React from 'react'
import PropTypes from 'prop-types'
import SubscribeFrom from 'react-mailchimp-subscribe'
import stylesheet from './hero.scss'

import { formProps } from './constants/index'

const hero = ({ translator }) => (
  <div className="Hero row">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="col-md-12">
      <h1 className="Hero__title">{translator('common:mybit_title')}</h1>
      <h2
        dangerouslySetInnerHTML={{
          __html: translator('common:mybit_subtitle')
        }}
        className="Hero__subtitle"
      />
      <p className="Hero__description">
        {translator('common:mybit_description_1')}
      </p>
      <p
        dangerouslySetInnerHTML={{
          __html: translator('common:mybit_description_2')
        }}
        className="Hero__description"
      />
      <div className="Hero__form-wrapper">
        <SubscribeFrom {...formProps} />
        <span className="Hero__subscribe-tagline">
          {translator('common:mybit_subscribe')}
        </span>
      </div>
    </div>
  </div>
)

hero.defaultProps = {
  translator: () => {}
}

hero.propTypes = {
  translator: PropTypes.function
}

export default hero
