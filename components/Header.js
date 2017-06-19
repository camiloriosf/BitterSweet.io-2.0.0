import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import Grid from 'material-ui/Grid';
import { transparent, fullWhite } from 'material-ui/styles/colors';
import Scrollspy from 'react-scrollspy';
import { gql, graphql } from 'react-apollo';
import { logEvent } from '../lib/analytics';

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
  scrollspy: {
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

function Header(props) {
  const handleClick = (action) => {
    if (!this.props.data.loading) {
      logEvent('click', action);
    }
  };

  return (
    <div className={props.classes.root}>
      <AppBar className={props.classes.appBar} >
        <Toolbar>
          <Grid container justify="center" align="center">
            <Grid item xs={12} sm={12} style={{ padding: 0, marginTop: 20 }}>
              <Hidden xsDown>
                <Scrollspy className={props.classes.scrollspy}>
                  <a href="#services" className={props.classes.anchor} onClick={() => handleClick('header_services')}><Button className={props.classes.button}>WHAT WE DO</Button></a>
                  <a href="#how" className={props.classes.anchor} onClick={() => handleClick('header_how')}><Button className={props.classes.button}>HOW</Button></a>
                  <a href="#pricing" className={props.classes.anchor} onClick={() => handleClick('header_pricing')}><Button className={props.classes.button}>PRICING</Button></a>
                  <a href="#quote" className={props.classes.anchor} onClick={() => handleClick('header_quote')}><Button className={props.classes.button}>QUOTE</Button></a>
                  <a href="#faq" className={props.classes.anchor} onClick={() => handleClick('header_faq')}><Button className={props.classes.button}>FAQ</Button></a>
                  <a href="#contact" className={props.classes.anchor} onClick={() => handleClick('header_contact')}><Button className={props.classes.button}>CONTACT</Button></a>
                </Scrollspy>
              </Hidden>
            </Grid>
            <Grid item xs={12} sm={12} style={{ padding: 0, margin: 0 }}>
              <Typography type="display1" align="center" className={props.classes.title}>BitterSweet.io</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const user = gql`
  query User {
    user {
      token
      id
    }
  }
`;

export default graphql(user, { props: data => data })(withStyles(styleSheet)(Header));
