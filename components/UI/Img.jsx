import React from 'react';

const Img = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} />;
};

export default Img;
