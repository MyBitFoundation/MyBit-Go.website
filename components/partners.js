import React from 'react'
import enterpriseEthereumAlliance from '../static/partners/eea.png'
import emerginginsider from '../static/partners/ei.png'
import meyerlustenbergerLachenalLtd from '../static/partners/mll.png'
import arabco from '../static/partners/arabco.png'
import stylesheet from './partners.scss'

export default () => {
  const partners = [
    { id: 'eea', img: enterpriseEthereumAlliance, area: 'Business', link: 'https://entethalliance.org/members/' }, 
    { id: 'ei', img: emerginginsider, area: 'Public Relations', link: 'http://emerginginsider.com/' },
    { id: 'mll', img: meyerlustenbergerLachenalLtd, area: 'Legal', link: 'http://www.mll-legal.com/' },
    { id: 'arabco', img: arabco, area: 'Smart Tech', link: 'https://medium.com/mybit-dapp/mybit-partner-with-arabco-smart-technology-8a54d39f17de' }
  ].map(partner => (
    <div key={partner.id} className='Partners__wrapper col-md-3 col-xs-12'>
      <a href={partner.link} target='_blank'>
        <img className={`Partners__img Partners__img--is-${partner.id}`} src={partner.img} />
        <span className='Partners__area'>{partner.area}</span>
      </a>
    </div>
  ))
  return (
    <div className='Partners row'>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      { partners }
    </div>
  )
}