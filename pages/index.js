import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import VisibilitySensor from 'react-visibility-sensor';
import Hidden from 'material-ui/Hidden';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/index/Hero';
import Services from '../components/index/Services';
import How from '../components/index/How';
import Pricing from '../components/index/Pricing';
import FAQ from '../components/index/FAQ';
import Contact from '../components/index/Contact';
import Up from '../components/index/Up';
import Nav from '../components/index/Nav';
import Languages from '../components/Languages';
import i18n from '../tools/i18n';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Index extends Component {
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
      <I18nextProvider i18n={i18n}>
        <App>
          <div style={styles.root}>
            <section id="home" />
            <Header url={this.props.url} />
            <VisibilitySensor onChange={this.onChange} />
            <section id="hero" />
            <Hero />
            <section id="services" />
            <Services />
            <section id="how" />
            <How />
            <section id="pricing" />
            <Pricing />
            <section id="faq" />
            <FAQ />
            <section id="contact" />
            <Contact />
            <Footer />
            <Languages />
            <Hidden mdUp><Nav url={this.props.url} /></Hidden>
            {this.state.show ? <Up /> : null}
          </div>
        </App>
      </I18nextProvider>
    );
  }
}

export default Index;
