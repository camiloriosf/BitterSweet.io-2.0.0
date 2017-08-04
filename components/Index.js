import React, { Component } from 'react';
import Hidden from 'material-ui/Hidden';
import { translate } from 'react-i18next';
import { gql, graphql } from 'react-apollo';
import { logPageView, setUser } from '../tools/analytics';
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
    if (window.localStorage) {
      if (window.localStorage.getItem('user')) {
        setUser(window.localStorage.getItem('user'));
        logPageView();
      } else {
        this.props.mutate()
          .then((data) => {
            window.localStorage.setItem('user', data.data.createDevice.changedDevice.id);
            setUser(window.localStorage.getItem('user'));
            logPageView();
          });
      }
    }
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
        <Header url={this.props.url} id={window.localStorage.getItem('user')} />
        <section id="hero" />
        <Hero id={window.localStorage.getItem('user')} />
        <section id="services" />
        <Services id={window.localStorage.getItem('user')} />
        <section id="how" />
        <How id={window.localStorage.getItem('user')} />
        <section id="pricing" />
        <Pricing id={window.localStorage.getItem('user')} />
        <section id="faq" />
        <FAQ id={window.localStorage.getItem('user')} />
        <section id="contact" />
        <Contact id={window.localStorage.getItem('user')} />
        <Footer id={window.localStorage.getItem('user')} />
        <Languages />
        <Hidden mdUp><Nav url={this.props.url} /></Hidden>
        {this.state.scrollY > 100 ? <Up id={window.localStorage.getItem('user')} /> : null}
      </div>
    );
  }
}

const mutation = gql`
  mutation{
    createDevice(input:{}){
      changedDevice{
        id
      }
    }
  }
`;

export default translate(['common'])(graphql(mutation)(Index));
