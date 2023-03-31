# Cypress Automation Framework

This repository contains an end-to-end test automation framework built with [Cypress](https://www.cypress.io/)

The framework follows the Page Object pattern and includes reusable commands and data-driven tests.

## Prerequisites

- [Node.js](https://nodejs.org/en) installed on your local machine.
- [Git](https://git-scm.com/) installed on your local machine.

## Setup

1. Clone the repository to your local machine:

```bash
git clone https://github.com/aliyewusal/Cypress_Automation.git
```

2. Navigate to the cloned directory:

```bash
cd Cypress_Automation
```

3. Install the dependencies:

```bash
npm install

```

## Running the Tests

1. To run the tests in interactive mode, run:

```bash
npm run cypress:open

```

This will open the Cypress Test Runner, where you can select which test file(s) to run and see the test results.

2. To run the tests in headless mode and generate a report, run:

```bash
npm run cypress:run

```

This will run all the tests in headless mode and generate an HTML report in the cypress/reports/html directory.

## Project Structure

The project structure follows the following convention:

- 'cypress/e2e/integration': This directory contains the test(spec) files.
- 'cypress/e2e/integration/examples/pageObjacts': This directory contains the page object files organized by page.
- 'cypress/support/commands.js': This file contains the reusable custom commands used across the test files.
- 'cypress/fixtures: This directory contains the test data used in the test files.
