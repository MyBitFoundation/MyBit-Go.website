import React from 'react'
import PropTypes from 'prop-types'
import enterpriseEthereumAlliance from '../static/partners/eea.png'
import emerginginsider from '../static/partners/ei.png'
import meyerlustenbergerLachenalLtd from '../static/partners/mll.png'
import arabco from '../static/partners/arabco.png'
import alpine from '../static/partners/alpinemining.png'
import slock from '../static/partners/slock.png'
import stylesheet from './partners.scss'

const partners = ({ translator }) => {
  const partnersList = [
    {
      id: 'eea',
      img: enterpriseEthereumAlliance,
      area: 'common:mybit_partners_subtitle_1',
      link: 'https://entethalliance.org/members/'
    },
    {
      id: 'ei',
      img: emerginginsider,
      area: 'common:mybit_partners_subtitle_2',
      link: 'http://emerginginsider.com/'
    },
    {
      id: 'mll',
      img: meyerlustenbergerLachenalLtd,
      area: 'common:mybit_partners_subtitle_3',
      link: 'http://www.mll-legal.com/'
    },
    {
      id: 'arabco',
      img: arabco,
      area: 'common:mybit_partners_subtitle_4',
      link:
        'https://medium.com/mybit-dapp/mybit-partner-with-arabco-smart-technology-8a54d39f17de'
    },
    {
      id: 'alpine',
      img: alpine,
      area: 'common:mybit_partners_subtitle_5',
      link: 'https://alpinemining.ch/en/'
    },
    {
      id: 'slock',
      img: slock,
      area: 'common:mybit_partners_subtitle_4',
      link: 'https://slock.it/'
    }
  ].map(partner => (
    <div key={partner.id} className="Partners__wrapper col-md-4 col-xs-12">
      <a href={partner.link} target="_blank">
        <img
          className={`Partners__img Partners__img--is-${partner.id}`}
          src={partner.img}
        />
        <span className="Partners__area">{translator(partner.area)}</span>
      </a>
    </div>
  ))
  return (
    <div className="Partners row">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {partnersList}
    </div>
  )
}

partners.defaultProps = {
  translator: () => {}
}

partners.propTypes = {
  translator: PropTypes.function
}

export default partners
