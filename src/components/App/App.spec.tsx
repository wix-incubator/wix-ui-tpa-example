import * as React from 'react';
import {mount} from 'enzyme';
import App from './App';

declare let Wix: any;

describe('App', () => {
  let wrapper;

  afterEach(() => wrapper.detach());
  beforeEach(() => {
    window['Wix'] = {
      Utils: {
        getViewMode: () => 'site'
      }
    };
  });

  it('renders a title correctly', () => {
    wrapper = mount(
      <App/>,
      {attachTo: document.createElement('div')}
    );
    expect(wrapper.find('h2').length).toBe(1);
  });
});
