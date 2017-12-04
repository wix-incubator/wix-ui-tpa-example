import UI from 'editor-ui-lib';
import React from 'react';
import Design from './modules/design';

export default class settings extends React.Component {
  render() {
    return (
      <UI.appSettings>
        <UI.panelTabs defaultTabIndex={0}>
          <Design tab="Design"/>
          <hr className="divider-short"/>
        </UI.panelTabs>
      </UI.appSettings>
    );
  }
}
