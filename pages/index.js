import React from 'react';
import App from '../components/App';
import Header from '../components/Header';
import HeroTest from '../components/Hero';
import Services from '../components/Services';
import How from '../components/How';
import FAQ from '../components/FAQ';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Index() {
  return (
    <App>
      <div style={styles.root}>
        <Header />
        <section id="hero" />
        <HeroTest />
        <section id="services" />
        <Services />
        <section id="how" />
        <How />
        <section id="faq" />
        <FAQ />
      </div>
    </App>
  );
}

export default Index;
