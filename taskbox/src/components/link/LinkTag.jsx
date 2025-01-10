import React from 'react';
import PropTypes from 'prop-types';
import './link.css';
import { NavLink } from 'react-router-dom';

/**
 * Primary UI component for user interaction
 */
export const LinkTag = ({content, link,}) => {
  return (
    <NavLink to={link}>
      {content}
    </NavLink>
  );
};

LinkTag.propTypes = {
  /**
   * Text of the link
   */
  content: PropTypes.string.isRequired,
  /**
   * url of the link
   */
  link: PropTypes.string.isRequired,

};

LinkTag.defaultProps = {
  content:"link",
  link:"index.html"
};