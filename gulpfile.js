const gulp = require('gulp');
const browserify = require('browserify');
const tsify = require('tsify');
const watchify = require('watchify');
const errorify = require('errorify');
const del = require('del');
const source = require('vinyl-source-stream');


function createBrowserifier(entry) {
    return browserify({
        basedir: '.',
        debug: true,
        entries: [entry],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .plugin(watchify)
    .plugin(errorify);
}
function bundle(browserifier, bundleName, destination) {
    return browserifier
         .bundle()
         .pipe(source(bundleName))
         .pipe(gulp.dest(destination));
}

function clean(done) {
     del('./javascript/**/*');
     done();
}

function browserifySrc(done) {
    bundle(
        createBrowserifier('./typescript/drand.ts'),
        'bundle.js',
        'javascript');
    done();
}

function watch(done) {
    console.log('Watching...')
    return gulp.watch('typescript/**/*.ts', browserifySrc);		
}

var build =  gulp.series(clean, browserifySrc, watch) 
gulp.task('default', build);

