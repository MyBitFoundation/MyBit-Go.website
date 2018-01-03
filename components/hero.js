import React from 'react'
import SubscribeFrom from 'react-mailchimp-subscribe'
import stylesheet from './hero.scss'

import { formProps } from './constants/index'

export default () => (
  <div className='Hero row'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='col-md-12'>
      <h1 className='Hero__title'>Invest in the future</h1>
      <h2 className='Hero__subtitle'><b>MyBit</b> enables anyone to directly invest in technologies of the future.</h2>
      <p className='Hero__description'>
        Investing in this emerging multi-trillion dollar industry of autonomous vehicles, 
        renewable energy, robotics, and smart IoT devices has never been easier.
      </p>
      <p className='Hero__description'>
        By integrating Ethereum Smart Contracts MyBit offers a faster, more secure and 
        profitable model than traditional platforms. <b>MyBit</b> is the future of investing.
      </p>
      <div className='Hero__form-wrapper'>
        <SubscribeFrom {...formProps} />
        <span className='Hero__subscribe-tagline'>Subscribe for early access to Alpha and breaking news</span>
      </div>
    </div>
  </div>
)