import React from 'react'
import stylesheet from './video-player.scss'

const videoPlayer = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="VideoPlayer">
        <div className="VideoPlayer__button">
          <div className="VideoPlayer__button-arrow-circle" />
          <div className="VideoPlayer__button-arrow-square" />
        </div>
        <p className="VideoPlayer__text">Play Video</p>
      </div>
    </div>
  )
}

export default videoPlayer;
