import { browser, expect } from '@wdio/globals'

describe('Home page', () => {
  it('Should be on the "Home" page', async () => {
    await browser.url('/adding-value/start')
    await expect(
      $(
        `//h1[contains(text(),'Check if you can apply for a Farming Transformation Fund Adding Value Grant')]`
      )
    ).toBeDisplayed()
  })
})
