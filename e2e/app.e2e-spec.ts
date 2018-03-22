import { TutuPage } from './app.po';

describe('tutu App', function() {
  let page: TutuPage;

  beforeEach(() => {
    page = new TutuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
