import { browser } from '@wdio/globals'
import { initialiseAccessibilityChecking, analyseAccessibility, generateAccessibilityReports } from '../accessibility/accessibility-checking.js'
import { continueJourney, enterValueFor, navigateBack, selectOption, selectOptions, startJourney } from '../journey-actions.js'

describe('Adding Value', () => {
  it('should analyse accessibility on all Adding Value pages', async () => {
    await initialiseAccessibilityChecking()

    await browser.url('/adding-value/start')

    // start
    await analyseAccessibility()
    await startJourney()

    // what-is-your-business
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('None of the above')
    await continueJourney()

    // you-cannot-apply-for-a-grant-from-this-scheme-business-type
    await analyseAccessibility()
    await navigateBack()

    // what-is-your-business
    await selectOption('A grower or producer of agricultural or horticultural produce')
    await continueJourney()

    // what-is-the-legal-status-of-the-business
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('None of the above')
    await continueJourney()

    // you-cannot-apply-for-a-grant-from-this-scheme-legal-status
    await analyseAccessibility()
    await navigateBack()

    // what-is-the-legal-status-of-the-business
    await selectOption('Sole trader')
    await continueJourney()

    // is-the-planned-project-in-england
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('No')
    await continueJourney()

    // you-cannot-apply-for-a-grant-from-this-scheme-project-in-england
    await analyseAccessibility()
    await navigateBack()

    // is-the-planned-project-in-england
    await selectOption('Yes')
    await continueJourney()

    // what-is-the-estimated-cost-of-the-items
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation-no-value]')
    await enterValueFor('ABC', 'Enter amount')
    await analyseAccessibility('[validation-invalid-format]')
    await enterValueFor('62499.999', 'Enter amount')
    await analyseAccessibility('[validation-invalid-excess-decimals]')
    await enterValueFor('62500', 'Enter amount')
    await continueJourney()

    // can-you-pay-the-remaining-costs
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('No')
    await continueJourney()

    // you-cannot-apply-for-a-grant-from-this-scheme-remaining-costs
    await analyseAccessibility()
    await navigateBack()

    // can-you-pay-the-remaining-costs
    await selectOption('Yes')
    await continueJourney()

    // products-processed
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('Arable produce')
    await continueJourney()

    // adding-value
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('Introducing a new product to your farm')
    await continueJourney()

    // project-impact
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOptions([
      'Increasing range of added-value products',
      'Increasing volume of added-value products'
    ])
    await continueJourney()

    // future-customers
    await analyseAccessibility()
    await continueJourney()

    // collaboration
    await analyseAccessibility()
    await continueJourney()

    // environmental-impact
    await analyseAccessibility()
    await continueJourney()

    // score-results
    await analyseAccessibility()

    generateAccessibilityReports('adding-value')
  });
});
