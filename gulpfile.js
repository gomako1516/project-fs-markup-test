const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const webserver = require('gulp-webserver');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// パスを定義
const sassFiles = './src/sass/style.scss'; // コンパイルするSassファイル
const cssDist = './src/css'; // コンパイル先

// Sassコンパイルの処理
gulp.task('sass', function () {
  return gulp
    .src(sassFiles)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>') // エラー通知
    }))
    .pipe(sourcemaps.init()) // ソースマップの初期化
    .pipe(sass({ outputStyle: 'expanded' })) // Sassのコンパイル
    .pipe(autoprefixer({
      cascade: false // ベンダープレフィックスの自動追加
    }))
    .pipe(sourcemaps.write('.')) // ソースマップの書き込み
    .pipe(gulp.dest(cssDist)); // コンパイル後のCSSを出力する場所
});

// 開発サーバー起動
gulp.task('server', function () {
  return gulp.src('./src')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8000
    }));
});

// npm run watch
gulp.task('watch', gulp.series('sass', gulp.parallel('server', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.task('sass'));
})));