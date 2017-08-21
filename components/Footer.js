import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import EmailIcon from 'material-ui-icons/Email';
import SettingsEthernetIcon from 'material-ui-icons/SettingsEthernet';
import CallIcon from 'material-ui-icons/Call';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import Router from 'next/router';
import { logEvent } from '../tools/analytics';

const styles = {
  section: {
    background: grey[900],
    padding: '10px 10px 10px 10px',
  },
  div: {
    borderStyle: 'solid',
    borderWidth: '0px 0px 1px 0px',
    borderColor: grey[800],
    maxWidth: 1200,
    padding: 30,
    margin: '0 auto',
  },
  middleDiv: {
    borderStyle: 'solid',
    borderWidth: '0px 0px 1px 0px',
    borderColor: grey[800],
    maxWidth: 1200,
    padding: '30px 10px 60px 10px',
    margin: '0 auto',
  },
  lastDiv: {
    maxWidth: 1200,
    padding: 10,
    margin: '0 auto',
  },
  contactDiv: {
    textAlign: 'center',
  },
  title: {
    color: grey[400],
  },
  contact: {
    color: grey[400],
  },
  contactInfo: {
    color: grey[600],
  },
  button: {
    background: grey[400],
  },
  buttonTypo: {
    color: grey[900],
  },
  quote: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  anchor: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  icon: {
    fill: grey[600],
  },
};

class Footer extends Component {
  state = {
    isVisible: null,
  };

  handleClick = (action) => {
    if (this.props.id) {
      logEvent('click', action);
    }
    Router.push('/quote');
  };

  handleChange = (isVisible) => {
    if (this.props.id) {
      if (isVisible !== this.state.isVisible) {
        if (isVisible) logEvent('section', 'footer');
        this.setState({ isVisible });
      }
    }
  };

  render() {
    return (
      <VisibilitySensor
        onChange={this.handleChange}
        active={!this.state.isVisible}
        delayedCall
        minTopValue={300}
        partialVisibility
      >
        <div className={this.props.classes.section}>
          <Grid container justify="center" align="center">
            <Grid item xs={12} sm={12}>
              <div className={this.props.classes.div}>
                <Typography type="display1" align="center" className={this.props.classes.title}>{this.props.t('name')}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div className={this.props.classes.middleDiv}>
                <Grid container justify="center" align="center">
                  <Grid item xs={12} sm={3}>
                    <div className={this.props.classes.contactDiv}>
                      <a href="mailto:contact@bittersweet.io?Subject=Hi!" target="_top" className={this.props.classes.anchor}>
                        <EmailIcon className={this.props.classes.icon} />
                        <Typography type="button" align="center" className={this.props.classes.contact}>{this.props.t('footer.mail.title')}</Typography>
                        <Typography type="subheading" align="center" className={this.props.classes.contactInfo}>{this.props.t('footer.mail.subtitle')}</Typography>
                      </a>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <div className={this.props.classes.quote}>
                      <div className={this.props.classes.contactDiv} >
                        <span role="presentation" className={this.props.classes.anchor} onClick={() => this.handleClick('hero_quote')}>
                          <SettingsEthernetIcon className={this.props.classes.icon} />
                          <Typography type="button" align="center" className={this.props.classes.contact}>{this.props.t('footer.quote.title')}</Typography>
                          <Typography type="subheading" align="center" className={this.props.classes.contactInfo}>{this.props.t('footer.quote.subtitle')}</Typography>
                        </span>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div className={this.props.classes.lastDiv}>
                <Typography type="subheading" align="center" className={this.props.classes.contactInfo}>&copy; 2017 BitterSweet.io all rights reserved</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </VisibilitySensor>
    );
  }
}

export default translate(['common'])(withStyles(styles, { name: 'Footer' })(Footer));
