import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import Fade from 'material-ui/transitions/Fade';
import Router from 'next/router';
import { logEvent } from '../../tools/analytics';

const styleSheet = createStyleSheet('Hero', {
  section: {
    padding: '0px 10px 0px 10px',
  },
  pad1: {
    marginTop: 30,
  },
  pad2: {
    marginTop: 10,
  },
  pad3: {
    marginTop: 10,
  },
  pad4: {
    marginTop: 10,
  },
  subTitle: {
    maxWidth: 700,
    margin: '0 auto',
  },
  button: {
    minWidth: 200,
    minHeight: 40,
  },
  image: {
    width: '100%',
  },
  crop1: {
    margin: '0 auto',
    paddingLeft: 200,
    paddingRight: 200,
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
            <img src="/static/cabecera_home.png" alt="Make your business easier" className={this.props.classes.image} />
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

