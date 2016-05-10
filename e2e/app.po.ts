export class CaiusPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('caius-app h1')).getText();
  }
}
