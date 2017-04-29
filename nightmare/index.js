var Nightmare = require('nightmare');

module.exports = () => Nightmare({ show: false })
  .goto('http://google.com')
  .end()
