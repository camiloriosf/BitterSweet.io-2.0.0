import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { graphql, compose } from 'react-apollo';
import { translate } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';
import Hero from './quote/Hero';
import Prices from './quote/Prices';
import Comments from './quote/Comments';
import Send from './quote/Send';
import NDA from './quote/01_NDA';
import Platforms from './quote/02_Platforms';
import Pages from './quote/03_Pages';
import Design from './quote/04_Design';
import Authentication from './quote/05_Authentication';
import Data from './quote/06_Data';
import GeoLocation from './quote/07_GeoLocation';
import Communication from './quote/08_Communication';
import APIs from './quote/09_APIs';
import Commerce from './quote/10_Commerce';
import Admin from './quote/11_Admin';
import Product from './quote/12_Product';
import Time from './quote/13_Time';
import fetchUser from '../lib/queries/fetchUser';
import fetchQuote from '../lib/queries/fetchQuote';

const styleSheet = createStyleSheet('Quote', {

});

class Quote extends Component {
  state = {
    loaded: false,
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.quote) {
      if (nextProps.quote.quote) {
        if (nextProps.quote.quote.id) {
          this.setState({ loaded: true });
        }
      }
    }
  }

  checkQuote = () => {
    if (!this.state.loaded) {
      return ('Loading ...');
    }

    return (
      <span>
        <NDA NDA={this.props.quote.quote.NDA} id={this.props.quote.quote.id} />
        <Platforms />
        <Pages />
        <Design />
        <Authentication />
        <Data />
        <GeoLocation />
        <Communication />
        <APIs />
        <Commerce />
        <Admin />
        <Product />
        <Time />
        <Prices />
        <Comments />
        <Send />
        <Footer />
      </span>
    );
  }

  render() {
    return (
      <div >
        <Header url={this.props.url} />
        <Hero />
        {this.checkQuote()}
      </div>
    );
  }
}

export default
  translate(['common'])(compose(
      graphql(fetchUser, { props: data => data, name: 'user' }),
      graphql(fetchQuote, { props: data => data, options: props => ({ variables: { token: props.user.user.token } }), skip: props => !props.user || props.user.loading, name: 'quote' }),
    )(withStyles(styleSheet)(Quote)));
