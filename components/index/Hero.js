import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import Slide from 'material-ui/transitions/Slide';
import Fade from 'material-ui/transitions/Fade';
import Router from 'next/router';
import { logEvent } from '../../tools/analytics';

const styleSheet = createStyleSheet('Hero', {
  section: {
    padding: '0px 10px 0px 10px',
  },
  pad1: {
    marginTop: '7%',
  },
  pad2: {
    marginTop: '1%',
  },
  pad3: {
    marginTop: '3%',
  },
  pad4: {
    marginTop: '7%',
  },
  subTitle: {
    maxWidth: 700,
    margin: '0 auto',
  },
  button: {
    minWidth: 200,
    minHeight: 40,

  },
  crop1: {
    width: 940,
    height: 250,
    overflow: 'hidden',
    margin: '0 auto',
    position: 'relative',
  },
  crop2: {
    width: 626,
    height: 250,
    overflow: 'hidden',
    margin: '0 auto',
    position: 'relative',
  },
  mockup1: {
    position: 'absolute',
    zIndex: 900000,
  },
  mockup11: {
    position: 'absolute',
    left: -157,
    zIndex: 900000,
  },
  mockup2: {
    position: 'absolute',
    zIndex: 700000,
  },
  mockup3: {
    position: 'absolute',
    zIndex: 700000,
  },
  quote: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  anchor: {
    textDecoration: 'none',
  },
});

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  handleClick = (action) => {
    if (this.props.id) {
      logEvent('click', action);
    }
    Router.push('/quote');
  };

  handleChange = (isVisible) => {
    if (this.props.id) {
      if (isVisible !== this.state.isVisible && this.props.id) {
        if (isVisible) logEvent('section', 'hero');
        this.setState({ isVisible });
      }
    }
  };

  renderView = () => (
    <Grid container justify="center" align="flex-start">
      <Grid item xs={12} sm={12} className={this.props.classes.pad1}>
        <Fade enterTransitionDuration={500} in>
          <Typography type="display3" align="center">
            {this.props.t('hero.title')}
          </Typography>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={12} className={this.props.classes.pad2}>
        <Fade enterTransitionDuration={1000} in>
          <Typography type="headline" align="center" className={this.props.classes.subTitle}>
            {this.props.t('hero.subtitle')}
          </Typography>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={12} className={this.props.classes.pad3}>
        <Grid container justify="center" align="center" >
          <div className={this.props.classes.quote}>
            <Fade enterTransitionDuration={1500} in>
              <Button raised color="accent" className={this.props.classes.button} onClick={() => this.handleClick('hero_quote')}>
                <Typography type="title" align="center" color="inherit">{this.props.t('hero.button')}</Typography>
              </Button>
            </Fade>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} className={this.props.classes.pad4}>
        <Hidden smDown>
          <div className={this.props.classes.crop1}>
            <Slide direction="up" enterTransitionDuration={500} in><img src="/static/home_mockups_1.png" alt="WebSite Mockup 1" className={this.props.classes.mockup1} /></Slide>
            <Slide direction="up" enterTransitionDuration={1000} in><img src="static/home_mockups_2.png" alt="WebSite Mockup 2" className={this.props.classes.mockup2} /></Slide>
            <Slide direction="up" enterTransitionDuration={1000} in><img src="static/home_mockups_3.png" alt="WebSite Mockup 3" className={this.props.classes.mockup3} /></Slide>
          </div>
        </Hidden>
        <Hidden mdUp xsDown>
          <div className={this.props.classes.crop2}>
            <img src="/static/home_mockups_1.png" alt="WebSite Mockup 1" className={this.props.classes.mockup11} />
          </div>
        </Hidden>
      </Grid>
    </Grid>
    )

  render() {
    return (
      <VisibilitySensor onChange={this.handleChange} active={!this.state.isVisible} delayedCall >
        <div className={this.props.classes.section}>
          {this.renderView()}
        </div>
      </VisibilitySensor>
    );
  }
}


export default translate(['common'])(withStyles(styleSheet)(Hero));

