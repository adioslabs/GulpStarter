const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function style() {
  // Scss sile loc
  return (
    gulp
      .src("./scss/**/*.scss")
      // Pass file through sass compiler
      .pipe(sass().on("error", sass.logError))
      // where to save css
      .pipe(gulp.dest("./css"))
      //Stream changes to all browser
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./**/*.html").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
