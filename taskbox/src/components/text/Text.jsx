import PropTypes from 'prop-types';
import './text.css';

export const Text = ({ tag, content, styleText, optionalClassName , ...props }) => {
    if (!tag) {
        return content
    }
    const Tag = tag; // Assure-toi que 'tag' est une chaîne valide représentant un élément HTML.
    return (
      <Tag className={`${styleText} ${optionalClassName}`} {...props}>
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
  styleText: PropTypes.string,    
  /**
   * Set optional Class for the tag element
   */
  optionalClassName: PropTypes.string,    

};

Text.defaultProps = {
  tag: null,
  content: "Content",
  styleText: "text-3",
  optionalClassName: null
};
