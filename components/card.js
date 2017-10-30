import React from 'react';
import PropTypes from 'prop-types'
import stylesheet from './card.scss';

const card = ({ title, paragraph, image }) => {
  const Image = image ? image.el : null
  return (
    <div className='Card row'>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className='col-md-5'>
        <h4 dangerouslySetInnerHTML={{ __html: title }} className='Card__title' />
        <p className='Card__paragraph'>{paragraph}</p>
      </div>
      <div className='col-md-7'>
        { 
          Image && 
          <div className={`Card__image Card__image--is-${image.id}`}>
            <Image /> 
            <style jsx>{`
              .Card__image {
                margin-left: auto;
              }
              .Card__image--is-machine-era {
                width: 496.7px;
                height: 322.2px;
              }
              .Card__image--is-future-of-investing {
                width: 462.7px;
                height: 298.4px;
              }
              .Card__image--is-mybit-token {
                width: 460.5px;
                height: 300.7px;
              }
            `}
            </style>
          </div>
        }
      </div>
    </div>
  )
}

card.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
}

export default card;