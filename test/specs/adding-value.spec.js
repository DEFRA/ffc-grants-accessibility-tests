import { browser } from '@wdio/globals'
import { initialiseAccessibilityChecking, analyseAccessibility, generateAccessibilityReports } from '../accessibility/accessibility-checking.js'
import { confirmAndSend, continueJourney, enterValueFor, navigateBack, selectOption, selectOptions, startJourney } from '../journey-actions.js'

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
    await analyseAccessibility('[validation-format]')

    await enterValueFor('62499.99', 'Enter amount')
    await analyseAccessibility('[validation-decimals]')

    await enterValueFor('12345678', 'Enter amount')
    await analyseAccessibility('[validation-max-number]')

    await enterValueFor('0', 'Enter amount')
    await analyseAccessibility('[validation-min-number]')

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
    await continueJourney()

    // business-details
    await analyseAccessibility()
    await continueJourney()

    // who-is-applying-for-this-grant
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('Agent')
    await continueJourney()

    // agent-details
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await enterValueFor('John', 'First name')
    await enterValueFor('Test-Agent', 'Last name')
    await enterValueFor('Test Agency Ltd', 'Business name')
    await enterValueFor('cl-defra-gae-test-agent-email@equalexperts.com', 'Email address')
    await enterValueFor('cl-defra-gae-test-agent-email@equalexperts.com', 'Confirm email address')
    await enterValueFor('07777 654321', 'Mobile number')
    await enterValueFor('01604 654321', 'Landline number')
    await enterValueFor('High Street', 'Address line 1')
    await enterValueFor('Denton', 'Address line 2 (optional)')
    await enterValueFor('Northampton', 'Town')
    await enterValueFor('Northamptonshire', 'County (optional)')
    await enterValueFor('NN7 3NN', 'Postcode')
    await continueJourney()

    // applicant-details
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await enterValueFor('James', 'First name')
    await enterValueFor('Test-Farmer', 'Last name')
    await enterValueFor('cl-defra-gae-test-applicant-email@equalexperts.com', 'Email address')
    await enterValueFor('cl-defra-gae-test-applicant-email@equalexperts.com', 'Confirm email address')
    await enterValueFor('07777 123456', 'Mobile number')
    await enterValueFor('01604 123456', 'Landline number')
    await enterValueFor('Test Farm', 'Address line 1')
    await enterValueFor('Cogenhoe', 'Address line 2 (optional)')
    await enterValueFor('Northampton', 'Town')
    await enterValueFor('Northamptonshire', 'County (optional)')
    await enterValueFor('NN7 1NN', 'Postcode')
    await enterValueFor('NN7 2NN', 'Project postcode')
    await continueJourney()

    // check-your-details
    await analyseAccessibility()
    await continueJourney()

    // declaration
    await analyseAccessibility()
    await confirmAndSend()

    // confirmation
    await analyseAccessibility()

    generateAccessibilityReports('adding-value')
  });
});
