import * as wcagChecker from './wcagchecker.cjs'
import fs from 'fs'
import path from 'path'

const reportDirectory = path.join('./reports')

export async function initialiseAccessibilityChecking() {
    if (!fs.existsSync(reportDirectory)) {
        fs.mkdirSync(reportDirectory);
    }

    const waveScript = fs.readFileSync('./test/accessibility/wave.min.js', { encoding: 'utf8', flag: 'r' })
    await wcagChecker.init(browser, waveScript)
}

export async function analyseAccessibility(suffix) {    
    await wcagChecker.analyse(browser, suffix)
}

export function generateAccessibilityReports(filePrefix) {
    fs.writeFileSync(path.join(reportDirectory, `${filePrefix}-accessibility-category.html`), wcagChecker.getHtmlReportByCategory(), (err) => {
        if (err) throw err
    })
    fs.writeFileSync(path.join(reportDirectory, `${filePrefix}-accessibility-guideline.html`), wcagChecker.getHtmlReportByGuideLine(), (err) => {
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
