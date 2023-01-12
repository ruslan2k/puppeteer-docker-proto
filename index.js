const puppeteer = require('puppeteer')

const timeoutInMiliseconds = 30 * 1000

async function main () {
    console.log('Start')

    const browser = await puppeteer.launch({
        headless: true,
        //headless: false,
        executablePath: '/usr/bin/chromium',
        args: ['--no-sandbox'],
    })

    const page = await browser.newPage()

    page.setDefaultNavigationTimeout(timeoutInMiliseconds)
    page.setDefaultTimeout(timeoutInMiliseconds)

    await page.goto('https://ya.ru')

    await page.waitForSelector('#text')

    await browser.close();

    console.log('Finish')
}

main()


