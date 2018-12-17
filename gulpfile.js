var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
    stylus = require('gulp-stylus'),
	autoPrefixer = require('gulp-autoprefixer'),
    cssComb = require('gulp-csscomb'),
	cmq = require('gulp-merge-media-queries'),
	cleanCss = require('gulp-clean-css'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	jade = require('gulp-jade'),
	minifyHtml = require('gulp-minify-html'),
	imageMin = require('gulp-imagemin'),
	cache = require('gulp-cache');

    //if node version is lower than v.0.1.2
    require('es6-promise').polyfill();

gulp.task('sass',function(){
    gulp.src(['src/styles/**/*.scss'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(cssComb())
        .pipe(cmq({log:true}))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/styles'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest('public/styles'))
});

gulp.task('stylus', function () {
    return gulp.src(['src/styles/*.styl','!src/styles/_*.styl'])
                .pipe(plumber({
                    handleError: function (err) {
                        console.log(err);
                        this.emit('end');
                    }
                }))
               .pipe(stylus())
               .pipe(autoPrefixer())
               .pipe(cssComb())
               .pipe(cmq({log:true}))
               .pipe(concat('main.css'))
               .pipe(gulp.dest('public/styles'))
               .pipe(rename({
                   suffix: '.min'
               }))
               .pipe(cleanCss())
               .pipe(gulp.dest('public/styles'))
});

gulp.task('babel',function(){
    gulp.src(['node_modules/babel-polyfill/dist/polyfill.js',
              'src/js/**/*.es6.js'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(babel({presets:['@babel/env']}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
});

gulp.task('jade',function(){
    gulp.src(['src/**/*.jade'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(jade())
        .pipe(minifyHtml())
        .pipe(gulp.dest('./public'))
});

gulp.task('image',function(){
    gulp.src(['src/imgs/**/*'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(cache(imageMin()))
        .pipe(gulp.dest('public/imgs'))
});

gulp.task('default',function(){
    gulp.watch('src/js/**/*.js',['babel']);
    gulp.watch('src/styles/**/*.scss',['sass']);
    gulp.watch(['src/styl/**/*.styl'],['stylus']);
    gulp.watch('src/**/*.jade',['jade']);
    gulp.watch('src/imgs/**/*',['image']);
});
