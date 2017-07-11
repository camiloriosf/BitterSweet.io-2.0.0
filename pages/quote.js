import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import startI18n from '../tools/startI18n';
import { getTranslation, getLanguage } from '../tools/translationHelpers';
import App from '../components/App';
import QuoteLayout from '../components/Quote';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const lang = 'en';

class Quote extends Component {
  static async getInitialProps() {
    const translationEN = await getTranslation('en', 'common', 'http://localhost:3000/static/locales/');
    const translationES = await getLanguage('es', 'common', 'http://localhost:3000/static/locales/');
    return { translationEN, translationES };
  }

  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.i18n = startI18n(props.translationEN, lang);
    this.i18n.addResourceBundle('es', 'common', props.translationES);
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
        <I18nextProvider i18n={this.i18n}>
          <div style={styles.root}>
            <QuoteLayout url={this.props.url} />
          </div>
        </I18nextProvider>
      </App>
    );
  }
}

export default Quote;
