import { expect } from 'chai'

export async function confirmAndSend() {
    await $(`//button[contains(text(),'Confirm and send')]`).click()
}

export async function continueJourney() {
    await $(`aria/Continue`).click()
}

export async function ensureUrl(url) {
    var actualUrl
    const doesActualUrlEndWithExpectedPath = await pollForSuccess(async () => {
        actualUrl = await browser.getUrl()
        return await actualUrl.endsWith(url)
    })

    expect(doesActualUrlEndWithExpectedPath, `Expected URL to be: ${url} but was: ${actualUrl}`).to.be.true
}

export async function enterValueFor(text, label) {
    const selector = `//label[contains(text(),'${label}')]/following::*[name()='input' or name()='select'][1]`
    const tag = await $(selector).getTagName()
    if (tag === 'select') {
        await $(selector).selectByVisibleText(text)
    } else {
        await $(selector).setValue(text)
    }
} 

export async function navigateBack() {
    await $(`//a[@class='govuk-back-link']`).click()
}

export async function selectOption(option) {
    await $(`aria/${option}`).click()
}

export async function selectOptions(...options) {
    for (let option of options) {
        await $(`aria/${option}`).click()
    }
}

export async function startJourney() {
    await $(`aria/Start now`).click()
}

export async function submitApplication() {
    await $(`aria/Send`).click()
}

async function pollForSuccess(predicate) {
    const pollingLimit = 10
    const pollingIntervalSeconds = 1

    for (let i = 0; i < pollingLimit; i++) {
        if (await predicate()) {
            return true
        }
        await new Promise((resolve) => setTimeout(resolve, pollingIntervalSeconds * 1000))
    }
    return false
}
