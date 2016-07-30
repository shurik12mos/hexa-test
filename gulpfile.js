var gulp = require('gulp'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	watch = require('gulp-watch'),	
	compass = require('gulp-sass'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    cleanCss = require('gulp-clean-css'),
	gulpIgnore = require('gulp-ignore');

/*gulp.task('js', function() {
   gulp.src('./app/src/js/*.js')    
    .pipe(concat('scriptConcat.js'))	
	.pipe(rename('scripts.js'))
    .pipe(gulp.dest('./app/dest/js/'))	
	.pipe(notify('Done js!'));
});
*/
gulp.task('scss', function() {
	
	gulp.src('app/scss/style.scss')
	.pipe(compass({
            sassDir: 'scss',
            cssDir: 'css',
            force: true
        }))	
	.pipe(autoprefixer({
            browsers: ['last 16 versions'],
            cascade: false
        }))
		.pipe(concat('style.css'))
	.pipe(gulp.dest('./app/css/'))
	.pipe(notify('Done css!'));
})

/*gulp.task('html', function(){
	gulp.src('./app/*.html')
	 .pipe(gulp.dest('./app/dist/'))
	 .pipe(notify('Done html!'));
})*/

gulp.task('default', ['scss'/*, 'js', 'html'*/], function(){
	gulp.watch('app/scss/*.scss', ['scss']);
})

// PRODUCTION	
	
gulp.task('useref', function () {	 
    gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCss({compatibility: 'ie11'})))
        .pipe(gulp.dest('dist'));	
});

gulp.task('image', function(){
	gulp.src('./app/images/*')
	 .pipe(gulp.dest('./dist/images/'))
	 .pipe(notify('Done image!'));
});

gulp.task('fonts', function(){
	gulp.src('./app/fonts/**')
	 .pipe(gulp.dest('./dist/fonts/'))
	 .pipe(notify('Done fonts!'));
});

gulp.task('other', function(){
	gulp.src('./app/*.png', './app/*.svg', './app/*.ico', './app/type_project/*')	 
	 .pipe(gulp.dest('./dist/'))
	 .pipe(notify('Done other!'));
});


gulp.task('production', ['useref', 'image', 'fonts', 'other'], function(){
	
});