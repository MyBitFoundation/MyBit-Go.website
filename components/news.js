import React from 'react'
import cryptoInsider from '../static/news/cryptoinsider.png'
import forbes from '../static/news/forbes.png'
import futuretechpodcast from '../static/news/futuretechpodcast.png'
import newsbtc from '../static/news/newsbtc.png'
import nasdaq from '../static/news/nasdaq.png'
import tnw from '../static/news/tnw.png'
import stylesheet from './news.scss'

export default () => {
  const news = [
    { id: 'cryptoinsider', img: cryptoInsider, link: 'https://cryptoinsider.21mil.com/enterprise-level-investing-possible-blockchain/' },
    { id: 'forbes', img: forbes, link: 'https://www.forbes.com/sites/omribarzilay/2017/08/14/why-blockchain-is-the-future-of-the-sharing-economy/#7e4b48b83342' },
    { id: 'futuretechpodcast', img: futuretechpodcast, link: 'https://www.futuretechpodcast.com/podcasts/mybit-io-a-platform-for-crowdfunding-machine-ownership-investments/' },
    { id: 'newsbtc', img: newsbtc, link: 'https://www.cryptocoinsnews.com/ground-success-story-mybit/' },
    { id: 'nasdaq', img: nasdaq, link: 'http://www.nasdaq.com/article/blockchain-technology-could-disrupt-and-reboot-the-sharing-economy-cm836757' },
    { id: 'tnw', img: tnw, link: 'https://thenextweb.com/contributors/2017/09/21/blockchain-tech-missing-link-success-iot/' }
  ].map( pressRelease => (
    <div key={pressRelease.id} className='News__press-release col-md-4 col-xs-12'>
      <a target='_blank' href={pressRelease.link}>
        <img className='News__press-release-img' src={pressRelease.img} />
      </a>
    </div>
  ))
  return (
    <div className='News row'>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      { news }
    </div>
  )
}