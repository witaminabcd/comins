/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const config = require('./config');
const webpackConfig = require('../webpack.config.js');
const gulpif = require('gulp-if');
const isDev = process.env.NODE_ENV === 'development';

const javascript = () => {
  return src(config.scripts.input)
    .pipe(plumber(config.notify))
    .pipe(webpack(webpackConfig))
    .pipe(dest(config.scripts.output))
    .pipe(dest(config.scripts.outputProd))
    .pipe(gulpif(isDev, dest(config.scripts.outputProd)));
};

exports.javascript = javascript;
