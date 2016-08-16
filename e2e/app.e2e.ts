import { Todoapp2Page } from './app.po';

describe('todoapp2 App', function() {
  let page: Todoapp2Page;

  beforeEach(() => {
    page = new Todoapp2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('todoapp2 works!');
  });
});
