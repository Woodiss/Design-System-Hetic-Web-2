import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { Text } from '../text/Text';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, content, isDisabled, onClick, ...props}) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      { ...props }
    >
      {content}
      
    </button>
  );
};

Button.propTypes = {
  /**
   * How large should the button be?
   */
  type: PropTypes.oneOf(['submit', 'button']),
  /**
   * Button activity state
   */
  isDisabled: PropTypes.bool,
  /**
   * Button contents
   */
  content: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};

Button.defaultProps = {
  content: 'Button',
  type: 'button',
  onClick: undefined,
  isDisabled: false
};
