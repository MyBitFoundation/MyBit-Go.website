import React, { Component } from 'react'
import classNames from 'classnames'
import YouTube from 'react-youtube';
import Logo from '../static/svgs/icons/mybit-full-white.svg'
import Replay from '../static/svgs/icons/replay.svg'
import stylesheet from './video-component.scss';
import { Button } from './button'


class VideoComponent extends Component {
  constructor(props) {
    super(props)
    this.state={displayVideo: false, waitingForAnimation: false, videoEnded: false, animateOut: false}

    this.onReady = this.onReady.bind(this);
    this.handleVideoClose = this.handleVideoClose.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.videoOpen && !this.state.displayVideo && !this.state.waitingForAnimation){
      this.setState({waitingForAnimation: true})
      setTimeout(() => 
        this.setState({displayVideo: true}), 500);
    }
  }

  handleViewEnd(){
    this.setState({videoEnded: true})
  }

  handlePlay(){
    if(this.videoEnded){
      this.setState({videoEnded: false})
    }
  }

  handleVideoClose(){
    this.setState({animateOut: true})
    setTimeout(() =>{
      this.props.closeVideo();
      this.setState({waitingForAnimation: false, displayVideo: false, videoEnded: false, animateOut: false})
    }, 300);
  }

  onReady(event) {
    this.video = event.target;
  }

  handleReplay(){
    this.setState({videoEnded: false})
    this.video.playVideo();
  }

  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
        rel: 0
      }
    };

    return (
      <div
        className={classNames({
        'VideoComponent': true,
        'VideoComponent--is-active': this.props.videoOpen,
        'VideoComponent--animate-out': this.state.animateOut,
      })}
      >
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <a 
          onClick={() => this.handleVideoClose()} 
          className={classNames({
            'VideoComponent__btn-close': true,
            'VideoComponent__btn-close--video-ended': this.state.videoEnded
          })}
        >
          &times;
        </a>
        {this.state.videoEnded && 
          <div 
            className={classNames({
              'VideoComponent__container-learn-more': true
            })}
          >
            <div className="VideoComponent__container-learn-more-wrapper">
              <Logo className="VideoComponent__container-learn-more-logo"/>
              <p className="VideoComponent__container-learn-more-text">Redefining the way people generate income.</p>
              <div className="VideoComponent__buttons-wrapper">
                <Button 
                  label={"Learn How it Works"}
                  url={"/how-it-works"}
                  className={"VideoComponent__btn-start-here"}
                  isLink
                  isCentered
                />
                <div className="VideoComponent__btn-replay">
                  <Replay onClick={() => this.handleReplay()}/>
                </div>
              </div>
            </div>
          </div>
        }
        {this.state.displayVideo && 
          <YouTube
            videoId="SGFGfpKn1dg"
            opts={opts}
            onEnd={() => this.handleViewEnd()}
            onPlay={() => this.handlePlay()}
            onReady={this.onReady}
          />
      }
      </div>
    )
  }
}

export default VideoComponent
