import PropTypes from 'prop-types';
import './text.css';

export const Text = ({ tag, content, fontOptions, optionalClassName , ...props }) => {
    if (!tag) {
        return content
    }
    const Tag = tag; // Assure-toi que 'tag' est une chaîne valide représentant un élément HTML.
    return (
      <Tag className={`${fontOptions} ${optionalClassName}`} {...props}>
        {content}
      </Tag>
    );
};

Text.propTypes = {
  /**
   * Type of the tag element
   */
  tag: PropTypes.string,    
  /**
   * Content of the text
   */
  content: PropTypes.string,    
  /**
   * Font options of the text
   */
  fontOptions: PropTypes.string,    
  /**
   * Set optional Class for the tag element
   */
  optionalClassName: PropTypes.string,    

};

Text.defaultProps = {
  tag: null,
  content: "Content",
  fontOptions: "text-regular",
  optionalClassName: null
};
