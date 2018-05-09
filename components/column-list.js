import React from 'react';
import PropTypes from 'prop-types';
import './column-list.scss';

export const ColumnList = ({ links }) => {
  return (
    <ul className="Column-list">
      {
        links.map(link => (
          <li key={link.title}>
            {
              link.url ?
                (
                  <a
                    className={`Column-list__link ${link.inactive && 'Column-list__link--is-inactive'}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.title}
                  </a>
                ) :
                (
                  <span
                    className={`Column-list__link ${link.inactive && 'Column-list__link--is-inactive'}`}
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

ColumnList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  }))
};

ColumnList.defaultProps = [];
