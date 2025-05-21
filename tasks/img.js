/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');
const flatten = require('gulp-flatten');
const gulpif = require('gulp-if');
const isDev = process.env.NODE_ENV === 'development';
const config = require('./config');

const img = () => {
  return src(config.img.input)
    .pipe(plumber(config.notify))
    .pipe(flatten())
    .pipe(dest(config.img.output))
    .pipe(gulpif(!isDev, dest(config.img.outputProd)))
    .pipe(webp())
    .pipe(dest(config.img.output))
    .pipe(gulpif(!isDev, dest(config.img.outputProd)));
};

exports.img = img;
