import { HelloAppPage } from './app.po';

describe('hello-app App', function() {
  let page: HelloAppPage;

  beforeEach(() => {
    page = new HelloAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
