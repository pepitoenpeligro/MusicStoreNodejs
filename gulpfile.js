var gulp = require('gulp');

var nodemon = require('gulp-nodemon');
var run = require('gulp-run');

gulp.task('nodemon', function(){
    nodemon({
        script: 'index.js',
        ext: 'js'
    });
});

gulp.task('run', function(){
    return run('npm install && npm start').exec()
})

gulp.task('test', () => {
    return run ('npm test').exec()
})