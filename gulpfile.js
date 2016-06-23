const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const nodemon = require('nodemon');

const jsFiles = ['*.js', 'src/**/*.js'];


gulp.task('style', () => {
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
      verbose: true
    }))
    .pipe(jscs());
});

gulp.task('serve', ['style'], () => {
  const options = {
    script: 'src/app.js',
    delayTime: 1,
    env: {
      'PORT': 5000
    },
    watch: jsFiles
  }

  return nodemon(options)
    .on('restart', (e) => {
      console.log('Restarting...')
    });
});
