var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var imagemin = require('gulp-imagemin');
var livereload = require('gulp-livereload');
var revall = require('gulp-rev-all');
var copier = require('gulp-copy');

gulp.task('usemin', function() {
  gulp.src('./src/*.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      js: [uglify()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('images', function(){
    var imgSrc = './src/images/**/*',
        imgDst = './build/images';
    gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});


gulp.task('revall', function () {
    gulp.src('./build/**')
        .pipe(revall({ ignore: [/^\/favicon.ico$/g, '.html'] }))
        .pipe(gulp.dest('./build'))
        .pipe(revall.manifest());
});

gulp.task('default',function() {
  gulp.run('usemin');
  gulp.run('images');
  gulp.run('revall');
});
