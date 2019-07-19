const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const projects = require('./assets/data/projects.json');

module.exports = withSass(
  withImages({
    exportPathMap() {
      const pages = projects.reduce((allPages, project) => {
        return {
          ...allPages,
          [`/2019/${project.id}`]: {
            page: `/2019/[id]`,
            query: { id: project.id }
          }
        };
      }, {});
      return {
        ...pages,
        '/': { page: '/' }
      };
    }
  })
);
