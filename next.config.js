const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const projects = require('./public/editions/2019/projects.json');

module.exports = withSass(
  withImages({
    exportPathMap() {
      const projectPages = projects.reduce((pages, project) => {
        return {
          ...pages,
          [`/editions/2019/${project.id}`]: {
            page: `/editions/[year]/[project]`
          }
        };
      }, {});
      return {
        '/': { page: '/' },
        '/editions/2019': { page: '/editions/[year]' },
        '/coaches': { page: '/coaches' },
        '/companies': { page: '/companies' },
        '/practical': { page: '/practical' },
        '/students': { page: '/students' },
        ...projectPages
      };
    }
  })
);
