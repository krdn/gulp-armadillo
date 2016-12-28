process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';
const config = require('config');
const defaultConfig = require('./config/default');

const sass = require('./tasks/sass');
const scripts = require('./tasks/scripts');

const watch = require('./tasks/watch');
const server = require('./tasks/server');
const pages = require('./tasks/pages');
const help = require('gulp-help');

module.exports = (glp, options) => {
  const gulp = help(glp);

  config.util.extendDeep(defaultConfig, options);
  config.util.setModuleDefaults('armadillo', defaultConfig);

  server(gulp);

  sass(gulp);
  scripts(gulp);
  pages(gulp);

  watch(gulp);
};
