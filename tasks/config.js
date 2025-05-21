// const { errorHandler } = require('errorhandler');
const notify = require('gulp-notify');
const { resolve } = require('path');

const build = resolve(__dirname, '../build');

module.exports = {
  output: build,
  notify: {
    errorHandler(err) {
      notify.onError({
        title: 'Error',
        message: err.message
      })(err);
      this.emit('end');
    }
  },
  server: {
    watch: `build`
  },
  scripts: {
    input: resolve(__dirname, '../src/assets/scripts/main2.js'),
    other: resolve(__dirname, '../src/assets/scripts/other.js'),
    watch: [
      `src/assets/**/*.{js,ts}`,
      `src/blocks/**/*.{js,ts}`,
      `src/components/**/*.{js,ts}`
    ],
    output: resolve(__dirname, '../build/js'),
    outputProd: resolve(__dirname, '../../wp-content/themes/shablon/js')
  },
  styles: {
    input: `src/assets/styles/app.scss`,
    watch: [
      `src/assets/styles/**/*.scss`,
      `src/blocks/**/*.scss`,
      `src/components/**/*.scss`
    ],
    output: `build/css`,
    outputProd: resolve(__dirname, '../../wp-content/themes/shablon/css')
  },
  pages: {
    input: `src/pages/*.twig`,
    watch: [
      `src/assets/layout/*.twig`,
      `src/pages/**/*.twig`,
      `src/blocks/**/*.twig`,
      `src/components/**/*.twig`,
    ],
    temp: `temp`,
    output: `build/`
  },
  fonts: {
    input: `src/assets/fonts/**/*.{ttf,eot,svg,woff,woff2}`,
    output: `build/fonts/`,
    outputProd: resolve(__dirname, '../../wp-content/themes/shablon/fonts')
  },
  favicons: {
    input: `src/favicons/*.{ico,png,svg}`,
    output: `build/favicons/`
  },
  img: {
    input: [`src/img/**/*.{jpg,png,jpeg,webp,svg}`, `!src/img/sprite/**/*`],
    output: `build/img/`,
    outputProd: resolve(__dirname, '../../wp-content/themes/shablon/images')
  },
  video: {
    input: `src/video/**/*.{mp4,avi,mov}`,
    output: `build/video/`
  },
  svg: {
    input: `src/components/**/*.svg`,
    output: `build/icons/`
  },
  svgsprite: {
    input: `src/img/sprite/svg/*.svg`,
    output: `build/img/sprite/`,
    outputProd: resolve(__dirname, '../../wp-content/themes/shablon/images'),
    viewhtml: `build/`,
    watch: [`src/img/sprite/svg/*.svg`]
  },
  static: {
    input: `src/static/**/*.*`,
    output: `build/`,
    outputProd: resolve(__dirname, '../../wp-content/themes/shablon/')
  },
  NODE_ENV: process.env.NODE_ENV || 'development', // or production
  isProduction: this.NODE_ENV === 'production'
};
