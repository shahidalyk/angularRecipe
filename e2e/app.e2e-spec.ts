import { AngUdemPage } from './app.po';

describe('ang-udem App', () => {
  let page: AngUdemPage;

  beforeEach(() => {
    page = new AngUdemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
