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

const icons = [{
  name: 'telegram',
  url: 'https://t.me/mybitio/',
}, {
  name: 'medium',
  url: 'https://medium.com/mybit-dapp',
}, {
  name: 'facebook',
  url: 'https://www.facebook.com/MyBitDApp/',
}, {
  name: 'reddit',
  url: 'https://www.reddit.com/user/MyBit_DApp/',
}, {
  name: 'twitter',
  url: 'https://twitter.com/MyBit_DApp/',
}]


export const MyBitFooter = ({translator, currentLanguage}) => {
  const sections = [
  {
    title: '',
    isContentNode: true,
    content: (
      <div className="Footer__icons">
        {icons.map(icon => (
          <a href={icon.url} target="_blank" rel="noopener noreferrer">
            <div className={`Footer__icons-is-${icon.name}`} />
          </a>
        ))}
      </div>
    )
  }, {
    title: translator('common:mybit_footer_site_map'),
    isContentNode: true,
    content:
  <FooterList
    links={[{
      title: translator('common:mybit_footer_how_it_works'),
      url: currentLanguage !== "en-US" && currentLanguage !== "en" ? `/how-it-works?lng=${currentLanguage}` : '/how-it-works',
      newTab: false,
    }, {
      title: translator('common:mybit_home_diamond_token_title'),
      url: currentLanguage !== "en-US" && currentLanguage !== "en" ? `/access-layer?lng=${currentLanguage}` : '/access-layer',
        newTab: false,
    }, {
      title: translator('common:mybit_footer_about'),
      url: currentLanguage !== "en-US" && currentLanguage !== "en" ? `/about?lng=${currentLanguage}` : '/about',
      newTab: false,
    }]}
  />
  }, {
    title: translator('common:mybit_footer_about'),
    isContentNode: true,
    content:
  <FooterList
    links={[{
      title: translator('common:mybit_footer_company'),
      url: 'https://mybit.io/about',
        newTab: true,
    }, {
      title: translator('common:mybit_footer_blog'),
      url: 'https://medium.com/mybit-dapp',
        newTab: true,
    }]}
  />
  }, {
    title: translator('common:mybit_footer_get_involved'),
    isContentNode: true,
    content:
  <FooterList
    links={[{
      title: translator('common:mybit_footer_test_alpha'),
      url: testAlphaUrl,
      newTab: true,
    }, {
      title: translator('common:mybit_footer_contribute'),
      url: 'https://ddf.mybit.io/',
      newTab: true,
    }]}
  />
  }, {
    title: translator('common:mybit_footer_social'),
    isContentNode: true,
    content:
  <FooterList
    links={[{
      title: 'Telegram',
      url: 'https://t.me/mybitio/',
      newTab: true,
    }, {
      title: 'Medium',
      url: 'https://medium.com/mybit-dapp',
      newTab: true,
    }, {
      title: 'Reddit',
      url: 'https://www.reddit.com/user/MyBit_DApp/',
      newTab: true,
    }, {
      title: 'Facebook',
      url: 'https://www.facebook.com/MyBitDApp/',
      newTab: true,
    }, {
      title: 'Twitter',
      url: 'https://twitter.com/MyBit_DApp/',
      newTab: true,
    }]}
  />
  }, {
    title: '',
    content: `
    <img src='/static/svgs/icons/mybit-full-white.svg' width='100px' height='100px'/>
    <p>MyBit Foundation. Dammstrasse 16,</p>
    <p>6300 Zug, Switzerland.</p>
    <p>Registration no. CHE-177.186.963.<p><a class="Footer__link Footer__link--is-underlined" href="https://github.com/MyBitFoundation/MyBit.io/blob/develop/TOC.md" target="_blank" rel="noopener noreferrer">${translator('common:mybit_footer_terms_and_conditions')}</a></p>`
  }];
  return (<Footer sections={sections} copyright='Copyright &copy; MyBit Foundation 2018. All Rights Reserved.' />)
}

export const Footer = ({ copyright, sections }) => {
  return (
    <footer className="Footer">
      <div className="Footer__wrapper">
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
      </div>
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
