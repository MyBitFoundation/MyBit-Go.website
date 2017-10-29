import React from 'react';
import PropTypes from 'prop-types'
import stylesheet from './card.scss';

const card = ({ title, paragraph }) => (
  <div className='Card row'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='col-md-4'>
      <h4 dangerouslySetInnerHTML={{ __html: title }} className='Card__title' />
      <p className='Card__paragraph'>{paragraph}</p>
    </div>
  </div>
)

card.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
}

export default card;