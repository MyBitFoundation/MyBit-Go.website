import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
import mybit from '@images/logo.svg'

import telegram from '@images/telegram-1.svg'
import reddit from '@images/reddit.svg'
import medium from '@images/medium.svg'
import twitter from '@images/twitter.svg'
import facebook from '@images/facebook.svg'
export default class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="ph2 pt4 flex-ns flex-row-ns flex-wrap-m justify-between-ns">
          <div className="pv3 pv0-ns order-1-l">
            <STitle>GO</STitle>
            <SButton
              target="_blank"
              rel="noreferrer"
              href="https://app.mybit.io/"
            >
              LAUNCH MYBIT GO
            </SButton>
            <div className="pt5" />
            <STitle>Follow us</STitle>
            <a
              target="_blank"
              rel="noreferrer"
              className="pv1 pr1"
              href="https://t.me/mybitio"
            >
              <img src={telegram} alt="telegram" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="pv1 pr1"
              href="https://www.reddit.com/user/MyBit_DApp/"
            >
              <img src={reddit} alt="reddit" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="pv1 pr1"
              href="https://medium.com/mybit-dapp"
            >
              <img src={medium} alt="medium" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="pv1 pr1"
              href="https://twitter.com/MyBit_DApp"
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="pv1 pr1"
              href="https://www.facebook.com/MyBitDApp/"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </div>
          <SAddress>
            <img className="pb1" src={mybit} alt="mybit logo" />
            <div className="dib-ns">
              MyBit Foundation. Dammstrasse 16, 6300 Zug, Switzerland.
              Registration no. CHE-177.186.963
              <div className="pb2" />
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MyBitFoundation/MyBit.io/blob/develop/TOC.md"
              >
                Terms & Conditions
              </SAnchor>
              <div className="pb2" />
            </div>
          </SAddress>
          <div className="flex-ns flex-row-ns justify-between-ns w-100 w-50-l pt3-m pt0-l order-0-l">
            <div className="pb3 pb0-ns">
              <STitle>MyBit Go</STitle>
              <SLink to="/about">About</SLink>
              <SLink to="/howitworks">How it Works</SLink>
              <SLink to="/dao">DAO</SLink>
              <SLink to="/participate">Participate</SLink>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://learn.mybit.io/"
              >
                Knowledge Base
              </SAnchor>
              <SAnchor href="mailto:info@mybit.io">Contact</SAnchor>
            </div>
            <div className="pb3 pb0-ns">
              <STitle>contribute</STitle>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://app.mybit.io/"
              >
                {' '}
                MyBit Go
              </SAnchor>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://mydax.io/"
              >
                {' '}
                MYDAX{' '}
              </SAnchor>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://task.market/"
              >
                {' '}
                Task Market{' '}
              </SAnchor>
              <SLink to="/tools">Other dApps</SLink>
            </div>
            <div className="pb2 pb0-ns">
              <STitle>resources</STitle>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://td.mybit.io"
              >
                Token Distribution
              </SAnchor>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://medium.com/mybit-dapp"
              >
                Blog
              </SAnchor>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://developer.mybit.io/portal/"
              >
                SDK
              </SAnchor>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MyBitFoundation"
              >
                Github
              </SAnchor>
              <SAnchor
                target="_blank"
                rel="noreferrer"
                href="https://whitepaper.mybit.io/"
              >
                whitepaper
              </SAnchor>
            </div>
          </div>
        </div>

        <SCopyright>Copyright © MyBit 2019. All Rights Reserved.</SCopyright>
      </>
    )
  }
}

const SButton = styled.a.attrs({
  className: 'link no_underline tc center b pa1 bhover'
})`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-family: Gilroy;
  line-height: 14px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #1890ff;
`

const STitle = styled.div.attrs({ className: 'black b pb2' })`
  font-family: Gilroy;
  line-height: 12px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #111111;
`
const SAnchor = styled.a.attrs({ className: 'pb1 db ttc no-underline underline-hover' })`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  
  color: #6c6c6c;
7`

const SLink = styled(Link).attrs({ className: 'pb1 db ttc no-underline underline-hover' })`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;

  color: #6c6c6c;
`
const SAddress = styled.div.attrs({
  className: 'mw5-ns ttc no-underline tr-ns  order-2-l'
})`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  color: #6c6c6c;
`
const SCopyright = styled.div.attrs({
  className: 'pb1 db ttc pt2 no-underline tc center'
})`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 16px;
  max-width: 50%;
  color: #6c6c6c;
`
