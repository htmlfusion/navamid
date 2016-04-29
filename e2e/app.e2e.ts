import { NavamidPage } from './app.po';

describe('navamid App', function() {
  let page: NavamidPage;

  beforeEach(() => {
    page = new NavamidPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('navamid Works!');
  });
});
