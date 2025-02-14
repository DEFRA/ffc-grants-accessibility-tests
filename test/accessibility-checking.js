import { browser } from '@wdio/globals'
import { ProxyAgent } from 'undici'
import { init, analyse, getHtmlReportByCategory, getHtmlReportByGuideLine } from './wcagchecker.cjs'
import fs from 'fs'
import path from 'path'

const reportDirectory = path.join('./reports')

export async function initialiseAccessibilityChecking() {
    if (!fs.existsSync(reportDirectory)) {
        fs.mkdirSync(reportDirectory);
    }

    const fetchViaProxy = (url) =>
        process.env.HTTP_PROXY ? fetch(url, new ProxyAgent({ uri: process.env.HTTP_PROXY })) : fetch(url)

    await init(browser, fetchViaProxy)    
}

export async function analyseAccessibility() {
    await analyse(browser)
}

export function generateAccessibilityReports(filePrefix) {
    fs.writeFileSync(path.join(reportDirectory, `${filePrefix}-accessibility-category.html`), getHtmlReportByCategory(), (err) => {
        if (err) throw err
    })
    fs.writeFileSync(path.join(reportDirectory,`${filePrefix}-accessibility-guideline.html`), getHtmlReportByGuideLine(), (err) => {
        if (err) throw err;
    })
}

export function generateAccessibilityReportIndex() {
    const filenames = fs.readdirSync(reportDirectory)

    const html = `
        <html>
            <head>
                <title>Accessibility Reports</title>
            </head>
            <body>
                ${filenames.map(f => `<p><a href="${f}">${f}</a>`)}
            </body>
        </html>
        `
    fs.writeFileSync(path.join(reportDirectory, `index.html`), html, (err) => {
        if (err) throw err
    })
}
