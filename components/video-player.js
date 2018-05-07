import React from 'react'
import Arrow from '../static/svgs/assets/play-video-arrow.svg'
import stylesheet from './video-player.scss'

export const VideoPlayer = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="VideoPlayer">
        <div className="VideoPlayer__button">
          <Arrow className="VideoPlayer__button-arrow" />
        </div>
        <p className="VideoPlayer__text">Play Video</p>
      </div>
    </div>
  )
}
