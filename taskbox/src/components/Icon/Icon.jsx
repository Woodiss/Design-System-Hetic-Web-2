import React from "react";
import PropTypes from 'prop-types';
import "./icon.css";

const Icon = ({ src, alt, size, className }) => {
  return (
    <img
      className={`img-icon ${className}`}
      src={src}
      alt={alt}
      style={{ width: size, height: size }}
    />
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired, 
  alt: PropTypes.string.isRequired, 
  size: PropTypes.string,           
  className: PropTypes.string,      
};

Icon.defaultProps = {
  size: '100px', // Taille par défaut
  className: '',
};

export default Icon;
