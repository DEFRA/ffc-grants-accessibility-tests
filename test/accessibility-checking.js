import { browser } from '@wdio/globals'
import { init, analyse, getHtmlReportByCategory, getHtmlReportByGuideLine } from './wcagchecker.cjs'
import fs from 'fs'
import path from 'path'

const reportDirectory = path.join('./reports')

export async function initialiseAccessibilityChecking() {
    if (!fs.existsSync(reportDirectory)) {
        fs.mkdirSync(reportDirectory);
    }

    const waveScript = fs.readFileSync('./test/wave.min.js', { encoding: 'utf8', flag: 'r' })
    await init(browser, waveScript)
}

export async function analyseAccessibility() {
    await analyse(browser)
}

export function generateAccessibilityReports(filePrefix) {
    fs.writeFileSync(path.join(reportDirectory, `${filePrefix}-accessibility-category.html`), getHtmlReportByCategory(), (err) => {
        if (err) throw err
    })
    fs.writeFileSync(path.join(reportDirectory, `${filePrefix}-accessibility-guideline.html`), getHtmlReportByGuideLine(), (err) => {
        if (err) throw err;
    })
}

export function generateAccessibilityReportIndex() {
    const filenames = fs.readdirSync(reportDirectory)

    const html = `
        <html>
            <head>
                <title>Accessibility Reports</title>
                <style>
                    h2 {
                        color: rgb(11, 12, 12);
                        font-family: 'GDS Transport', arial, sans-serif;
                        font-size: 29.7px;
                        font-weight: 700;
                        height: 33px;
                        line-height: 33px;
                        margin-bottom: 10px;
                        text-size-adjust: 100%;
                        -webkit-font-smoothing: antialiased;
                    }                
                    a {
                        color: #1d70b8;
                        font-family: 'GDS Transport', arial, sans-serif;
                        font-size: 15.675px;
                        font-weight: 400;
                        -webkit-font-smoothing: antialiased;
                    }
                </style>
            </head>
            <body>
                <h2>Accessibility Reports</h2>
                <ul>
                ${filenames.map(f => `<li><a href="${f}">${f}</a></li>`).join('')}
                </ul>
            </body>
        </html>
        `
    fs.writeFileSync(path.join(reportDirectory, 'index.html'), html, (err) => {
        if (err) throw err
    })
}
