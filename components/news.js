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
    { id: 'cryptoinsider', img: cryptoInsider },
    { id: 'forbes', img: forbes },
    { id: 'futuretechpodcast', img: futuretechpodcast },
    { id: 'newsbtc', img: newsbtc },
    { id: 'nasdaq', img: nasdaq },
    { id: 'tnw', img: tnw }
  ].map( pressRelease => (
    <div key={pressRelease.id} className='News__press-release col-md-4'>
      <a target='_blank' href='#'>
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