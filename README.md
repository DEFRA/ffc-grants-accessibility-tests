# ffc-grants-accessibility-tests

This repository contains accessibility tests covering individual FFC Grants application journeys. The tests do not fail but will generate reports detailing WCAG violations and recommendations for each journey.

The tests use WebdriverIO alongside the Defra CCTS WCAG checker library. See https://dev.azure.com/defragovuk/CCTS-QA%20Automation/_wiki/wikis/CCTS-QA-Automation.wiki/31058/WCAG-Checker-for-accessibility-automation

### Running locally

Set the `baseUrl` in `wdio.local.conf.js` to an instance of service `forms-runner-v2`, either hosted or local, and run the following command. 

```bash
npm run test:local
```

Reports are written to `./reports`.

### CDP Portal

Tests are run from the CDP Portal under the `Test Suites` section. Before any changes can be run, a new docker image must be built, this will happen automatically when a pull request is merged into the `main` branch. The reports from the test run are then available through the portal.

### Licence

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

<http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3>

The following attribution statement MUST be cited in your products and applications when using this information.

> Contains public sector information licensed under the Open Government licence v3

#### About the licence

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable
information providers in the public sector to license the use and re-use of their information under a common open
licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.
