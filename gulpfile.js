const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const config = {
    srcPath: 'src/',
    distPath: 'dist/'
};

gulp.task('browserSync' , () => {
    browserSync.init({
        server: {
          baseDir: './',
        },
        port: 8080,
        startPath: 'index.html',
    })
});

gulp.task('sass' , () => {
    return gulp.src(config.srcPath + 'sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.distPath + 'css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch' , () => {
    gulp.watch(config.srcPath+'sass/**/*.+(scss|sass)', ['sass']);
});
