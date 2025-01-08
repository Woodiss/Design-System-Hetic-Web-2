import PropTypes from 'prop-types';
import './input.css';
import { Text } from '../text/Text';

export const Input = ({ id, type, placeholder, label, error, defaultValue, name, ...props }) => {

  return (
    <div className={`input-container`}>
      {label && <label className='text-regular-semi-bold' htmlFor={id}>{label}</label>}
      {/* {error && <p className="input-error">{error}</p>} */}
      {error && <Text tag={'p'} content={`Ceci est un paragraphe`} optionalClassName={"input-error"}/>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={defaultValue}
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
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  label: '',
  error: '',
  name: "",
  defaultValue: ""
};
