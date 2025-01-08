import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({ id, primary, type, placeholder, label, error, value, name, ...props }) => {

  return (
    <div className={`input-container ${primary ? 'input--primary' : ''}`}>
      {label && <label htmlFor={id}>{label}</label>}
      {error && <p className="input-error">{error}</p>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  /**
   * Unique identifier for the input field
   */
  id: PropTypes.string.isRequired,
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Type of the input (e.g., text, email, password, etc.)
   */
  type: PropTypes.string,
  /**
   * Placeholder text for the input
   */
  placeholder: PropTypes.string,
  /**
   * Label text for the input
   */
  label: PropTypes.string,
  /**
   * Error message to display below the input
   */
  error: PropTypes.string,
  /**
   * name attribute for the input
   */
  name: PropTypes.string,
  /**
   * Value for the input
   */
  value: PropTypes.string,  
};

Input.defaultProps = {
  primary: false,
  type: 'text',
  placeholder: '',
  label: '',
  error: '',
  name: "",
  value: ""
};
