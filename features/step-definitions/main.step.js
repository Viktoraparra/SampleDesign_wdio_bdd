import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import mainPage from '../pageobjects/main.page';

Then(/^verify button Do1 and do2 behavior of availability$/, async () => {
  try {
    await mainPage.buttonsValidation();
  } catch (error) {
    console.log(error);
  }
  await mainPage.buttonsValidation();
});

Then(/^increment text size and validate increment$/, async () => {
  await mainPage.textIncrease();
});

Then(/^descrease text size and validate decrease$/, async () => {
  await mainPage.textDecrease();
});

Then(
  /^place background (.+) and verify color change of background$/,
  async (color) => {
    try {
      await mainPage.backgroundColorSet(color);
    } catch (error) {
      console.log(error);
    }
  }
);
