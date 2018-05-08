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

export const Footer = ({ copyright, sections }) => {
  return (
    <footer className="Footer">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {
        sections.map(section => (
          <div key={section.title} className="Footer__section">
            <h2 className="Footer--title">{section.title}</h2>
            {section.content}
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
