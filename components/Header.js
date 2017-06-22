import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import Grid from 'material-ui/Grid';
import { transparent, fullWhite } from 'material-ui/styles/colors';
import { gql, graphql } from 'react-apollo';
import { translate } from 'react-i18next';
import { logEvent } from '../tools/analytics';

const styleSheet = createStyleSheet('Header', {
  root: {
    position: 'relative',
    width: '100%',
    background: transparent,
  },
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    height: 100,
    border: 0,
  },
  title: {
    padding: 0,
    marginTop: 20,
    color: fullWhite,
  },
  buttons: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  anchor: {
    textDecoration: 'none',
  },
  button: {
    color: fullWhite,
  },
});

class Header extends Component {

  handleClick = (action) => {
    if (!this.props.data.loading) {
      logEvent('click', action);
    }
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar className={this.props.classes.appBar} >
          <Toolbar>
            <Grid container justify="center" align="center">
              <Grid item xs={12} sm={12} style={{ padding: 0, marginTop: 20 }}>
                <Hidden xsDown>
                  <div className={this.props.classes.buttons}>
                    <a href="#services" className={this.props.classes.anchor} onClick={() => this.handleClick('header_services')}><Button className={this.props.classes.button}>{this.props.t('header.what')}</Button></a>
                    <a href="#how" className={this.props.classes.anchor} onClick={() => this.handleClick('header_how')}><Button className={this.props.classes.button}>{this.props.t('header.how')}</Button></a>
                    <a href="#pricing" className={this.props.classes.anchor} onClick={() => this.handleClick('header_pricing')}><Button className={this.props.classes.button}>{this.props.t('header.pricing')}</Button></a>
                    <a href="#quote" className={this.props.classes.anchor} onClick={() => this.handleClick('header_quote')}><Button className={this.props.classes.button}>{this.props.t('header.quote')}</Button></a>
                    <a href="#faq" className={this.props.classes.anchor} onClick={() => this.handleClick('header_faq')}><Button className={this.props.classes.button}>{this.props.t('header.faq')}</Button></a>
                    <a href="#contact" className={this.props.classes.anchor} onClick={() => this.handleClick('header_contact')}><Button className={this.props.classes.button}>{this.props.t('header.contact')}</Button></a>
                  </div>
                </Hidden>
              </Grid>
              <Grid item xs={12} sm={12} style={{ padding: 0, margin: 0 }}>
                <Typography type="display1" align="center" className={this.props.classes.title}>
                  {this.props.t('name')}
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const user = gql`
  query User {
    user {
      token
      id
    }
  }
`;

export default translate(['common'])(graphql(user, { props: data => data })(withStyles(styleSheet)(Header)));
