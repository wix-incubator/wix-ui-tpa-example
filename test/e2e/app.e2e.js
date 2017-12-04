import 'babel-polyfill';
import {expect} from 'chai';
import {beforeAndAfter, app} from './../environment';

describe('React application', () => {

  beforeAndAfter();

  describe('open page', () => {
    it('should display title', async () => {
      await browser.get(app.getUrl('/'));
      expect(await $('h2').getText()).to.equal('Hello World!');
    });
  });
});
