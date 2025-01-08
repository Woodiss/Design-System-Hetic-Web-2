import PropTypes from 'prop-types';
import './text.css';

export const Text = ({ tag, content, styleTest, optionalClassName , ...props }) => {
    if (!tag) {
        return content
    }
    const Tag = tag; // Assure-toi que 'tag' est une chaîne valide représentant un élément HTML.
    return (
      <Tag className={`${styleTest} ${optionalClassName}`} {...props}>
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
  styleTest: PropTypes.string,    
  /**
   * Set optional Class for the tag element
   */
  optionalClassName: PropTypes.string,    

};

Text.defaultProps = {
  tag: null,
  content: "Content",
  styleTest: "text-3",
  optionalClassName: null
};
