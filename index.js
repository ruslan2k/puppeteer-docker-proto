const puppeteer = require('puppeteer')

const timeoutInMiliseconds = 30 * 1000

async function main () {
    console.log('Start')

    const browser = await puppeteer.launch({
        headless: true,
        //headless: false,
        // ubuntu
        //executablePath: '/snap/bin/chromium',
        // ubuntu 18.04
        executablePath: '/usr/bin/chromium-browser',
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


