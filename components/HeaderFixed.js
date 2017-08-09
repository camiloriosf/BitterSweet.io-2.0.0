// Import React Components
import React, { Component } from 'react';
// Import Material-UI components
import { createStyleSheet } from 'material-ui/styles';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import Slide from 'material-ui/transitions/Slide';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
// Import Extra Libraries
import { translate } from 'react-i18next';
import Router from 'next/router';
import Link from 'next/link';
// Import Local Files
import { logEvent } from '../tools/analytics';
// Create Component StyleSheet
const styleSheet = createStyleSheet('Header', {
  root: {
    width: '100%',
    position: 'fixed',
    top: 0,
    backgroundColor: '#FFF',
    zIndex: 999999999,
  },
  title: {
    flex: 1,
    textAlign: 'left',
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

  renderLinks = () => (
    <div className={this.props.classes.buttons}>
      <Link href="/#services" prefetch ><Button>{this.props.t('header.what')}</Button></Link>
      <Link href="/#how" prefetch ><Button>{this.props.t('header.how')}</Button></Link>
      <Link href="/#pricing" prefetch ><Button>{this.props.t('header.pricing')}</Button></Link>
      <Link href="/quote" prefetch ><Button>{this.props.t('header.quote')}</Button></Link>
      <Link href="/#faq" prefetch ><Button>{this.props.t('header.faq')}</Button></Link>
      <Link href="/#contact" prefetch ><Button>{this.props.t('header.contact')}</Button></Link>
    </div>
  )

  render() {
    return (
      <Slide direction="down" enterTransitionDuration={1000} in>
        <div className={this.props.classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" align="center" className={this.props.classes.title}>
                {this.props.t('name')}
              </Typography>
              <Hidden smDown>
                {this.renderLinks()}
              </Hidden>
            </Toolbar>
          </AppBar>
        </div>
      </Slide>
    );
  }
}

// Export Class
export default translate(['common'])(withStyles(styleSheet)(Header));
