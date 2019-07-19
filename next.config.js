const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const projects = require('./assets/data/projects.json');

module.exports = withSass(
  withImages({
    exportPathMap() {
      const pages = projects.reduce((acc, project) => {
        return Object.assign({}, acc, {
          [`/2019/${project.id}`]: {
            page: `/2019/[id]`,
            query: { id: project.id }
          },
          2019: {
            page: `/2019`
          }
        });
      }, {});
      return Object.assign({}, pages, {
        '/': { page: '/' }
      });
    }
  })
);
