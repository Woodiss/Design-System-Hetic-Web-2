import { useState } from 'react';
import PropTypes from 'prop-types';
import './input.css';
import { Text } from '../text/Text';
import { Icon } from '../Icon/Icon';
import eyeOpenIcon from '../assets/eye-password-open.svg'
import eyeCloseIcon from '../assets/eye-password-close.svg'

export const Input = ({ id, type, placeholder, label, error, defaultValue, name, isRequired, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;
  return (
    <div className={`input-container`}>
      {label && <label className='text-regular-semi-bold' htmlFor={id}>{label}</label>}
      {/* {error && <p className="input-error">{error}</p>} */}
      {error && (
        <div className="input-message">
          <Icon size={'20px'} name={"errorIcon"} color={"var(--accent-danger)"} ariaLabel={"Error Icon"} title={"Error Icon"} role={"img"}/>
          {/* <Icon src={errorIcon} alt={"Error Icon"} size={20}/> */}
          <Text tag={'p'} content={error} optionalClassName={'input-error'}/>
        </div>
        )}
      <div className={`input ${error ? 'input-error' : ''}`} >
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          {...(defaultValue && { value: defaultValue })}
          name={name}
          required={isRequired}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            <img 
              src={isPasswordVisible ? eyeCloseIcon : eyeOpenIcon} 
              alt={isPasswordVisible ? 'Hide password' : 'Show password'} 
            />
          </button>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  /**
   * Unique identifier for the input field
   */
  id: PropTypes.string.isRequired,
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
  defaultValue: PropTypes.string,
  /**
   * Value for the input
   */
  isRequired: PropTypes.bool,
  
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  label: '',
  error: '',
  name: "",
  defaultValue: "",
  isRequired: false
};
