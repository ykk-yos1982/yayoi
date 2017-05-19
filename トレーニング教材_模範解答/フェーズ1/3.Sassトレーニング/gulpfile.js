    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var typescript = require('gulp-typescript');
    var sourcemaps = require('gulp-sourcemaps');
    var minifyCss = require('gulp-minify-css'); // gulp-minify-css を追加
    var rename = require('gulp-rename');
    var scsslint = require('gulp-scss-lint');
    var autoprefixer = require("gulp-autoprefixer");
    var zip = require('gulp-zip');
    var runSequence = require('run-sequence');

    gulp.task('scss', function () {
        return gulp.src('scss/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({
                sourcemap: true
            }))
            .pipe(sourcemaps.write({includeContent: false}))
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(autoprefixer({
                browsers: ["last 3 versions", "ie >= 9", "Android >= 4", "ios_saf >= 8"],
                cascade: false
            }))
            .pipe(sourcemaps.write('../css')) // マップファイルを出力するパスを指定します
            .pipe(gulp.dest('css'));

    });
    gulp.task('minify', function () {
        return gulp.src([
            "./css/**/*.css",
            "!./css/**/*.min.css",
            "!./css/vendor/MaterialDesignLite/*.css"])
                .pipe(minifyCss())
                .pipe(rename({
                    suffix: '.min'
                }))
                .pipe(gulp.dest('css'));
    });
    gulp.task('ts', function () {

        var tsFileArr = [{
                tsFileName: "yayoi-common",
                outpufFolder: "./js/vendor/yayoi"
            }];

        tsFileArr.map(function (data) {
            //出力オプション
            var options = {
                removeComments: false,
                out: data.tsFileName + '.js'
            };

            gulp.src([
                './**/' + data.tsFileName + '.ts',
                '!./node_modules/**', //node_modules配下は除外する
                '!./ts/component/**' //component配下は除外する
              ])
                .pipe(typescript(options))
                .pipe(gulp.dest(data.outpufFolder));
        });
    });

    // 最小単位でzip
    gulp.task('zip-mypage', () =>
        gulp.src(['./css/**', '!./css/vendor/yayoi/yayoi-myportal.*', '!./css/vendor/yayoi/yayoi-myaccount.*', '!./css/layout/', '!./css/layout/**', '!./css/object/','!./css/object/**', './html/**', './image/**', './js/**', '!./js/function/', '!./js/function/**'],{ base: './' })
//        gulp.src(['./css/**', './html/**', './image/**', './js/**'])
            .pipe(zip('mock-mypage.zip'))
            .pipe(gulp.dest('../mock'))
    );
    // 最小単位でzip
    gulp.task('zip-myportal', () =>
        gulp.src(['./css/**', '!./css/vendor/yayoi/yayoi-myaccount.*', '!./css/layout/', '!./css/layout/**', '!./css/object/','!./css/object/**', './html/**', './image/**', './js/**', '!./js/function/', '!./js/function/**'],{ base: './' })
//        gulp.src(['./css/**', './html/**', './image/**', './js/**'])
            .pipe(zip('mock-myportal.zip'))
            .pipe(gulp.dest('../mock'))
    );
    // 最小単位でzip
    gulp.task('zip-myaccount', () =>
        gulp.src(['./css/**', '!./css/vendor/yayoi/yayoi-myportal.*', '!./css/layout/', '!./css/layout/**', '!./css/object/','!./css/object/**', './html/**', './image/**', './js/**', '!./js/function/', '!./js/function/**'],{ base: './' })
//        gulp.src(['./css/**', './html/**', './image/**', './js/**'])
            .pipe(zip('mock-myaccount.zip'))
            .pipe(gulp.dest('../mock'))
    );
    // 追記する
    gulp.task('watch', function () {
        gulp.watch('scss/**/*.scss', ['scss']);
    });

    // デフォルトタスク
    gulp.task('zip', function (callback) {
        runSequence('zip-mypage', 'zip-myportal', 'zip-myaccount',callback);
    });

    // デフォルトタスク
    gulp.task('default', function (callback) {
        runSequence('scss', 'minify', callback);
    });
