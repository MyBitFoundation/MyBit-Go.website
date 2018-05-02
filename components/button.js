import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({ disabled, label, onClick }) => (
  <button disabled={disabled} onClick={onClick} className="Button">
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {}
};
