class MainPage {
  get mainTitle() {
    return $('//h1');
  }
  get do1Btn() {
    return $('#do1');
  }

  get do2Btn() {
    return $('#do2');
  }

  get increaseBtn() {
    return $('#btnIncreaseFont');
  }

  get decreaseBtn() {
    return $('#btnDecreaseFont');
  }
  get text() {
    return $('#textFontSize');
  }

  get setBcBtn() {
    return $('#btnSetBgColor');
  }

  get backgroundColorField() {
    return $("//input[@id='bgColor']");
  }

  get backgroundColorized() {
    return $('#formToColorize');
  }

  async do1btnClick() {
    await this.do1Btn.click();
  }
  async do2btnClick() {
    await this.do2Btn.click();
  }

  async buttonsValidation() {
    await expect(this.do1Btn).toBeClickable();
    await this.do1Btn.click();
    await expect(this.do2Btn).toBeClickable();
    await this.do2Btn.click();
    await expect(this.do1Btn).toBeClickable();
  }

  async textIncrease() {
    let textSize = await this.text.getCSSProperty('font-size');
    let currentTextSize = textSize.parsed.value;
    await this.increaseBtn.click();
    textSize = await this.text.getCSSProperty('font-size');
    if (currentTextSize < textSize.parsed.value) {
      await expect(textSize.parsed.value).toEqual(textSize.parsed.value);
    }
  }

  async textDecrease() {
    let textSize = await await this.text.getCSSProperty('font-size');
    let currentTextSize = textSize.parsed.value;
    await this.decreaseBtn.click();
    textSize = await await this.text.getCSSProperty('font-size');
    if (currentTextSize > textSize.parsed.value) {
      await expect(textSize.parsed.value).toEqual(textSize.parsed.value);
    }
    console.log(textSize);
  }

  async backgroundColorSet(color) {
    let bgcolor = await this.backgroundColorized.getCSSProperty('background');
    let bgcurrent = bgcolor;
    await this.backgroundColorField.setValue(color);
    await this.setBcBtn.click();
    bgcolor = await this.backgroundColorized.getCSSProperty('background');
    if (bgcurrent.value != bgcolor) {
      await expect(color).toEqual(color);
    }
  }
}
export default new MainPage();
