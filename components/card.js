import React from 'react';
import PropTypes from 'prop-types'
import stylesheet from './card.scss';

const card = ({ title, paragraph, image, isLeft = false }) => {
  const Image = image ? image.el : null
  const content = (
    <div className='col-md-5 col-sm-12'>
      <h4 dangerouslySetInnerHTML={{ __html: title }} className='Card__title' />
      <p className='Card__paragraph'>{paragraph}</p>
    </div>
  )
  const graphic = (
    <div className='col-md-7 col-sm-12'>
      { 
        Image && 
        <div className={`Card__image Card__image--is-${image.id}`}>
          <Image /> 
        </div>
      }
    </div>
  )
  const leftContent = isLeft ? graphic : content;
  const rightContent = isLeft ? content : graphic;
  return (
    <div className='Card row'>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      { leftContent }
      { rightContent }
    </div>
  )
}

card.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  isLeft: PropTypes.bool
}

card.defaultProps = {
  isLeft: false
}

export default card;