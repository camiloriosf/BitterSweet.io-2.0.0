import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { grey } from 'material-ui/styles/colors';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Scrollspy from 'react-scrollspy';
import EmailIcon from 'material-ui-icons/Email';
import SettingsEthernetIcon from 'material-ui-icons/SettingsEthernet';
import CallIcon from 'material-ui-icons/Call';
import { gql, graphql } from 'react-apollo';
import VisibilitySensor from 'react-visibility-sensor';
import { logEvent } from '../lib/analytics';

const styleSheet = createStyleSheet('Footer', {
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
  scrollspy: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  anchor: {
    textDecoration: 'none',
  },
  icon: {
    fill: grey[600],
  },
});

class Footer extends Component {
  state = {
    isVisible: null,
  };

  handleClick = (action) => {
    if (!this.props.data.loading) {
      logEvent('click', action);
    }
  };

  handleChange = (isVisible) => {
    if (!this.props.data.loading) {
      if (isVisible !== this.state.isVisible) {
        if (isVisible) logEvent('section', 'footer');
        this.setState({ isVisible });
      }
    }
  };

  render() {
    return (
      <div className={this.props.classes.section}>
        <VisibilitySensor onChange={this.handleChange} />
        <Grid container justify="center" align="center">
          <Grid item xs={12} sm={12}>
            <div className={this.props.classes.div}>
              <Typography type="display1" align="center" className={this.props.classes.title}>BitterSweet.io</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div className={this.props.classes.middleDiv}>
              <Grid container justify="center" align="center">
                <Grid item xs={12} sm={3}>
                  <div className={this.props.classes.contactDiv}>
                    <a href="mailto:contact@bittersweet.io?Subject=Hi!" target="_top" className={this.props.classes.anchor}>
                      <EmailIcon className={this.props.classes.icon} />
                      <Typography type="button" align="center" className={this.props.classes.contact}>Mail</Typography>
                      <Typography type="subheading" align="center" className={this.props.classes.contactInfo}>contact@bittersweet.io</Typography>
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Scrollspy className={this.props.classes.scrollspy}>
                    <div className={this.props.classes.contactDiv}>
                      <a href="#quote" className={this.props.classes.anchor} onClick={() => this.handleClick('hero_quote')}>
                        <SettingsEthernetIcon className={this.props.classes.icon} />
                        <Typography type="button" align="center" className={this.props.classes.contact}>Quote</Typography>
                        <Typography type="subheading" align="center" className={this.props.classes.contactInfo}>your next app</Typography>
                      </a>
                    </div>
                  </Scrollspy>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div className={this.props.classes.contactDiv}>
                    <a href="tel:+56-2-22222222" className={this.props.classes.anchor}>
                      <CallIcon className={this.props.classes.icon} />
                      <Typography type="button" align="center" className={this.props.classes.contact}>Call</Typography>
                      <Typography type="subheading" align="center" className={this.props.classes.contactInfo}>+56-2-22222222</Typography>
                    </a>
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

export default graphql(user, { props: data => data })(withStyles(styleSheet)(Footer));
