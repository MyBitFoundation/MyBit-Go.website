import React from 'react'
import PropTypes from 'prop-types'
import { initGA, logPageView, initTwitterConvTrkr, logTwitterPageView, initPixelConvTrkr, logPixelPageView } from '../utils/analytics'

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      initTwitterConvTrkr()
      initPixelConvTrkr();
      window.GA_INITIALIZED = true
    }
    logPageView()
    logTwitterPageView()
    logPixelPageView();
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
