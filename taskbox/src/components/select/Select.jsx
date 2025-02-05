import React from 'react';
import PropTypes from 'prop-types';
import './select.css';
import { Icon } from '../Icon/Icon';
import errorIcon from '../assets/errorIcon.svg';
import { Text } from '../text/Text';

export const Select = ({ id, label, options, error, ...props }) => {
  return (
    
    <div className={`select-container ${error ? 'select-error' : ''}`} 
    >
      {label && <label htmlFor={id} className='text-regular-semi-bold'>{label}</label>}

{error && (
        <div className="input-message">
          <Icon size={'20px'} name={"errorIcon"} color={"var(--accent-danger)"} ariaLabel={"Error Icon"} title={"Error Icon"} role={"img"}/>
          <Text tag={'p'} content={error} optionalClassName={'input-error'}/>
        </div>
        )}

      <div className='select-relative'>
        <div className={`select-wrapper ${error ? 'select-error' : ''}`}>
          <select id={id} className={`select`} {...props}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          </div>
      </div>

    </div>
  );
};

Select.propTypes = {
  /**
   * Unique identifier for the select field
   */
  id: PropTypes.string.isRequired,
  /**
   * Label text for the select field
   */
  label: PropTypes.string,
  /**
   * Array of options to display in the select dropdown
   */
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Error message to display below the select field
   */
  error: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  error: '',
};
