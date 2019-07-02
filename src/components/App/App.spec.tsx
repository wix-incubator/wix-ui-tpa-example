import * as React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  afterEach(() => wrapper.detach());
  beforeEach(() => {
    window['Wix'] = { // tslint:disable-line
      Utils: {
        getViewMode: () => 'site',
      },
    };
  });

  it('renders a title correctly', () => {
    wrapper = mount(<App />, { attachTo: document.createElement('div') });
    expect(
      wrapper
        .find('span')
        .first()
        .text(),
    ).toBe('This is a demo TPA');
  });
});
