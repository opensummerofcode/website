import PropTypes from 'prop-types';
import TextItem from './TextLogoItem';

const TextLogo = ({ text }) => {
  const content = text.split(' ');
  return (
    <div className="logo logo--animated title-bar-title">
      {content.map((word) => (
        <TextItem key={word} word={word} />
      ))}
    </div>
  );
};

TextLogo.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextLogo;
