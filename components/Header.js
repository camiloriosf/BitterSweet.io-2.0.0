import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import Grid from 'material-ui/Grid';
import { transparent } from 'material-ui/styles/colors';
import Scrollspy from 'react-scrollspy';

const styleSheet = createStyleSheet('Header', {
  root: {
    position: 'relative',
    width: '100%',
    background: transparent,
  },
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    background: 'inherit',
  },
  title: {
    flex: 1,
    padding: 0,
    marginTop: 20,
  },
  scrollspy: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  anchor: {
    textDecoration: 'none',
  },
});

class Header extends Component {
  state = {
    open: false,
  };

  toggleDrawer = (open) => {
    this.setState({ open });
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar className={this.props.classes.appBar} >
          <Toolbar>
            <Grid container justify="center" align="flex-start">
              <Grid item xs={12} sm={12} style={{ padding: 0 }}>
                <Hidden xsDown>
                  <Scrollspy className={this.props.classes.scrollspy}>
                    <a href="#services" className={this.props.classes.anchor}><Button contrast>WHAT WE DO</Button></a>
                    <a href="#how" className={this.props.classes.anchor}><Button contrast>HOW</Button></a>
                    <a href="#pricing" className={this.props.classes.anchor}><Button contrast>PRICING</Button></a>
                    <a href="#quote" className={this.props.classes.anchor}><Button contrast>QUOTE</Button></a>
                    <a href="#faq" className={this.props.classes.anchor}><Button contrast>FAQ</Button></a>
                    <a href="#contact" className={this.props.classes.anchor}><Button contrast>CONTACT</Button></a>
                  </Scrollspy>
                </Hidden>
              </Grid>
              <Grid item xs={12} sm={12} style={{ padding: 0 }}>
                <Typography type="title" align="center" colorInherit className={this.props.classes.title}>BitterSweet.io</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Header);
