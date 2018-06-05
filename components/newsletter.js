import React from 'react';
import PropTypes from 'prop-types';
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import classNames from 'classnames';
import stylesheet from './newsletter.scss';
import { ArrowButton } from './arrow-button';

class Newsletter extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: "", subscribing: false, success: false, failure: false}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onValidated({EMAIL: this.state.email})
  }

  render(){
    const message = {'Newsletter__message': true};
    const subscribing = classNames({
      'Newsletter__message-subscribing': this.props.status === "sending",
      'Newsletter__message-active': this.props.status === "sending",
      ...message,
    })

    const success = classNames({
      'Newsletter__message-active': this.props.status === "success",
      ...message,
    })

    const failure = classNames({
      'Newsletter__message-active': this.props.status === "error" && this.props.message && this.props.message.indexOf("is already subscribed to list") === -1,
      ...message,
    })

    const alreadySubscribed = classNames({
      'Newsletter__message-active': this.props.message && this.props.message.indexOf("is already subscribed to list") !== -1,
      ...message,
    })

    return(
      <div className="Newsletter">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="Newsletter__wrapper">
          <p className="Newsletter__text">To our email list</p>
          <form onSubmit={this.handleSubmit}>
            <div className="Newsletter__form">
              <input className="Newsletter__input" type="email" value={this.state.email} onChange={this.handleChange} placeholder={"Enter email address"} disabled={this.state.subscribing} required/>
              <ArrowButton rotate fullOpacity disabled={this.state.subscribing}/>
            </div>
          </form>
          <div className="Newsletter__status-messages-wrapper">
            <p className={subscribing}>Subscribing you</p>
            <p className={success}>Thanks for subscribing!</p>
            <p className={failure}>Please try again.</p>
            <p className={alreadySubscribed}>Already subscribed. Thanks!</p>
          </div>
        </div>
      </div>
    )
  }
}

export const NewsletterMailChimp = () => {
  const url = "http://mybit.us15.list-manage.com/subscribe/post?u=af48b1fdb5278fd9884338f23&id=dbcac41639";
  return(
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  )
}

Newsletter.propTypes = {
  message: PropTypes.string,
  onValidated: PropTypes.func.isRequired,
  status: PropTypes.string
}

Newsletter.defaultProps = {
  message: "",
  status: "",
}
