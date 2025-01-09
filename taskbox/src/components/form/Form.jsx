import PropTypes from 'prop-types';
import './form.css';
import { Text } from '../text/Text';

export const Form = ({ title, subtitle, children, ...props }) => {
    return (
      <div className="container-form">
        <div className="header-form">
            {title && <Text tag={"h1"} content={title} styleText={"title-3"} />}
            {subtitle && <Text tag={"p"} content={subtitle} styleText={"text-3"} />}
        </div>
        <form {...props}>
          {children}
        </form>
      </div>
    );
  };
  
  Form.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node,
  };
  
  Form.defaultProps = {
    title: "Form Title",
    subtitle: "Form subtitle",
  };
  
