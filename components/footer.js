import React from 'react'
import PropTypes from 'prop-types'
import SubscribeFrom from 'react-mailchimp-subscribe'
import { formProps } from './constants/index'
import { default as Links } from './links'
import stylesheet from './footer.scss'

const footer = ({ translator }) => {
  const footerLinkGenerator = (title, links) => (
    <div className='Footer__footer-links'>
      <span className='Footer__footer-link-title'><b>{title}</b></span>
      {
        links.map(link => (
          <a 
            key={link.name}
            className='Footer__footer-link-href' 
            href={link.href}
            rel="noopener noreferrer"
            target='_blank'
          >
            {link.name}
          </a>
          )
        )
      }
    </div>
  )
  return (
    <div className='Footer'>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className='row'>
        <div className='col-md-6 col-xs-12'>
          <div className='Footer__subscribe-wrapper'>
            <h4 dangerouslySetInnerHTML={{ __html: translator('common:mybit_footer_title') }} className='Footer__signup' />
            <span className='Footer__signup-text'>{translator('common:mybit_footer_subtitle')}</span>
          </div>
        </div>
        <div className='col-md-6 col-xs-12'>
          <div className='Footer__subscribe-wrapper Footer__subscribe-wrapper--is-right'>
            <SubscribeFrom {...formProps} />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-xs-12'>
          <div className='Footer__subscribe-wrapper'>
            <div className='row'>
              <div className='col-md-3 col-xs-4'>
                {
                  footerLinkGenerator('About', [
                    { name: 'Whitepaper', href: './static/files/MyBit_Whitepaper_v2.5.1.pdf' },
                    { name: 'Architecture', href: './static/files/MyBit_Architecture_V2.pdf' }
                  ])
                }
              </div>
              <div className='col-md-5 col-xs-4'>
                {
                  footerLinkGenerator('Resources', [
                    { name: 'Blockchain Explorer', href: 'https://ethplorer.io/address/0x94298f1e0ab2dfad6eeffb1426846a3c29d98090' },
                    { name: 'Github', href: 'https://github.com/MyBitFoundation' }
                  ])
                }
              </div>
              <div className='col-md-4 col-xs-4'>
                {
                  footerLinkGenerator('Get involved', [
                    { name: 'Blog', href: 'https://medium.com/@MyBit_Blog' },
                    { name: 'Get in touch', href: 'mailto:info@mybit.io' }
                  ])
                }
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-xs-12'>
          <Links isFooter />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-xs-12'>
          <span className='Footer__impressum'>
          MyBit Foundation. Grabenstrasse 25, 6340 Baar, Switzerland.
          <br/>
          Copyright © MyBit 2017. All Rights Reserved.
          </span>
        </div>
        <div className='col-md-6 col-xs-12'>
          <span className='Footer__impressum Footer__impressum--is-right'>
          MyBit Stiftung (MyBit Foundation) is registered in Zug, Switzerland. Identification number CHE-177.186.963. 
            <a href='https://www.zefix.ch/en/search/entity/list/firm/1313862?name=mybit&searchType=exact' target='_blank' rel="noopener noreferrer"> Commercial register</a>
            <a href='./static/files/MyBit_CHE-177.186.963.pdf' target='_blank' rel="noopener noreferrer"> (pdf)</a>.
          </span>
        </div>
      </div>
    </div>
  )
}

footer.defaultProps = {
  translator: () => {}
}

footer.propTypes = {
  translator: PropTypes.function
}

export default footer;