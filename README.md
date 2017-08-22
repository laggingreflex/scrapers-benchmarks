
# scrapers-benchmarks

Benchmarking various scrapers

[request], [zombie], [puppeteer], [phantom], [nightmare]

[request]: https://github.com/request/request
[zombie]: https://github.com/assaf/zombie
[puppeteer]: https://github.com/GoogleChrome/puppeteer
[phantom]: https://github.com/Medium/phantomjs
[nightmare]: https://github.com/segmentio/nightmare

```
npm install

node index.js


Run 1 {    request: 834, zombie: 1963, puppeteer: 4572, phantom: 3790, nightmare: 17693 }
Run 2 {    request: 545, zombie: 1757, puppeteer: 3642, phantom: 3993, nightmare: 16902 }
Run 3 {    request: 539, zombie: 1729, puppeteer: 3678, phantom: 3573, nightmare: 17613 }
Run 4 {    request: 545, zombie: 1671, puppeteer: 2308, phantom: 3969, nightmare: 17224 }
Run 5 {    request: 556, zombie: 1566, puppeteer: 2815, phantom: 3548, nightmare: 17857 }
Average: { request: 603, zombie: 1737, puppeteer: 3403, phantom: 3774, nightmare: 17457 }

```
