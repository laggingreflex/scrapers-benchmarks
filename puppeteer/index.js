const puppeteer = require('puppeteer');

module.exports = async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://google.com');
  // await page.screenshot({ path: 'example.png' });

  browser.close();
}
