# Securitize_wdio_bdd

Project for testing Automation Test for Securitize website: https://practis.co.il/automation/

3 Test cases

This project uses an HTML reporter

## Requirements

webdriverIO: 7^

cucumber-framework: 7^

Node.js : 18^

## Install

```
git clone https://github.com/Viktoraparra/Securitize_wdio_bdd.git
```

```
npm install
```

## Run all tests

```
npm run wdio
```

## Report

To create report

```
allure generate allure-results --clean && allure open
```

## to Use Seleniun-Grid

```
Enter wdio.conf.js file

Change
services: ['selenium-standalone'],
to
services: ['Docker'],

validate uncommnet the following lines in capability
  {
      maxInstances: 3,
       browserName: 'firefox',
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 3,
      browserName: 'MicrosoftEdge',
      acceptInsecureCerts: true,
     },

```

```
run in terminal

docker-compose -f docker-compose.yml up -d

wait docker are downloaded and running

run in termninal

npm run wdio or npm run sanity

after complete all test in all browsers

run in terminal

docker-compose -f docker-compose.yml down
```

```

To create report

```

allure generate allure-results --clean && allure open

```

```
