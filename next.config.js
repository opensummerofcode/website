const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withSass(
  withImages({
    env: {
      ENV: process.env.NODE_ENV,
      HOST_URL: process.env.HOST_URL || `http://localhost:${process.env.PORT}`
    }
  })
);
