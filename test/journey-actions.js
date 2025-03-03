import { $ } from '@wdio/globals'

export async function continueJourney() {
    await $(`//button[contains(text(),'Continue')]`).click()
}

export async function navigateBack() {
    await $(`//a[@class='govuk-back-link']`).click()
}

export async function selectOption(option) {
    await $(`//label[contains(text(),'${option}')]/preceding-sibling::input`).click()
}

export async function selectOptions(options) {
    for (let option of options) {
        await $(`//label[contains(text(),'${option}')]/preceding-sibling::input`).click()
    }
}

export async function startJourney() {
    await $(`//button[contains(text(),'Start now')]`).click()
}

export async function submitApplication() {
    await $(`//button[contains(text(),'Send')]`).click()
}
