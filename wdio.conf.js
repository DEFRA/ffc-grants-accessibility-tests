import { generateAccessibilityReportIndex } from './test/accessibility-checking.js'

export const config = {
  hostname: process.env.CHROMEDRIVER_URL || '127.0.0.1',
  port: process.env.CHROMEDRIVER_PORT || 4444,
  baseUrl: `https://grants-ui.${process.env.ENVIRONMENT}.cdp-int.defra.cloud`,
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
      proxy: {
        proxyType: 'manual',
        httpProxy: 'localhost:3128',
        sslProxy: 'localhost:3128'
      },
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
  ],
  runner: 'local',
  specs: ['./test/specs/*.spec.js'],
  exclude: [],
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 300000
  },
  onComplete: function (exitCode, config, capabilities, results) {
    generateAccessibilityReportIndex()
  }
}
