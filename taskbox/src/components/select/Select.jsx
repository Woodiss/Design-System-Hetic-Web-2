import React from 'react';
import PropTypes from 'prop-types';
import './select.css';
import { Icon } from '../Icon/Icon';
import errorIcon from '../assets/errorIcon.svg';
import { Text } from '../text/Text';

export const Select = ({ id, label, options, error, ...props }) => {
  return (
    
    <div className={`select-container`}>
      {label && <label htmlFor={id} className='text-regular-semi-bold'>{label}</label>}

{error && (
        <div className="input-message">
          <Icon src={errorIcon} alt={"Error Icon"} size={20}/>
          <Text tag={'p'} content={error} optionalClassName={'input-error'}/>
        </div>
        )}

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
