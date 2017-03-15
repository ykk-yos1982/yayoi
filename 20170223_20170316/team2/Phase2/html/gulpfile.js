    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var autoprefixer = require("gulp-autoprefixer");

    gulp.task('default', function () {
        gulp.src('scss/**/*.scss')
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ["last 3 versions", "ie >= 9", "Android >= 4", "ios_saf >= 8"],
                cascade: false
            }))
            .pipe(gulp.dest('css'));
    });

    // 追記する
    gulp.task('watch', function () {
        gulp.watch('scss/**/*.scss', ['default']);
    });