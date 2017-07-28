import React from 'react';
import { I18nextProvider } from 'react-i18next';
import App from '../components/App';
import QuoteLayout from '../components/Quote';
import i18n from '../tools/i18n';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Quote(props) {
  return (
    <App>
      <I18nextProvider i18n={i18n}>
        <div style={styles.root}>
          <QuoteLayout url={props.url} />
        </div>
      </I18nextProvider>
    </App>
  );
}

export default Quote;
