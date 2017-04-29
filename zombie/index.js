const Browser = require('zombie');

module.exports = () => (new Browser()).visit('http://google.com')
