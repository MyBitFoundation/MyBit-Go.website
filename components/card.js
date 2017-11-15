import React from 'react';
import PropTypes from 'prop-types'
import stylesheet from './card.scss';

const card = ({ title, paragraph, image, isLeft = false }) => {
  const Image = image ? image.el : null
  const contentClassnames = isLeft ? 'col-md-7' : 'col-md-5'
  const graphicClassnames = isLeft ? 'col-md-5' : 'col-md-7'
  const content = (
    <div className={`${contentClassnames} col-sm-12 ${isLeft && 'Card__col--is-left'}`}>
      <h4 dangerouslySetInnerHTML={{ __html: title }} className='Card__title' />
      <p dangerouslySetInnerHTML={{ __html: paragraph }} className={`Card__paragraph Card__paragraph--is-${image.id}`} />
    </div>
  )
  const graphic = (
    <div className={`${graphicClassnames} col-sm-12 ${`Card__col--is-${image.id}`}`}>
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