import React from 'react'
import stylesheet from './swap-popup.scss'
import buttonStyleSheet from './button.scss'
import { Media } from './media'
import { Button } from './button'

const cookieName = "mybit_swap_popup_never";

export class SwapPopup extends React.Component {

  constructor(props){
    super(props);
    this.state = {popup: false}
    this.handleClickDontShow = this.handleClickDontShow.bind(this);
  }

  componentDidMount(){
    if(document.cookie.indexOf(cookieName) === -1){
      this.setState({popup: true})
    }
  }

  handleClickDontShow(){
    document.cookie = `${cookieName}=true; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    this.setState({popup: false})
  }

  render(){
    if(this.state.popup){
      const content = (
        <div className="SwapPopup__content">
          <style dangerouslySetInnerHTML={{ __html: buttonStyleSheet }} />
          <p>The MyBit Token Swap is now live! The Token Swap will be exchanging current MyBit Tokens with a new, updated ERC20 token, also with the symbol MYB. For more information on the Token Swap please read our blog post by clicking ‘See Why’. To view a comprehensive guide and get started please click ‘Swap Now’.</p>
          <div className="SwapPopup__buttons">
            <a className="SwapPopup__button" href="https://medium.com/mybit-dapp/before-you-begin-take-a-deep-breath-and-relax-3820e9c8ca03" target="_blank" rel="noopener noreferrer"><Button isLight label="Swap Now"/></a>
            <a className="SwapPopup__button" href="https://medium.com/mybit-dapp/as-we-are-on-the-brink-of-entering-mybits-new-era-we-have-a-very-important-announcement-to-make-a4cda1cd6956" target="_blank" rel="noopener noreferrer"><Button isLight isSecondary label="See Why" /></a>
            <a className="SwapPopup__button" href="#" onClick={() => this.handleClickDontShow()}>
              <Button className="SwapPopup__button" isLight isSecondary label="Don't show again" />
            </a>
          </div>
        </div>
      )

      return (
        <div className={"SwapPopup"}>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <a className="SwapPopup-btn-close" onClick={() => this.setState({popup: false})}>&times;</a>
          <Media media={[{title: "Don’t forget to swap your MYB tokens", content}]} />
        </div>
      )
    }
    return null;
  }
}
