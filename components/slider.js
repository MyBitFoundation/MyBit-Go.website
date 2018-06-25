import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import scrollToWithAnimation from 'scrollto-with-animation';
import { Highlight } from '../components/highlights'
import stylesheet from './slider.scss'
import { ArrowButton } from './arrow-button';
import { MediaList } from './icon';
import { IndustriesMain } from './industries-main';

const autoSliderTime = 15000;

export class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentScroll: 0, isBeginning: true, isEnd: false}
    this.scroll = this.scroll.bind(this);
    this.scrollAutomatically = this.scrollAutomatically.bind(this);
    this.list = this.props.listRef;
    this.shouldScrollRight = true;

    this.setListRef = element => {
      this.list = element;
    };

    if(this.props.shouldScrollAutomatically){
      this.scrollAutomatically();
    }
  }

  scrollAutomatically(){
    const element = this.list;
    if(!element){
      setTimeout(() => this.scrollAutomatically(), 500);
      return;
    }
    const scrollWidth = element.scrollWidth;

    if(this.shouldScrollRight){
      scrollToWithAnimation(
        element,
        'scrollLeft',
        scrollWidth,
        autoSliderTime, 
        'linearTween',      
      );
    }
    else {
      scrollToWithAnimation(
        element,
        'scrollLeft',
        scrollWidth * -1, 
        autoSliderTime,
        'linearTween',
     );
    }

    this.shouldScrollRight = !this.shouldScrollRight;

    setTimeout(() => this.scrollAutomatically(), autoSliderTime * 0.65);
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
      scrollToWithAnimation(
        element,
        'scrollLeft',
        0,
        500, 
        'easeInOutQuad',      
      );      
      this.setState({currentScroll: 0, isBeginning: true})
    }
    // case where we are going to be scrolling to the end, which does it as well if there are only 100px left or less
    else if(futurePosition >= toScroll || offSetToMax <= 100){
      scrollToWithAnimation(
        element,
        'scrollLeft',
        toScroll,
        500, 
        'easeInOutQuad',      
      );
      this.setState({currentScroll: toScroll, isEnd: true})
    }
    // case where we have not reached an endge
    else{
      scrollToWithAnimation(
        element,
        'scrollLeft',
        futurePosition,
        500, 
        'easeInOutQuad',      
      );
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
        {!this.props.shouldScrollAutomatically && <ArrowButton onClick={() => this.scroll(-500)} disabled={this.state.isBeginning} isBig={this.props.bigArrows}/>}
        {React.cloneElement(this.props.children, { setRef: this.setListRef })}
        {!this.props.shouldScrollAutomatically && <ArrowButton onClick={() => this.scroll(500)} disabled={this.state.isEnd} rotate isBig={this.props.bigArrows}/>}
      </div>
    );
  }
}

export const SliderMediaList = () => {
  return(
    <Highlight
      title={'Media'}
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
          shouldScrollAutomatically
        >
          <MediaList />
        </Slider>}
    />
  )
}

export const SliderIndustries = () => (
  <Slider
    isAlwaysRow
    bigArrows
    hasArrowsTablet
  >
    <IndustriesMain />
  </Slider>
)

Slider.defaultProps = {
  shouldScrollAutomatically: false,
}

Slider.propTypes = {
  isAlwaysRow: PropTypes.bool.isRequired,
  bigArrows: PropTypes.bool.isRequired,
  hasArrowsTablet: PropTypes.bool.isRequired,
  listRef: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  shouldScrollAutomatically: PropTypes.bool
}