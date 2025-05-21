/* eslint-disable import/no-extraneous-dependencies */
const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const gulpif = require('gulp-if');
const isDev = process.env.NODE_ENV === 'development';
const config = require('./config');

const fonts = () => {
  return src(config.fonts.input)
    .pipe(plumber(config.notify))
    .pipe(ttf2woff({
      clone: true
    }))
    .pipe(dest(config.fonts.output))
    .pipe(gulpif(!isDev, dest(config.fonts.outputProd)))
    .pipe(ttf2woff2())
    .pipe(dest(config.fonts.output))
    .pipe(gulpif(!isDev, dest(config.fonts.outputProd)))
};

exports.fonts = fonts;
