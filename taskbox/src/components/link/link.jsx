import React from 'react';
import PropTypes from 'prop-types';
import './link.css';

/**
 * Primary UI component for user interaction
 */
export const Link = ({content, link,}) => {
  return (
    <a href={link}>
      {content}
    </a>
  );
};

Link.propTypes = {
  /**
   * link contents
   */
  content: PropTypes.string.isRequired,
  /**
   * link url
   */
  link: PropTypes.string.isRequired,

};

Link.defaultProps = {
  content:"link",
  link:"index.html"
};
