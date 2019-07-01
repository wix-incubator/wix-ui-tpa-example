import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import {TPAComponentProvider} from 'wix-ui-tpa/TPAComponentsConfig';
import App from './components/App';
import i18n from './i18n';

const locale = window.__LOCALE__;
const staticsBaseUrl = window.__STATICS_BASE_URL__;

ReactDOM.render(
  <I18nextProvider i18n={i18n({ locale, baseUrl: staticsBaseUrl })}>
      <TPAComponentProvider value={{mobile: false, rtl: false}}>
          <App/>
      </TPAComponentProvider>
  </I18nextProvider>,
  document.getElementById('root'),
);
