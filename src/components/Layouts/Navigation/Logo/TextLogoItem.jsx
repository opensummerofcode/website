import React from 'react';
import PropTypes from 'prop-types';

const TextItem = ({ word }) => {
  return <span className="c-yellow">{word} </span>;
};

TextItem.propTypes = {
  word: PropTypes.string.isRequired
};

export default TextItem;
