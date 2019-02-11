import React from 'react';
import TextItem from './TextLogoItem';

const TextLogo = ({ text }) => {
  let content = text.split(' ');
  return (
    <div className="logo logo--animated title-bar-title">
      {content.map((word, i) => (
        <TextItem word={word} key={i} />
      ))}
    </div>
  );
};

export default TextLogo;
