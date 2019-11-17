const gulp = require('gulp');
const sass = require('gulp-sass');
const { series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

function browserSyncing(done) {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
        port: 3000
    });
    done();
}

function scss() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
}

function watchFiles() {
    gulp.watch("app/scss/*.scss", scss);
    gulp.watch("app/index.html", browserSyncing);
}

const watch = parallel(watchFiles, browserSyncing);
exports.watch = watch;
