const puppeteer = require('puppeteer');

async function scrape(url) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle0'});
    const data = await page.evaluate(() => {
        const titleArray = [];
        const titles = document.getElementsByClassName('titleColumn');
        for (let i = 0; i < 10; i++) {
            titleArray.push(titles[i].innerText);
        }
        return titleArray;
    });
    data.array.forEach(element => {
        console.log(element);
    });
    await browser.close();
}

scrape('https://www.imdb.com/chart/moviemeter/?sort=ir,desc&mode=simple&page=1');
