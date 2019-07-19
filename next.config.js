const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const projects = require('./assets/data/projects.json');

module.exports = withSass(
  withImages({
    exportPathMap() {
      const projectPages = projects.reduce((pages, project) => {
        return {
          ...pages,
          [`/2019/${project.id}`]: {
            page: `/2019/[project]`,
            query: { project: project.id }
          }
        };
      }, {});
      return {
        '/': { page: '/' },
        ...projectPages
      };
    }
  })
);
