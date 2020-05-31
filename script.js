const puppeteer = require('puppeteer');

async function scrape(url) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle0'});
    const data = await page.evaluate(() => {
        const title = document.querySelector('td[class=titleColumn]').innerText;
        return title.substring(0, title.indexOf('('));
    });
    console.log(data);
    await browser.close();
}

const movies = scrape('https://www.imdb.com/chart/moviemeter/?sort=ir,desc&mode=simple&page=1');

console.log(movies);
