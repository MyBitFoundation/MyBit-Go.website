import React from 'react'
import videoSrc from 'static/assets/ownyourfuture.mp4'
import posterSrc from 'static/assets/ownyourfuture.png'
import stylesheet from './teaser.scss'

export const Teaser = () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='Teaser__wrapper' >
      <div className='Teaser__container'>
        <video loop autoPlay poster={posterSrc} src={videoSrc} />
      </div>
    </div>
  </div>
)

