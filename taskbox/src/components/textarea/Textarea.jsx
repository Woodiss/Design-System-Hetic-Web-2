import { useState } from 'react';
import PropTypes from 'prop-types';
import './textarea.css';
import { Text } from '../text/Text';
import { Icon } from '../Icon/Icon';
import errorIcon from '../assets/errorIcon.svg'

export const Textarea = ({ id, placeholder, label, error, defaultValue, name, isRequired, ...props }) => {
  return (
    <div className={`textarea-container`}>
      {label && <label className='text-regular-semi-bold' htmlFor={id}>{label}</label>}
      {error && (
        <div className="textarea-message" style={{color: "blue"}}>
          <Icon src={errorIcon} alt={"Error Icon"} size={20}/>
          <Text tag={'p'} content={error} optionalClassName={'textarea-error'}/>
        </div>
        )}
      <div className="textarea-relative">
        <div>
          <textarea className={`textarea ${error ? 'textarea-error-outline' : ''}`}
            id={id}
            placeholder={placeholder}
            {...(defaultValue && { value: defaultValue })}
            name={name}
            required={isRequired}
            {...props}
          >
          </textarea>
        </div>
      </div>
    </div>
  );
};

Textarea.propTypes = {
  /**
   * Unique identifier for the Textarea field
   */
  id: PropTypes.string.isRequired,
  /**
   * Placeholder text for the Textarea
   */
  placeholder: PropTypes.string,
  /**
   * Label text for the Textarea
   */
  label: PropTypes.string,
  /**
   * Error message to display below the Textarea
   */
  error: PropTypes.string,
  /**
   * name attribute for the Textarea
   */
  name: PropTypes.string,
  /**
   * Value for the Textarea
   */
  defaultValue: PropTypes.string,
  /**
   * Value for the Textarea
   */
  isRequired: PropTypes.bool,
  
};

Textarea.defaultProps = {
  placeholder: '',
  label: '',
  error: '',
  name: "",
  defaultValue: "",
  isRequired: false
};
