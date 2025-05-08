import { generateAccessibilityReportIndex } from './test/accessibility-checking.js'

export const config = {
    baseUrl: `https://grants-ui.test.cdp-int.defra.cloud`,
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
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
    onComplete: function(exitCode, config, capabilities, results) {
        generateAccessibilityReportIndex()
    }
}
