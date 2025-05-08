# ffc-grants-accessibility-tests

This is the accessibility test suite for non-land based grant application journeys maintained by Grant Application Enablement. The tests do not assert but will generate reports detailing WCAG violations and recommendations for each journey.

The suite uses WebdriverIO with the Defra CCTS WCAG checker library. See https://dev.azure.com/defragovuk/CCTS-QA%20Automation/_wiki/wikis/CCTS-QA-Automation.wiki/31058/WCAG-Checker-for-accessibility-automation.

## Running the test suite

There are 2 WebdriverIO config files:

```bash
wdio.local.conf.js
------------------
# used to run tests locally using a local instance of Chrome
npm run test:local
```

```bash
wdio.conf.js
------------
# used to run tests in the portal against the hosted Chrome instance
```

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
