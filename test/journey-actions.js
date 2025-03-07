import { $ } from '@wdio/globals'

export async function continueJourney() {
    await $(`aria/Continue`).click()
}

export async function enterValueFor(text, label) {
    await $(`aria/${label}`).setValue(text)
} 

export async function navigateBack() {
    await $(`//a[@class='govuk-back-link']`).click()
}

export async function selectOption(option) {
    await $(`aria/${option}`).click()
}

export async function selectOptions(options) {
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
