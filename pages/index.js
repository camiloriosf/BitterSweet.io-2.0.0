import React from 'react';
import MainLayout from '../components/MainLayout';
import HeroTest from '../components/Hero';
import Services from '../components/Services';
import FAQ from '../components/FAQ';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Index() {
  return (
    <MainLayout title="BitterSweet.io - Welcome">
      <div style={styles.root}>
        <section id="hero" />
        <HeroTest />
        <section id="services" />
        <Services />
        <section id="faq" />
        <FAQ />
      </div>
    </MainLayout>
  );
}

export default Index;
