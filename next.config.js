const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withSass(
  withImages({
    env: {
      ENV: process.env.NODE_ENV
    }
  })
);
