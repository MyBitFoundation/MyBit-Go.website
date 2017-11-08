import React from 'react'
import SubscribeFrom from 'react-mailchimp-subscribe'
import { formProps } from './constants/index'
import { default as Links } from './links'
import stylesheet from './footer.scss'

export default () => {
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
        <div className='col-md-6'>
          <div className='Footer__subscribe-wrapper'>
            <h4 className='Footer__signup'><b>Sign up</b> for the alpha</h4>
            <span className='Footer__signup-text'>The MyBit platform is launching soon, be the first to test it.</span>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='Footer__subscribe-wrapper Footer__subscribe-wrapper--is-right'>
            <SubscribeFrom {...formProps} />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='Footer__subscribe-wrapper'>
            <div className='row'>
              <div className='col-md-3'>
                {
                  footerLinkGenerator('About', [
                    { name: 'FAQ', href: '#' },
                    { name: 'Blog', href: '#' }
                  ])
                }
              </div>
              <div className='col-md-5'>
                {
                  footerLinkGenerator('Resources', [
                    { name: 'Blockchain Explorer', href: '#' },
                    { name: 'Github', href: '#' }
                  ])
                }
              </div>
              <div className='col-md-4'>
                {
                  footerLinkGenerator('Get involved', [
                    { name: 'Get in touch', href: '#' }
                  ])
                }
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-offset-2 col-md-4'>
          <Links />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <span className='Footer__impressum'>
          MyBit Foundation. Grabenstrasse 25, 6340 Baar, Switzerland.
          <br/>
          Copyright © MyBit 2017. All Rights Reserved
          </span>
        </div>
        <div className='col-md-offset-1 col-md-5'>
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