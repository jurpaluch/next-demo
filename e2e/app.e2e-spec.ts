import { NextDemoPage } from './app.po';

describe('next-demo App', () => {
  let page: NextDemoPage;

  beforeEach(() => {
    page = new NextDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
