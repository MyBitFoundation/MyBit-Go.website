import React from 'react';
import PropTypes from 'prop-types';
import { testAlphaUrl } from '../constants';
import stylesheet from './footer.scss';

export const FooterList = ({ links }) => {
  return (
    <ul className="Footer__list">
      {
        links.map(link => (
          <li key={link.title}>
            {
              link.url ?
              (
                <a
                  className={`Footer__link ${link.inactive && 'Footer__link--is-inactive'}`}
                  href={link.url}
                  target={link.newTab ? "_blank" : ""}
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              ) :
              (
                <span
                  className={`Footer__link ${link.inactive && 'Footer__link--is-inactive'}`}
                >
                  {link.title}
                </span>
              )
             }
          </li>
        ))
      }
    </ul>)
};

export const MyBitFooter = () => {
  const sections = [
  {
    title: 'Products',
    isContentNode: true,
    content:
  <FooterList
    links={[{
        title: 'DApp',
        url: 'https://github.com/MyBitFoundation/MyBitDapp',
        newTab: true,
      }, {
        title: 'MYDAX (soon)',
        inactive: true,
        newTab: false,
      }, {
        title: 'Wallets (soon)',
        inactive: true,
        newTab: false,
      }, {
        title: 'Mobile (soon)',
        inactive: true,
        newTab: false,
    }]}
  />
  }, {
    title: 'Site Map',
    isContentNode: true,
    content:
  <FooterList
    links={[{
      title: 'Products',
      url: '/products',
        newTab: false,
    }, {
      title: 'Token',
      url: '/access-layer',
        newTab: false,
    }, {
      title: 'About',
      url: '/about-us',
      newTab: false,
    }, {
      title: 'Community',
      url: '/community',
      newTab: false,
    }, {
      title: 'Asset Managers',
      url: "/asset-manager",
      newTab: false,
    }, {
      title: 'Investor',
      url: '/investor',
      newTab: false,
    }, {
      title: 'Industries',
      url: '/investor#industries',
      newTab: false,
    }, {
      title: 'Events',
      url: '/community#events',
      newTab: false,
    }, {
      title: 'How it works',
      url: '/how-it-works',
      newTab: false,
    }, {
      title: 'Test Alpha',
      url: testAlphaUrl,
      newTab: true,
    }]}
  />
  }, {
    title: 'Social Media',
    isContentNode: true,
    content:
  <FooterList
    links={[{
      title: 'Twitter',
      url: 'https://twitter.com/MyBit_DApp',
        newTab: true,
    }, {
      title: 'Youtube',
      url: 'https://www.youtube.com/channel/UCtLn7Vi-3VbsY5F9uF1RJYg',
        newTab: true,
    }, {
      title: 'Reddit',
      url: 'https://www.reddit.com/user/MyBit_DApp/',
      newTab: true,
    }, {
      title: 'Discord',
      url: 'https://discord.gg/pfNkVkJ',
      newTab: true,
    }, {
      title: 'Facebook',
      url: "https://www.facebook.com/MyBitDApp/",
      newTab: true,
    }, {
      title: 'Telegram',
      url: 'https://t.me/mybitio',
      newTab: true,
    }, {
      title: 'Medium',
      url: 'https://medium.com/mybit-dapp',
      newTab: true,
    }, {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/company/mybit/',
      newTab: true,
    }]}
  />
  }, {
    title: 'Resources',
    isContentNode: true,
    content:
  <FooterList
    links={[{
      title: 'Github',
      url: 'https://github.com/MyBitFoundation',
      newTab: true,
    }, {
      title: 'How to buy',
      url: 'https://files.mybit.io/files/MyBit_How_to_Buy_Guide.pdf',
      newTab: true,
    }, {
      title: 'How to store',
      url: 'https://files.mybit.io/files/MyBit_How_to_Store_Guide.pdf',
      newTab: true,
    }, {
      title: 'Explorer',
      url: 'https://ethplorer.io/address/0x5d60d8d7eF6d37E16EBABc324de3bE57f135e0BC',
      newTab: true,
    }, {
      title: 'Press Kit',
      url: "https://files.mybit.io/files/MyBit_Press_Kit.zip",
      newTab: true,
    }, {
      title: 'Whitepaper',
      url: 'https://files.mybit.io/files/MyBit_Whitepaper_v3.0.0.pdf',
      newTab: true,
    }, {
      title: 'Legal Analysis (MYB)',
      url: 'https://files.mybit.io/files/MYB_Legal_Analysis.pdf',
      newTab: true,
    }, {
      title: 'Token Swap',
      url: 'https://medium.com/mybit-dapp/before-you-begin-take-a-deep-breath-and-relax-3820e9c8ca03',
      newTab: true,
    }, {
      title: 'Token Information',
      url: '/static/files/MYB_Token_Information.pdf',
      newTab: true,
    }]}
  />
  }, {
    title: 'About',
    isContentNode: true,
    content:
  <FooterList
    links={[{
      title: 'Blog',
      url: 'https://medium.com/mybit-dapp',
      newTab: true,
    }, {
      title: 'Company',
      url: 'https://www.linkedin.com/company/mybit/',
      newTab: true,
    }, {
      title: 'Merchandise',
      url: 'https://www.redbubble.com/people/ethereum/works/31674781-mybit-t-shirt?asc=u&ref=recent-owner',
      newTab: true,
    }, {
      title: 'Contact Us',
      url: 'mailto:info@mybit.io',
      newTab: false,
    }, {
      title: 'Report bug',
      url: 'https://goo.gl/17tQTi',
      newTab: true,
    }, {
      title: 'Subscribe to our newsletter',
      url: 'https://mybit.us15.list-manage.com/subscribe?u=af48b1fdb5278fd9884338f23&id=0f78f78616',
      newTab: true,
    }]}
  />
  }, {
    title: '',
    content: `
    <img src='/static/svgs/icons/mybit-full-white.svg' width='100px' height='100px'/>
    <p>MyBit Foundation. Dammstrasse 16, 6300 Zug, Switzerland.</p><p>
      MyBit Stiftung (MyBit Foundation) is registered in Zug, Switzerland.</p><p>Identification number CHE-177.186.963 <a class="Footer__link" href="./static/files/MyBit_CHE-177.186.963.pdf" target="_blank" rel="noopener noreferrer">(pdf)</a>, Commercial register <a class="Footer__link" href="https://www.zefix.ch/en/search/entity/list/firm/1313862?name=mybit&amp;searchType=exact" target="_blank" rel="noopener noreferrer">(web).</a></p><p><a class="Footer__link Footer__link--is-underlined" href="https://github.com/MyBitFoundation/MyBit.io/blob/develop/TOC.md" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></p>`
  }];
  return (<Footer sections={sections} copyright='Copyright &copy; MyBit 2018. All Rights Reserved.' />)
}

export const Footer = ({ copyright, sections }) => {
  return (
    <footer className="Footer">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {
        sections.map(section => (
          <div key={section.title} className={section.className ? "Footer__section " + section.className : "Footer__section"}>
            <h2 className="Footer__title">{section.title}</h2>
            {
              section.isContentNode ?
              section.content :
              <div
                dangerouslySetInnerHTML={{
                  __html: section.content
                }}
              />
            }
          </div>)
        )
      }
      <small className="Footer__copyright">{copyright}</small>
    </footer>)
};

FooterList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  }))
};

FooterList.defaultProps = [];

Footer.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  })),
  copyright: PropTypes.string
}

Footer.defaultProps = [];
