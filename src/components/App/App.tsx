import * as React from 'react';
import * as PropTypes from 'prop-types';
import {TpaInput, TpaInputProps} from 'wix-ui-tpa/Input';
import {TpaToggleSwitch} from 'wix-ui-tpa/ToggleSwitch';
import {ToggleSwitchProps} from 'wix-ui-core/ToggleSwitch';
import styleProcessor from 'wix-style-processor';
import {withStylable} from 'wix-ui-core/dist/src';
import inputStyles from './Input.st.css';
import toggleStyles from './Toggle.st.css';

interface AppProps {}

export const InputExample = withStylable<TpaInputProps>(TpaInput, inputStyles, () => null);
export const ToggleExample = withStylable<ToggleSwitchProps>(TpaToggleSwitch, toggleStyles, () => null);

export default class App extends React.Component<AppProps, any> {
  static propTypes = {
    t: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disabled: false
    };
  }

  componentWillMount() {
    styleProcessor.init();
  }

  render() {
    return (
      <div>
        <h2>This is a demo TPA</h2>
        <InputExample/>
        <ToggleExample onChange={() => this.setState({checked: !this.state.checked})}
                       disabled={this.state.disabled}
                       checked={this.state.checked}/>
      </div>
    );
  }
}
