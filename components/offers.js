import React from 'react'
import PropTypes from 'prop-types'
import Availability from '../static/offers/offer-availability.svg'
import Fees from '../static/offers/offer-fees.svg'
import Security from '../static/offers/offer-security.svg'
import Speed from '../static/offers/offer-speed.svg'
import stylesheet from './offers.scss'

const offers = ({ translator }) => {
  const offersList = [
    {
      id: 'speed',
      img: Speed,
      title: 'common:mybit_offers_subtitle_1',
      description: 'common:mybit_offers_description_1'
    },
    {
      id: 'security',
      img: Security,
      title: 'common:mybit_offers_subtitle_2',
      description: 'common:mybit_offers_description_2'
    },
    {
      id: 'fees',
      img: Fees,
      title: 'common:mybit_offers_subtitle_3',
      description: 'common:mybit_offers_description_3'
    },
    {
      id: 'availability',
      img: Availability,
      title: 'common:mybit_offers_subtitle_4',
      description: 'common:mybit_offers_description_4'
    }
  ].map(offer => {
    const Icon = offer.img
    return (
      <div key={offer.id} className="Offers__wrapper col-md-6 col-xs-12">
        <div className={`Offers__img Offers__img--is-${offer.id}`}>
          <Icon />
        </div>
        <div className="Offers__information">
          <span className="Offers__title">{translator(offer.title)}</span>
          <span className="Offers__description">
            {translator(offer.description)}
          </span>
        </div>
      </div>
    )
  })
  return (
    <div className="Offers row">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {offersList}
    </div>
  )
}

offers.defaultProps = {
  translator: () => {}
}

offers.propTypes = {
  translator: PropTypes.function
}

export default offers
