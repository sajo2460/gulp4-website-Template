const {src, dest} = require('gulp');
const origin = 'src';
const destination = 'build';

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
  
  exports.html = html;
  exports.css = css;
  
  exports.html = html;
  exports.css = css;
  exports.js = js;