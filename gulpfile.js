const gulp = require("gulp");
const sass = require("gulp-sass");
const cssMinify = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
const minify = require("gulp-minify");
const browserSync = require("browser-sync").create();
const PORT = 7000;

gulp.task("styles", () =>
    gulp
        .src("./src/scss/widget.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssMinify())
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream())
);

gulp.task("scripts", () =>
    gulp
        .src("./src/js/widget.js")
        .pipe(minify())
        .pipe(gulp.dest("./dist/js"))
        .pipe(browserSync.stream())
);
gulp.task("html", () =>
    gulp.pipe(browserSync.stream())
);

gulp.task("serve", () => {
    browserSync.init({
        server: "./",
        port: PORT,
        ghostMode: false
    });
    gulp.watch(["./src/**/*.scss", "./*.html"], gulp.series("styles"));
    gulp.watch(["./src/**/*.js"], gulp.series("scripts"));
    gulp.watch(["./**/*.html"], gulp.series("html"));
});

gulp.task("build", gulp.series("styles", "serve"));
