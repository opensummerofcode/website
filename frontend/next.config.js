const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const { withGraphQLConfig } = require('next-graphql-react/server');

const projects = require('./assets/data/projects.json');

module.exports = withGraphQLConfig(
  withSass(
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
          '/2019': { page: '/2019' },
          '/coaches': { page: '/coaches' },
          '/companies': { page: '/companies' },
          '/practical': { page: '/practical' },
          '/students': { page: '/students' },
          ...projectPages
        };
      }
    })
  )
);
