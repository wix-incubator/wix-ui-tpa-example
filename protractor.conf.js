exports.config = {
  framework: 'mocha',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['test/**/*.e2e.js'],
  onPrepare() {
    browser.ignoreSynchronization = true;
  }
};
