#!/bin/sh

echo "run_id: $RUN_ID"

npx wdio run ./wdio.conf.js

./bin/publish-tests.sh

# At the end of the test run, if the suite has failed we write a file called 'FAILED'
if [ -f FAILED ]; then
  echo "test suite failed"
  cat ./FAILED
  exit 1
fi

echo "test suite passed"
exit 0
