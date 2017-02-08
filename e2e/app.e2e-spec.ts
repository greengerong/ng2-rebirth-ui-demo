import { Ng2RebirthUiDemoPage } from './app.po';

describe('ng2-rebirth-ui-demo App', function() {
  let page: Ng2RebirthUiDemoPage;

  beforeEach(() => {
    page = new Ng2RebirthUiDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
