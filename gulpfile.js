const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'))
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function htmlmini () {
    return gulp.src('./src/index.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true
    }))
    .pipe(gulp.dest('./dist'))
}

exports.default = gulp.parallel(styles, images, scripts, htmlmini);
exports.watch = function() {
    gulp.watch('./dist/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./dist/scripts/*.js', gulp.parallel(scripts))
    gulp.watch('./dist/*.html', gulp.parallel(htmlmini))
}