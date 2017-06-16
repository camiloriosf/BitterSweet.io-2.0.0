import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
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

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Index extends Component {
  state = {
    show: false,
  };

  onChange = (isVisible) => {
    this.setState({ show: !isVisible });
  };

  render() {
    return (
      <App>
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
          {this.state.show ? <Tools /> : null}
        </div>
      </App>
    );
  }
}

export default Index;
