const {src, dest} = require('gulp');

function defaultTask(cb) {
    // place code for your default task here
    src('src/index.html').pipe(dest('build'));
    cb();
  }
  
  exports.default = defaultTask