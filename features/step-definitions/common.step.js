import { Given, When, Then } from '@cucumber/cucumber';
import homePage from '../pageobjects/home.page';
import allureReporter from '@wdio/allure-reporter';

Given(/^Navigating to practice page contains (.+)$/, async (title) => {
  await homePage.openHomePage();
  await homePage.verifyPageHeading(title);
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
  await homePage.loginUser(username, password);
});
