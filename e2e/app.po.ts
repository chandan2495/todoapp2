export class Todoapp2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('todoapp2-app h1')).getText();
  }
}
