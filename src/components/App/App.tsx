import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Text, TYPOGRAPHY } from 'wix-ui-tpa/Text';
import { Button } from 'wix-ui-tpa/Button';
import styles from './App.st.css';

interface AppProps {}
interface AppState {
  numOfClicks: number;
}

export default class App extends React.Component<AppProps, AppState> {
  static propTypes = {
    t: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: 0,
    };
  }

  render() {
    const { numOfClicks } = this.state;

    return (
      <div {...styles('root', {}, this.props)}>
        <Text className={styles.text} typography={TYPOGRAPHY.largeTitle}>
          This is a demo TPA
        </Text>
        <br />
        <Text className={styles.text} typography={TYPOGRAPHY.runningText}>
          You clicked the button {numOfClicks} time
          {numOfClicks !== 1 ? 's' : ''}
        </Text>
        <br />
        <Button
          className={styles.button}
          onClick={() => this.setState({ numOfClicks: numOfClicks + 1 })}
        >
          Click me
        </Button>
      </div>
    );
  }
}
