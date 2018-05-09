import React from 'react';
import PropTypes from 'prop-types';
import './subscribe.scss';

export const Subscribe = ({ label, buttonLabel, placeholder, onSubmit, sending, successMessage, errorMessage }) => {
  return (
    <form className='Subscription' onSubmit={onSubmit}>
      { errorMessage ? <p className='Subscription--isError'>{errorMessage}</p> : null }
      {successMessage ? <p className='Subscription--isSuccess'>{successMessage}</p> : null }
      {
        sending ? ( <div>Sending</div> ) : (
          <div className="Subscription__container">
            <label htmlFor="subscription">{label}</label>
            <input id="subscription" type='email' placeholder={placeholder} required />
            <button type="submit">{buttonLabel}</button>
          </div>
        )
      }
    </form>
  )
};

Subscribe.propTypes = {
  label: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  sending: PropTypes.bool.isRequired,
  successMessage: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired
};
