class HomePage {
  get heading() {
    return $('//h1');
  }

  get usernameField() {
    return $("//input[@name='username']");
  }

  get passwordField() {
    return $("//input[@name='password']");
  }

  get createAccount() {
    return $('//a');
  }

  get loginBtn() {
    return $("//button[normalize-space()='login']");
  }
  async openHomePage() {
    await browser.url('https://practis.co.il/automation/');
  }

  async verifyPageHeading(title) {
    console.log(this.heading.getText());

    await expect(this.heading).toHaveTextContaining(title);
  }

  async loginUser(username, password) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginBtn.click();
  }
}
module.exports = new HomePage();
