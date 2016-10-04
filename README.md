# Galen Layout Checks - Example Framework

## Project structure
The layout checks consist of three parts:
* page specification
* page objects
* tests

The specification describe the elements on the page and their attributes as well as their position in relation to other elements.
The page objects are used to interact with the page, e.g. click on elements.
This example framework uses rules and components to increase readability of the tests. For more information on rules and components,
please see the official Galen documentation.

**Note**: Galen only allows to open one page per session.
To increase the testing speed when checking all pages simply create a round trip that navigates between pages within one session.

## How to use it

To run the tests locally set the test environment in init.js to local. Run a test with the following command:
`galen test tests/insights.test.js --htmlreport report -Dwebdriver.chrome.driver=%PATH_TO_YOUR_CHROMEDRIVER%`

To run the tests in Firefox change the device setup in the init.js by removing "chrome":
`$galen.registerDevice("mobile", inLocalBrowser("mobile emulation", "320x568", ["mobile"]));`

After the test has finished you should find a file called report.html in the report folder. Open it to see the test report.

## Selenium Grid

An example configuration for running tests in selenium grid is available in the init.js. Simply comment out the local browser device registration
and uncomment the selenium grid device registration.
To run the tests a selenium grid is needed. It can be easily set up with docker compose. Install docker and create docker_compose.yml

    selenium-hub:
        image: selenium/hub
        ports:
            - 4444:4444

    firefox:
        image: oldjoe/node-firefox
        ports:
            - 5900
        links:
            - selenium-hub:hub

    chrome:
        image: oldjoe/node-chrome
        ports:
            - 5900
        links:
            - selenium-hub:hub

Run in console/terminal: `docker-compose up -d`

Go to http://localhost:4444/grid/console and check grid and nodes are there

If more nodes are needed run: `docker-compose scale firefox=3`
To run tests in parallel add the `--parallel-tests 3` to the command line call or add it to run.sh

