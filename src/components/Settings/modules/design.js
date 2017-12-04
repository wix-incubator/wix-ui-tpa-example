import UI from 'editor-ui-lib';
import React from 'react';

export default class Design extends React.Component {
  render() {
    return (
      <div>
        <UI.sectionDividerLabeled label="Button"/>
        <hr className="divider-long"/>

        <UI.colorPickerSlider
          title="Button background"
          wix-param="_btnBgColor"
          startWithColor="color-8"
          startWithOpacity={0.1}
          />

        <hr className="divider-long"/>

        <UI.fontAndColorPicker
          title="Button font and color"
          wix-param-font="_btnFont"
          wix-param-color="_btnTextColor"
          startWithColor="color-1"
          startWithTheme="font_8"
          infoText="some information text should be here"
          />
      </div>
    );
  }
}
