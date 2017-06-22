import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import { indigo, fullWhite } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import { logPageView, setUser, logEvent } from '../tools/analytics';

const styleSheet = createStyleSheet('Hero', {
  section: {
    background: indigo[500],
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
    marginTop: '3%',
  },
  title: {
    color: fullWhite,
  },
  subTitle: {
    color: fullWhite,
    maxWidth: 700,
    margin: '0 auto',
  },
  button: {
    minWidth: 200,
    minHeight: 40,
    color: fullWhite,
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
      isVisible: null,
      user: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.user && !this.state.user) {
      setUser(nextProps.data.user.id);
      logPageView();
      this.setState({ user: true });
    }
  }

  handleClick = (action) => {
    if (!this.props.data.loading) {
      logEvent('click', action);
    }
  };

  handleChange = (isVisible) => {
    if (!this.props.data.loading) {
      if (isVisible !== this.state.isVisible && this.state.user) {
        if (isVisible) logEvent('section', 'hero');
        this.setState({ isVisible });
      }
    }
  };

  render() {
    return (
      <div className={this.props.classes.section}>
        <VisibilitySensor onChange={this.handleChange} />
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={12} className={this.props.classes.pad1}>
            <Typography type="display3" align="center" className={this.props.classes.title}>
              {this.props.t('hero.title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} className={this.props.classes.pad2}>
            <Typography type="headline" align="center" className={this.props.classes.subTitle}>
              {this.props.t('hero.subtitle')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} className={this.props.classes.pad3}>
            <Grid container justify="center" align="center" >
              <div className={this.props.classes.quote}>
                <a href="#quote" className={this.props.classes.anchor} onClick={() => this.handleClick('hero_quote')}>
                  <Button raised color="accent" className={this.props.classes.button}>
                    <Typography type="title" align="center" color="inherit">{this.props.t('hero.button')}</Typography>
                  </Button>
                </a>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} className={this.props.classes.pad4}>
            <Hidden smDown>
              <div className={this.props.classes.crop1}>
                <img src="static/home_mockups_1.png" alt="WebSite Mockup 1" className={this.props.classes.mockup1} />
                <img src="static/home_mockups_2.png" alt="WebSite Mockup 2" className={this.props.classes.mockup2} />
                <img src="static/home_mockups_3.png" alt="WebSite Mockup 3" className={this.props.classes.mockup3} />
              </div>
            </Hidden>
            <Hidden mdUp xsDown>
              <div className={this.props.classes.crop2}>
                <img src="static/home_mockups_1.png" alt="WebSite Mockup 1" className={this.props.classes.mockup11} />
              </div>
            </Hidden>
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

export default translate(['common'])(graphql(user, { props: data => data })(withStyles(styleSheet)(Hero)));

