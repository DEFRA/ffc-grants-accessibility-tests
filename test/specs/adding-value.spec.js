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

    // nature-of-business
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('None of the above')
    await continueJourney()

    // cannot-apply-nature-of-business
    await analyseAccessibility()
    await navigateBack()

    // nature-of-business
    await selectOption('A grower or producer of agricultural or horticultural produce')
    await continueJourney()

    // legal-status
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('None of the above')
    await continueJourney()

    // legal-status-cannot-apply
    await analyseAccessibility()
    await navigateBack()

    // legal-status
    await selectOption('Sole trader')
    await continueJourney()

    // country
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('No')
    await continueJourney()

    // cannot-apply-country
    await analyseAccessibility()
    await navigateBack()

    // country
    await selectOption('Yes')
    await continueJourney()

    // planning-permission
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('Will not be in place by the time I make my full application')
    await continueJourney()

    // planning-permission-cannot-apply
    await analyseAccessibility()
    await navigateBack()

    // planning-permission
    await selectOption('Secured')
    await continueJourney()

    // project-start
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('Yes, we have begun project work')
    await continueJourney()

    // cannot-apply-project-start
    await analyseAccessibility()
    await navigateBack()

    // project-start
    await selectOption('Yes, preparatory work')
    await continueJourney()

    // tenancy
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('No')
    await continueJourney()

    // tenancy-length
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('No')
    await continueJourney()

    // may-apply-tenancy-length
    await analyseAccessibility()
    await continueJourney()

    // smaller-abattoir
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('No') // take top fruit journey
    await continueJourney()

    // fruit-storage
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await navigateBack() // navigate back to smaller abattoir journey

    // smaller-abattoir
    await selectOption('Yes') // take smaller abattoir journey
    await continueJourney()

    // other-farmers
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('No')
    await continueJourney()

    // cannot-apply-other-farmers
    await analyseAccessibility()
    await navigateBack()

    // other-farmers
    await selectOption('Yes')
    await continueJourney()

    // project-items
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('Constructing or improving buildings for processing')
    await continueJourney()

    // storage
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('Yes, we will need storage facilities')
    await continueJourney()

    // project-cost
    await analyseAccessibility()

    await enterValueFor('', 'Enter amount')
    await continueJourney()
    await analyseAccessibility('[validation-no-value]')

    await enterValueFor('ABC', 'Enter amount')
    await continueJourney()
    await analyseAccessibility('[validation-format]')

    await enterValueFor('62499.99', 'Enter amount')
    await continueJourney()
    await analyseAccessibility('[validation-decimals]')

    await enterValueFor('12345678', 'Enter amount')
    await continueJourney()
    await analyseAccessibility('[validation-max-number]')

    await enterValueFor('0', 'Enter amount')
    await continueJourney()
    await analyseAccessibility('[validation-min-number]')

    await enterValueFor('62499', 'Enter amount')
    await continueJourney()

    // project-cost-cannot-apply
    await analyseAccessibility()
    await navigateBack()

    // project-cost
    await enterValueFor('62500', 'Enter amount')
    await continueJourney()

    // remaining-costs
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('No')
    await continueJourney()

    // cannot-apply-remaining-costs
    await analyseAccessibility()
    await navigateBack()

    // remaining-costs
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

    // mechanisation
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('Yes')
    await continueJourney()

    // manual-labour-amount
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('More than 10%')
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

    // agent-details [TO BE FIXED ON TGC-631]
    // await analyseAccessibility()
    // await continueJourney()
    // await analyseAccessibility('[validation]')
    // await enterValueFor('John', 'First name')
    // await enterValueFor('Test-Agent', 'Last name')
    // await enterValueFor('Test Agency Ltd', 'Business name')
    // await enterValueFor('cl-defra-gae-test-agent-email@equalexperts.com', 'Email address')
    // await enterValueFor('cl-defra-gae-test-agent-email@equalexperts.com', 'Confirm email address')
    // await enterValueFor('07777 654321', 'Mobile number')
    // await enterValueFor('01604 654321', 'Landline number')
    // await enterValueFor('High Street', 'Address line 1')
    // await enterValueFor('Denton', 'Address line 2 (optional)')
    // await enterValueFor('Northampton', 'Town')
    // await enterValueFor('Northamptonshire', 'County (optional)')
    // await enterValueFor('NN7 3NN', 'Postcode')
    // await continueJourney()

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
