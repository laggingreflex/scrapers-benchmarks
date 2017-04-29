console.log('Loading a web page');
var page = require('webpage').create();
var url = 'http://google.com/';
page.open(url, function(status) {
  console.log('Page is loaded!');
  phantom.exit();
});
