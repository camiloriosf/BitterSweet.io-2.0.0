import React, { Component } from 'react';
import Hidden from 'material-ui/Hidden';
import { translate } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Languages from './Languages';
import Hero from './index/Hero';
import Services from './index/Services';
import How from './index/How';
import Pricing from './index/Pricing';
import FAQ from './index/FAQ';
import Contact from './index/Contact';
import Up from './index/Up';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }

  hideBar = () => {
    this.setState({ scrollY: window.scrollY });
  }

  render() {
    return (
      <div>
        <section id="home" />
        <Header url={this.props.url} />
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
        {this.state.scrollY > 100 ? <Up /> : null}
      </div>
    );
  }
}

export default translate(['common'])(Index);
