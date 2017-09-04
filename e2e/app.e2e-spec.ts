import { TestflexPage } from './app.po';

describe('testflex App', () => {
  let page: TestflexPage;

  beforeEach(() => {
    page = new TestflexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
