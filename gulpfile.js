const { src, dest, watch, series } = require("gulp");
const pug = require("gulp-pug");

// Create Function

//Pug
function compileHtml() {
  return src("views/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("views/html"));
}

// create watchTask
function watchTask() {
  watch("views/pug/*.pug", series(compileHtml));
}

// default gulp
exports.default = series(compileHtml, watchTask);
