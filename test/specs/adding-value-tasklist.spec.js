import { initialiseAccessibilityChecking, analyseAccessibility, generateAccessibilityReports } from '../accessibility-checking.js'
import { continueJourney, ensureUrl, selectOption, selectTask } from '../journey-actions.js'

describe('Adding Value Task List', () => {
  it('should analyse accessibility on sample Adding Value Task List pages', async () => {
    await initialiseAccessibilityChecking()

    await browser.url('/adding-value-tasklist/tasklist')

    // tasklist
    await ensureUrl('tasklist')
    await analyseAccessibility()
    await selectTask('Business status')

    // business-status/nature-of-business
    await ensureUrl('business-status/nature-of-business')
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('A grower or producer of agricultural or horticultural produce')
    await continueJourney()

    // business-status/legal-status
    await ensureUrl('business-status/legal-status')
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('Sole trader')
    await continueJourney()

    // business-status/country
    await ensureUrl('business-status/country')
    await analyseAccessibility()
    await continueJourney()
    await analyseAccessibility('[validation]')
    await selectOption('Yes')
    await continueJourney()

    // business-status/summary
    await ensureUrl('business-status/summary')
    await analyseAccessibility()

    generateAccessibilityReports('adding-value-tasklist')
  });
});
