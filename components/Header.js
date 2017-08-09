// Import React Components
import React, { Component } from 'react';
// Import Material-UI components
import { createStyleSheet } from 'material-ui/styles';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
// Import Extra Libraries
import { translate } from 'react-i18next';
import Link from 'next/link';
// Create Component StyleSheet
const styleSheet = createStyleSheet('Header', {
  root: {
    width: '100%',
  },
  appBar: {
    boxShadow: 'none',
    backgroundColor: '#fff',
    border: 0,
  },
  title: {
    flex: 1,
    textAlign: 'left',
    padding: 10,
  },
  titleQuote: {
    flex: 1,
    textAlign: 'center',
    cursor: 'pointer',
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

  renderTitle = () => {
    if (this.props.url.pathname !== '/') {
      return (
        <Link href="/" >
          <Typography type="title" align="center" className={this.props.classes.titleQuote}>
            {this.props.t('name')}
          </Typography>
        </Link>
      );
    }

    return (
      <Typography type="title" align="center" className={this.props.classes.title}>
        {this.props.t('name')}
      </Typography>
    );
  }

  renderLinks = () => {
    if (this.props.url.pathname !== '/') {
      return null;
    }
    return (
      <div className={this.props.classes.buttons}>
        <Link href="/#services" ><Button>{this.props.t('header.what')}</Button></Link>
        <Link href="/#how" replace ><Button>{this.props.t('header.how')}</Button></Link>
        <Link href="/#pricing" ><Button>{this.props.t('header.pricing')}</Button></Link>
        <Link href="/quote" prefetch ><Button>{this.props.t('header.quote')}</Button></Link>
        <Link href="/#faq" ><Button>{this.props.t('header.faq')}</Button></Link>
        <Link href="/#contact" ><Button>{this.props.t('header.contact')}</Button></Link>
      </div>
    );
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static" className={this.props.classes.appBar}>
          <Toolbar>
            {this.renderTitle()}
            <Hidden smDown>
              {this.renderLinks()}
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// Export Class
export default translate(['common'])(withStyles(styleSheet)(Header));
