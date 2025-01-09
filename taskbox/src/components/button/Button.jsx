import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, content }) => {
  return (
    <button className='btn'
      type={type}
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
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
};
