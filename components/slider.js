import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import animateScrollTo from 'animated-scroll-to';
import { Highlight } from '../components/highlights'
import stylesheet from './slider.scss'
import { ArrowButton } from './arrow-button';
import { MediaList } from './icon';
import { IndustriesMain } from './industries-main';

export class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentScroll: 0, isBeginning: true, isEnd: false}
    this.scroll = this.scroll.bind(this);
    this.list = this.props.listRef;

    this.setListRef = element => {
      this.list = element;
    };
  }

  scroll(offset){
    const element = this.list;
    const width = element.offsetWidth;
    const scrollWidth = element.scrollWidth;
    const toScroll = scrollWidth - width;
    const futurePosition = this.state.currentScroll + offset;
    const offSetToMin = 0 + futurePosition;
    const offSetToMax = toScroll - futurePosition;

    // case where we are going to be resetting scroll, which does it as well if there are only 100px left or less
    if(futurePosition <= 0 || offSetToMin <= 100){
      animateScrollTo(0, {minDuration: 500, element, horizontal: true});
      this.setState({currentScroll: 0, isBeginning: true})
    }
    // case where we are going to be scrolling to the end, which does it as well if there are only 100px left or less
    else if(futurePosition >= toScroll || offSetToMax <= 100){
      animateScrollTo(toScroll, {minDuration: 500, element, horizontal: true});
      this.setState({currentScroll: toScroll, isEnd: true})
    }
    // case where we have not reached an endge
    else{
      animateScrollTo(futurePosition, {minDuration: 500, element, horizontal: true});
      this.setState({currentScroll: futurePosition, isBeginning: false, isEnd: false})
    }
  }

  render() {
    const sliderWrapperClass = classNames({
      'Slider--is-always-row': this.props.isAlwaysRow,
      'Slider--has-arrows-tablet': this.props.hasArrowsTablet,
      'Slider': true,
    })

    return (
      <div className={sliderWrapperClass}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {<ArrowButton onClick={() => this.scroll(-500)} disabled={this.state.isBeginning} isBig={this.props.bigArrows}/>}
        {React.cloneElement(this.props.children, { setRef: this.setListRef })}
        {<ArrowButton onClick={() => this.scroll(500)} disabled={this.state.isEnd} rotate isBig={this.props.bigArrows}/>}
      </div>
    );
  }
}

export const SliderMediaList = ({translator}) => {
  return(
    <Highlight
      title={translator('common:mybit_home_media')}
      isLight
      isTransparent
      isBig
      isFullWidth
      style={{ margin: 'auto' }}
      isContentANode
      content={
        <Slider
          isAlwaysRow={false}
          bigArrows={false}
          hasArrowsTablet={false}
        >
          <MediaList />
        </Slider>}
    />
  )
}

export const SliderIndustries = ({translator}) => (
  <Slider
    isAlwaysRow
    bigArrows
    hasArrowsTablet
  >
    <IndustriesMain
      translator={translator}
    />
  </Slider>
)

Slider.propTypes = {
  isAlwaysRow: PropTypes.bool.isRequired,
  bigArrows: PropTypes.bool.isRequired,
  hasArrowsTablet: PropTypes.bool.isRequired,
  listRef: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}
