import fs from 'fs'
import path from 'path'
import { remote } from 'webdriverio'
import { init, analyse, getHtmlReportByCategory, getHtmlReportByGuideLine } from './wcagchecker.cjs'

(async function addingValueAccessibility() {
  const options = process.env.ENVIRONMENT ? {
    hostname: process.env.CHROMEDRIVER_URL,
    port: process.env.CHROMEDRIVER_PORT,
    capabilities: {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: [
          '--no-sandbox',
          '--disable-infobars',
          '--headless',
          '--disable-gpu',
          '--window-size=1920,1080',
          '--enable-features=NetworkService,NetworkServiceInProcess',
          '--password-store=basic',
          '--use-mock-keychain',
          '--dns-prefetch-disable',
          '--disable-background-networking',
          '--disable-remote-fonts',
          '--ignore-certificate-errors',
          '--disable-dev-shm-usage'
        ]
      }
    }
  } : {
    capabilities: {
      browserName: 'chrome'
    }
  }

  console.log('instantiating browser')
  console.log(`process.env.ENVIRONMENT ${process.env.ENVIRONMENT}`)
  console.log(`process.env.CHROMEDRIVER_URL ${process.env.CHROMEDRIVER_URL}`)
  console.log(`process.env.CHROMEDRIVER_PORT ${process.env.CHROMEDRIVER_PORT}`)
  const browser = await remote(options);
  console.log('browser instantiated')

  try {
    await init(browser)
    console.log('accessibility initialised')

    await browser.url('https://forms-runner-v2.test.cdp-int.defra.cloud/adding-value/start')
    await analyse(browser, '')
    console.log('first page analysed')

    await browser.$(`//*[contains(text(),'Start now')]`).click()
    await analyse(browser, '')
    console.log('second page analysed')
  } finally {
    browser.deleteSession()

    const outputDirectory = path.join('./reports');

    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory);
      console.log(`created directory: ${outputDirectory}`)
    }

    fs.writeFileSync(path.join(outputDirectory, 'accessibility_category.html'), getHtmlReportByCategory(), (err) => {
      if (err) throw err;
    })

    console.log('generated first report')

    fs.writeFileSync(path.join(outputDirectory, 'accessibility_guideline.html'), getHtmlReportByGuideLine(), (err) => {
      if (err) throw err;
    })

    console.log('generated second report')
  }
})();
