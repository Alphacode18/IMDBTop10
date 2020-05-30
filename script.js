const puppeteer = require('puppeteer');

async function scrape(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const titles = page.evaluate(() => {
        return document.getElementsByClassName('titleColumn').innerText;
    });
    for (let i = 0; i < (await titles).length; i++) {
        await console.log(titles[i]);
    }
}

scrape('https://www.imdb.com/chart/moviemeter/?sort=ir,desc&mode=simple&page=1');
