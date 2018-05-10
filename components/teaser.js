import React from 'react'
import stylesheet from './teaser.scss'

export const Teaser = () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='Teaser__wrapper' >
      <div className='Teaser__container'>
        <video
          loop
          autoPlay
          poster='https://files.mybit.io/ownyourfuture.png'
          src='https://files.mybit.io/ownyourfuture.mp4'
        />
      </div>
    </div>
  </div>
)

