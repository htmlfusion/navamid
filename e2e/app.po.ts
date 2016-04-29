export class NavamidPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('navamid-app p')).getText();
  }
}
