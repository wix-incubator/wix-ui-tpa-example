import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import * as TPAComponentsConfig from 'wix-ui-tpa/TPAComponentsConfig';
import styleProcessor from 'wix-style-processor';
import App from './components/App';
import i18n from './i18n';
import '../mocks';

const locale = window.__LOCALE__;
const staticsBaseUrl = window.__STATICS_BASE_URL__;

const TPAComponentsProvider = TPAComponentsConfig.TPAComponentsProvider;

styleProcessor.init().then(() => {
  ReactDOM.render(
    <I18nextProvider i18n={i18n({ locale, baseUrl: staticsBaseUrl })}>
      <TPAComponentsProvider value={{ mobile: false, rtl: false }}>
        <App />
      </TPAComponentsProvider>
    </I18nextProvider>,
    document.getElementById('root'),
  );
});
