import { App2AngularPage } from './app.po';

describe('app2-angular App', () => {
  let page: App2AngularPage;

  beforeEach(() => {
    page = new App2AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
