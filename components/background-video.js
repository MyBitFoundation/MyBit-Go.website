import React from 'react'
import Background from '../static/assets/mybit_placeholder.png'
import stylesheet from './background-video.scss'

export const BackgroundVideo = () => {
  return (
    <div className="Background-video">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="Background-video__wrapper">
        <img className="Background-video__image" src={Background} />
      </div>
    </div>
  )
}
