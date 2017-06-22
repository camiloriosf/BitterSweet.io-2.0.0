import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { I18nextProvider } from 'react-i18next';
import startI18n from '../tools/startI18n';
import { getTranslation, getLanguage } from '../tools/translationHelpers';
import App from '../components/App';
import Header from '../components/Header';
import HeroTest from '../components/Hero';
import Services from '../components/Services';
import How from '../components/How';
import Pricing from '../components/Pricing';
import Quote from '../components/Quote';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Tools from '../components/Tools';
import Languages from '../components/Languages';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const lang = 'en';

class Index extends Component {
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
            <section id="home" />
            <Header />
            <VisibilitySensor onChange={this.onChange} />
            <section id="hero" />
            <HeroTest />
            <section id="services" />
            <Services />
            <section id="how" />
            <How />
            <section id="pricing" />
            <Pricing />
            <section id="quote" />
            <Quote />
            <section id="faq" />
            <FAQ />
            <section id="contact" />
            <Contact />
            <Footer />
            <Languages />
            {this.state.show ? <Tools /> : null}
          </div>
        </I18nextProvider>
      </App>
    );
  }
}

export default Index;
