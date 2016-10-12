var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var watchify = require('watchify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var pump = require('pump');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');

//watchify 
var customOpts = {
  entries: ['./js/main.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts)); 

gulp.task('watchify', bundle);
b.on('update', bundle); 
b.on('log', gutil.log);

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    //.pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./js'));
}
//end watchify

gulp.task('lint', function() {
    return gulp.src([
    	'!js/bundle*.js',
    	'js/*.js'
    	])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sass', function () {
  return gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'})) //uncomment to minify
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('js/*.js', ['lint']);
  gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('compress-js',['watchify'], function (cb) {
  pump([
        gulp.src('js/bundle.js'),
        uglify({mangle:false}),
        rename({ suffix: '.min' }),
        gulp.dest('./js')
    ],
    cb
  );
});


gulp.task('default', ['lint', 'watch', 'watchify', 'compress-js']); //remove compress-js for faster compiling in development


