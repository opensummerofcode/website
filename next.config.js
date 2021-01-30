const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withSass(
  withImages({
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      });
      return config;
    },
    env: {
      ENV: process.env.NODE_ENV,
      HOST_URL: process.env.HOST_URL || `http://localhost:${process.env.PORT}`
    }
  })
);
