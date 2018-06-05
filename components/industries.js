import React from 'react'
import PropTypes from 'prop-types'
import atm from '../static/industries/industry-atm.png'
import vehicles from '../static/industries/industry-vehicles.png'
import mining from '../static/industries/industry-mining.png'
import partners from '../static/industries/industry-partners.png'
import property from '../static/industries/industry-property.png'
import solar from '../static/industries/industry-solar.png'
import stylesheet from './industries.scss'

const industries = ({ translator }) => {
  const industriesList = [
    { id: 'atm', img: atm, title: 'common:mybit_industries_subtitle_1' },
    { id: 'mining', img: mining, title: 'common:mybit_industries_subtitle_2' },
    {
      id: 'vehicles',
      img: vehicles,
      title: 'common:mybit_industries_subtitle_3'
    },
    { id: 'solar', img: solar, title: 'common:mybit_industries_subtitle_4' },
    {
      id: 'property',
      img: property,
      title: 'common:mybit_industries_subtitle_5'
    },
    {
      id: 'partners',
      img: partners,
      title: 'common:mybit_industries_subtitle_6',
      additional: 'common:mybit_industries_subtitle_7'
    }
  ].map(industry => (
    <div key={industry.id} className="Industries__wrapper col-md-4 col-xs-12">
      <a href={industry.link} rel="noopener noreferrer" target="_blank">
        <img
          className={`Industries__img Industries__img--is-${industry.id}`}
          src={industry.img}
        />
        <span className="Industries__title">{translator(industry.title)}</span>
        {industry.additional && (
          <a className="Industries__additional" href="mailto:info@mybit.io">
            <span>{translator(industry.additional)}</span>
          </a>
        )}
      </a>
    </div>
  ))
  return (
    <div className="Industries row">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {industriesList}
    </div>
  )
}

industries.defaultProps = {
  translator: () => {}
}

industries.propTypes = {
  translator: PropTypes.function
}

export default industries
