import React from 'react';
import stylesheet from './container.scss';

export const Container = () => (
  <div className='Container'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
  </div>
)
