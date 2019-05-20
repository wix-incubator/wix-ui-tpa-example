import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as axios from 'axios';
import {I18nextProvider} from 'react-i18next';
import {wixAxiosConfig} from 'wix-axios-config';
import {TPAComponentProvider} from 'wix-ui-tpa/TPAComponentsConfig';
import App from './components/App';
import i18n from './i18n';

const locale = window.__LOCALE__;
const baseURL = window.__BASEURL__;
const staticsBaseUrl = window.__STATICS_BASE_URL__;

wixAxiosConfig(axios, {baseURL});

ReactDOM.render(
  <I18nextProvider i18n={i18n({locale, baseUrl: staticsBaseUrl})}>
    <TPAComponentProvider value={{mobile: false, rtl: false}}>
      <App/>
    </TPAComponentProvider>
  </I18nextProvider>,
  document.getElementById('root')
);
