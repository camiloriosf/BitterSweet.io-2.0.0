import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import App from '../components/App';
import QuoteLayout from '../components/Quote';
import i18n from '../tools/i18n';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Quote extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.show === nextState.show) return false;
    return true;
  }

  onChange = (isVisible) => {
    this.setState({ show: !isVisible });
  };

  render() {
    return (
      <App>
        <I18nextProvider i18n={i18n}>
          <div style={styles.root}>
            <QuoteLayout url={this.props.url} />
          </div>
        </I18nextProvider>
      </App>
    );
  }
}

export default Quote;
