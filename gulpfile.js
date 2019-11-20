const {src, dest, series,parallel} = require('gulp');
const del = require('del');
const origin = 'src';
const destination = 'build';


async function clean(cb) {
  await del(destination);
  cb();
}
//defaultTask as html
function html(cb) {
    // place code for your default task here
    /* src('src/index.html').pipe(dest('build'));
     */
  src(`${origin}**/*.html`).pipe(dest(destination))
  cb();
}
function css(cb) {
  src(`${origin}/css/**/*.css`).pipe(dest(`${destination}/css`))
  cb();
}
function js(cb) {
  src([
    `${origin}/js/lib/bootstrap.bundle.min.js`,
    `${origin}/js/lib/fontawesome-all.min.js`,
    `${origin}/js/lib/jquery.min.js`,
    `${origin}/js/script.js`
  ]).pipe(dest(`${destination}/js`))
  cb();
}

exports.default = series(clean, parallel( html, css, js));