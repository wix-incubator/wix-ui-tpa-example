import React from 'react';
import ToggleSwitch from 'wix-ui-tpa/ToggleSwitch';
import Button from 'wix-ui-tpa/Button';
import {TpaStylesProvider} from 'wix-ui-tpa';
import Wix from 'Wix';

// const buttonFallbackBindings = {
//   colors: {
//     backgroundColor: 'color_8',
//     color: 'color-1'
//   },
//   fonts: {
//     fonts: 'Body-M'
//   }
// };

const buttonWixBindings = {
  fonts: '_btnFont',
  backgroundColor: '_btnBgColor',
  color: '_btnTextColor'
};

const toggleSwitchWixBindings = {
  backgroundColor: '_btnBgColor'
};

class Widget extends React.Component {
  render() {
    return (
      <TpaStylesProvider Wix={Wix}>
        <div className="wix-style-sample">
          <h2 className="sample-element sample-title">TPA Dummy App</h2>
          <div style={{width: '300px'}}>
            <h3 style={{marginBottom: '10px'}}>wix-style-react Button</h3>
            <Button wixBindings={buttonWixBindings}>Hello</Button><br/><br/>
            <ToggleSwitch wixBindings={toggleSwitchWixBindings}>Hello</ToggleSwitch><br/><br/>
            <h3>Regular button</h3>
            <button className="sample-element sample-button">Click Me</button><br/><br/><br/><br/>
          </div>
        </div>
      </TpaStylesProvider>
    );
  }
}

export default Widget;
