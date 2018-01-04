import React from 'react'
import atm from '../static/industries/industry-atm.png'
import vehicles from '../static/industries/industry-vehicles.png'
import mining from '../static/industries/industry-mining.png'
import partners from '../static/industries/industry-partners.png'
import property from '../static/industries/industry-property.png'
import solar from '../static/industries/industry-solar.png'
import stylesheet from './industries.scss'

export default () => {
  const industries = [
    { id: 'atm', img: atm, title: 'Crypto Currency & ATMs' }, 
    { id: 'mining', img: mining, title: 'Mining & Master Nodes' },
    { id: 'vehicles', img: vehicles, title: 'Autonomous Vehicles' },
    { id: 'solar', img: solar, title: 'Solar and Renewable Energy' },
    { id: 'property', img: property, title: 'Smart Property and Storage' },
    { id: 'partners', img: partners, title: 'Other IoT Devices', additional: 'Become a partner' },
  ].map(industry => (
    <div key={industry.id} className='Industries__wrapper col-md-4 col-xs-12'>
      <a href={industry.link} target='_blank'>
        <img className={`Industries__img Industries__img--is-${industry.id}`} src={industry.img} />
        <span className='Industries__title'>{industry.title}</span>
        { 
            industry.additional && 
            <a className='Industries__additional' href='mailto:info@mybit.io'>
              <span>{industry.additional}</span> 
            </a>
        }
      </a>
    </div>
  ))
  return (
    <div className='Industries row'>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      { industries }
    </div>
  )
}