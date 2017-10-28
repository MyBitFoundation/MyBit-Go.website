import React from 'react'
import SubscribeFrom from 'react-mailchimp-subscribe'
import stylesheet from './hero.scss'

import { formProps } from './constants/index'

export default () => (
  <div className='Hero row'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='col-md-12'>
      <h1 className='Hero__title'>Transforming Investing</h1>
      <h2 className='Hero__subtitle'><b>MyBit</b> enables anyone to directly invest in machines that generate revenue</h2>
      <p>
        Using Ethereum smart contracts to eliminate the middleman, The <b>MyBit</b> platform unlocks
        billions of dollars in investment opportunities and pushes more profit back to people.
      </p>
      <SubscribeFrom {...formProps} />
      <span className='Hero__subscribe-tagline'>Subscribe for early access to Alpha and breaking news</span>
    </div>
  </div>
)