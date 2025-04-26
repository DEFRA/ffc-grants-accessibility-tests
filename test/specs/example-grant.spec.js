import { initialiseAccessibilityChecking, analyseAccessibility, generateAccessibilityReports } from '../accessibility/accessibility-checking.js'
import { continueJourney, ensureUrl, navigateBack, selectOption, startJourney, submitApplication } from '../journey-actions.js'

describe('Example Grant', () => {
  it('should analyse accessibility on all Example Grant pages', async () => {
    await initialiseAccessibilityChecking()

    await browser.url('/example-grant/start')

    // start
    await ensureUrl('start')
    await analyseAccessibility()
    await startJourney()

    // are-you-in-england
    await ensureUrl('are-you-in-england')
    await analyseAccessibility()
    await selectOption('No')
    await continueJourney()

    // you-must-be-in-england
    await ensureUrl('you-must-be-in-england')
    await analyseAccessibility()
    await navigateBack()

    // are-you-in-england
    await ensureUrl('are-you-in-england')
    await selectOption('Yes')
    await continueJourney()

    // what-is-your-business
    await ensureUrl('what-is-your-business')
    await analyseAccessibility()
    await selectOption('A grower or producer of agricultural or horticultural produce'),
    await continueJourney()

    // summary
    await ensureUrl('summary')
    await analyseAccessibility()
    await submitApplication()

    // status
    await ensureUrl('status')
    await analyseAccessibility()

    generateAccessibilityReports('example-grant')
  });
});
