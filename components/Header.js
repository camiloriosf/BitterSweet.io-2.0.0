// Import React Components
import React, { Component } from 'react';
// Import Material-UI components
import { createStyleSheet } from 'material-ui/styles';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
// Import Extra Libraries
import { gql, graphql } from 'react-apollo';
import { translate } from 'react-i18next';
import Router from 'next/router';
import Link from 'next/link';
// Import Local Files
import { logEvent } from '../tools/analytics';
// Create Component StyleSheet
const styleSheet = createStyleSheet('Header', {
  root: {
    width: '100%',
  },
  appBar: {
    boxShadow: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    border: 0,
  },
  title: {
    flex: 1,
    textAlign: 'left',
    cursor: 'pointer',
    position: 'absolute',
    padding: 10,
  },
  buttons: {
    textAlign: 'right',
    margin: 0,
    padding: 0,
  },
  anchor: {
    textDecoration: 'none',
  },
  links: {
    textAlign: 'right',
  },
});
// Create Class
class Header extends Component {

  handleClick = (action) => {
    if (!this.props.data.loading) {
      logEvent('click', action);
    }
  };

  handleQuoteClick = (action) => {
    if (!this.props.data.loading) {
      logEvent('click', action);
    }

    Router.push('/quote');
  };

  renderLinks = () => {
    if (this.props.url.pathname !== '/') {
      return (
        <div className={this.props.classes.buttons}>
          <Link href="/#services"><Button>{this.props.t('header.what')}</Button></Link>
          <Link href="/#how"><Button>{this.props.t('header.how')}</Button></Link>
          <Link href="/#pricing"><Button>{this.props.t('header.pricing')}</Button></Link>
          <Link href="/quote"><Button>{this.props.t('header.quote')}</Button></Link>
          <Link href="/#faq"><Button>{this.props.t('header.faq')}</Button></Link>
          <Link href="/#contact"><Button>{this.props.t('header.contact')}</Button></Link>
        </div>
      );
    }
    return (
      <div className={this.props.classes.buttons}>
        <a href="#services" className={this.props.classes.anchor} onClick={() => this.handleClick('header_services')}><Button>{this.props.t('header.what')}</Button></a>
        <a href="#how" className={this.props.classes.anchor} onClick={() => this.handleClick('header_how')}><Button>{this.props.t('header.how')}</Button></a>
        <a href="#pricing" className={this.props.classes.anchor} onClick={() => this.handleClick('header_pricing')}><Button>{this.props.t('header.pricing')}</Button></a>
        <Button className={this.props.classes.button} onClick={() => this.handleQuoteClick('header_quote')}>{this.props.t('header.quote')}</Button>
        <a href="#faq" className={this.props.classes.anchor} onClick={() => this.handleClick('header_faq')}><Button>{this.props.t('header.faq')}</Button></a>
        <a href="#contact" className={this.props.classes.anchor} onClick={() => this.handleClick('header_contact')}><Button>{this.props.t('header.contact')}</Button></a>
      </div>
    );
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <Link href="/">
          <Typography type="title" align="center" className={this.props.classes.title}>
            {this.props.t('name')}
          </Typography>
        </Link>
        <Hidden smDown>
          {this.renderLinks()}
        </Hidden>
      </div>
    );
  }
}
// Create GraphQL queries mutations
const user = gql`
  query User {
    user {
      token
      id
    }
  }
`;
// Export Class
export default translate(['common'])(graphql(user, { props: data => data })(withStyles(styleSheet)(Header)));
