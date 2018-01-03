import React from 'react'
import Availability from '../static/offers/offer-availability.svg'
import Fees from '../static/offers/offer-fees.svg'
import Security from '../static/offers/offer-security.svg'
import Speed from '../static/offers/offer-speed.svg'
import stylesheet from './offers.scss'

export default () => {
  const offers = [
    { id: 'speed', img: Speed, title: 'Speed', description: 'Monitor your investment progress in real time and receive revenue near-instantaneously instead of quarterly or annually like traditional funds.' },
    { id: 'security', img: Security, title: 'Security', description: 'Be in control of your money from start to finish. With MyBit there is no need to trust a third-party such as a fund with your capital. Instead it is governed by immutable computer code to eliminate the risk of manipulation or misuse.' },
    { id: 'fees', img: Fees, title: 'Low Fees', description: 'MyBit digitalises and automates broker functions so users can invest directly without paying excessive fees to a middle man. Traditional funds charge an average of 20% just to manage investment processes and distribute profits. This function can be fully automated with smart contracts which enables MyBit to offer the same services at a fraction of the cost.' },
    { id: 'availability', img: Availability, title: 'Availability', description: 'MyBit caters to every possible user. Offering individual investors, to large funds the ability to purchase a percentage of an asset, the whole asset, or a whole fleet of revenue generating assets.' }
  ].map(offer => {
    const Icon = offer.img
    return (
      <div key={offer.id} className='Offers__wrapper col-md-6 col-xs-12'>
        <div className={`Offers__img Offers__img--is-${offer.id}`}>
          <Icon />
        </div>
        <div className='Offers__information'>
          <span className='Offers__title'>{offer.title}</span>
          <span className='Offers__description'>{offer.description}</span>
        </div>
      </div>
    )
  })
  return (
    <div className='Offers row'>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      { offers }
    </div>
  )
}