import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

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

  const browser = await remote(options);

  try {
    await init(browser)

    await browser.url('https://forms-runner-v2.test.cdp-int.defra.cloud/adding-value/start')
    await analyse(browser, '')

    await browser.$(`//*[contains(text(),'Start now')]`).click()
    await analyse(browser, '')

  } finally {
    browser.closeWindow()

    const outputDirectory = path.join('./reports');

    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory);
    }

    fs.writeFileSync(path.join(outputDirectory, 'accessibility_category.html'), getHtmlReportByCategory(), (err) => {
      if (err) throw err;
    })

    fs.writeFileSync(path.join(outputDirectory, 'accessibility_guideline.html'), getHtmlReportByGuideLine(), (err) => {
      if (err) throw err;
    })
  }
})();
