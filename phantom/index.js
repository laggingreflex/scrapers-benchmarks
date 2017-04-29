var path = require('path');
var phantomjs = require('phantomjs-prebuilt')

module.exports = () => new Promise(resolve =>
  phantomjs
  .exec(path.join(__dirname, 'script.js'))
  .on('exit', resolve));
