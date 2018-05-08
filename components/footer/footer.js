import React from 'react';
import PropTypes from 'prop-types';
import stylesheet from './footer.scss';


export const FooterList = ({ links }) => {
  return (
    <ul className="Footer--list">
      {
        links.map(link => (
          <li key={link.title}><a className="Footer--link" href={link.url}>{link.title}</a></li>
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
        url: '#'
      }, {
        title: 'Wallets',
        url: '#'
      }, {
        title: 'Mobile',
        url: '#'
    }]}
  />
  }, {
    title: 'Resources',
    isContentNode: true,
    content:
  <FooterList
    links={[{
      title: 'Github',
      url: '#'
    }, {
      title: 'Knowledgebase',
      url: '#'
    }, {
      title: 'How to buy',
      url: '#'
    }, {
      title: 'How to store',
      url: '#'
    }, {
      title: 'Explorer',
      url: '#'
    }, {
      title: 'Whitepaper',
      url: '#'
    }]}
  />
  }, {
    title: 'About',
    isContentNode: true,
    content:
  <FooterList
    links={[{
      title: 'Blog',
      url: '#'
    }, {
      title: 'Team',
      url: '#'
    }, {
      title: 'Careers',
      url: '#'
    }, {
      title: 'Events',
      url: '#'
    }, {
      title: 'Merchandice',
      url: '#'
    }, {
      title: 'Contact Us',
      url: '#'
    }, {
      title: 'Contribute',
      url: '#'
    }]}
  />
  }, {
    title: 'Subscribe',
    content: `<p>MyBit Foundation. Dammstrasse 16, 6300 Zug, Switzerland.</p><p>
      MyBit Stiftung (MyBit Foundation) is registered in Zug, Switzerland. Identification number CHE-177.186.963. Commercial register (pdf).</p>`
  }];
  return (<Footer sections={sections} copyright='Copyright &copy; MyBit 2017. All Rights Reserved.' />)
}

export const Footer = ({ copyright, sections }) => {
  return (
    <footer className="Footer">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {
        sections.map(section => (
          <div key={section.title} className="Footer__section">
            <h2 className="Footer--title">{section.title}</h2>
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
      <small className="Footer--copyright">{copyright}</small>
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
