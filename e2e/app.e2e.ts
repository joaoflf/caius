import { CaiusPage } from './app.po';

describe('caius App', function() {
  let page: CaiusPage;

  beforeEach(() => {
    page = new CaiusPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('caius works!');
  });
});
