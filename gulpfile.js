const {src,dest,watch, parallel} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browsersync = require('browser-sync').create();


function scripts(){
    return src('src/js/main.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('src/js'))
    .pipe(browsersync.stream())
}



function styles(){
	return src('src/scss/*.scss')
    .pipe(concat('styles.min.css'))
    .pipe(scss({outputStyle:'compressed'}))
    .pipe(dest('src/css'))
    .pipe(browsersync.stream())
}

function watching(){
    watch(['src/scss/*.scss'],styles)
    watch(['src/js/main.js'],scripts)
    watch(['src/*.html']).on('change', browsersync.reload)
}

function browsersy(){
    browsersync.init({
        server:{
            baseDir:"src/"
        }
    })
}


exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersy = browsersy;

exports.start = parallel(styles,scripts,browsersy,watching);
