var gulp = require("gulp");
var cheerio = require("gulp-cheerio"); //use jquery in gulp
var gutil = require("gulp-util"); //utilities
var htmlmin = require("gulp-htmlmin"); //html uglify
var plumber = require("gulp-plumber"); //error handler
var sass = require("gulp-sass"); //scss/sass task
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var uglifycss = require("gulp-uglifycss");

gulp.task("default", async function() {
  gutil.log(
    gutil.colors.bgGreen.white.bold("GULP WORKS"),
    gutil.colors.bgRed.white.bold('type: "gulp --tasks" to list all tasks')
  );
});

gulp.task("miniHTML", async function() {
  gulp
    .src("src/html/*.html") //DUDE, CHANGE ME
    .pipe(plumber())
    .pipe(
      cheerio(function($, file) {
        $("img:not([alt])").attr("alt", ""); //this adds a blank alt tag to images without an alt
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      })
    )
    .pipe(gulp.dest("./prod/html/")); //DUDE, CHANGE ME
});

gulp.task("sass", async function() {
  gulp
    .src("./src/scss/theme.scss") //DUDE, CHANGE ME
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(uglifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("src/css")); //DUDE, CHANGE ME
});

gulp.task("miniJS", async function() {
  gulp
    .src("./src/js/*.js") //DUDE, CHANGE ME
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./js")); //DUDE, CHANGE ME
});

gulp.task("miniCSS", async function() {
  gulp
    .src("./src/css/*.css") //DUDE, CHANGE ME
    .pipe(sourcemaps.init())
    .pipe(uglifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./css")); //DUDE, CHANGE ME
});
