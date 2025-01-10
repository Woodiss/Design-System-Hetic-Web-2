// From: https://stackoverflow.com/a/61472427/3906770
import React from "react";
import PropTypes from 'prop-types';
import "./icon.css";
import { useEffect, useState, useRef } from "react";

const useIconImport = (name) => {
  const importRef = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        importRef.current = (
          await import(`../assets/${name}.svg?react`)
        ).default;
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    importIcon();
  }, [name]);

  return {
    error,
    loading,
    Svg: importRef.current,
  };
};


export const Icon = ({ name, size, ariaLabel, title, role, className, ...props }) => {
  const { error, Svg } = useIconImport(name);

  if (error) {
    console.error(`An error occurred while loading icon "${name}":`, error);
    return null;
  }

  if (!Svg) {
    return null;
  }

  return <Svg width={size} height={size} aria-label={ariaLabel} className={className} {...props} />;
};

Icon.propTypes = {
  /**
   * Name of the icon that will search in the assets
   */
  name: PropTypes.string.isRequired,
  /**
   * Size of the svg element
   */
  size: PropTypes.string,
  /**
   * Define the aria-label attribute for the svg element
   */
  ariaLabel: PropTypes.string,
  /**
   * Define the title attribute for the svg element
   */
  title: PropTypes.string,
  /**
   * Define the role attribute for the svg element
   */
  role: PropTypes.string,
  /**
   * Define the className attribute for the svg element
   */
  className: PropTypes.string,
};

Icon.defaultProps = {
  size: '20px',
  role: 'img',
};


