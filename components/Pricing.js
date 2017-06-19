import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import FlightTakeoffIcon from 'material-ui-icons/FlightTakeoff';
import FlightIcon from 'material-ui-icons/Flight';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import { grey, indigo } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Scrollspy from 'react-scrollspy';
import { gql, graphql } from 'react-apollo';
import VisibilitySensor from 'react-visibility-sensor';
import { logEvent } from '../lib/analytics';

const styleSheet = createStyleSheet('Pricing', {
  section: {
    background: grey[100],
    padding: 10,
  },
  padSections: {
    marginTop: '5%',
  },
  sectionTitle: {
    color: indigo[500],
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 40,
  },
  service: {
    color: grey[700],
  },
  features: {
    color: indigo[200],
    paddingRight: 20,
    paddingLeft: 20,
  },
  icon: {
    fill: indigo[100],
    height: 80,
    width: 80,
  },
  grid: {
    textAlign: 'center',
  },
  divider: {
    marginTop: 25,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  dividerFeature: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
  },
  scrollspy: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  anchor: {
    textDecoration: 'none',
  },
  paper: {
    padding: 20,
  },
});

class Pricing extends Component {
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
        if (isVisible) logEvent('section', 'pricing');
        this.setState({ isVisible });
      }
    }
  };

  render() {
    return (
      <div className={this.props.classes.section}>
        <VisibilitySensor onChange={this.handleChange} />
        <Hidden smUp><div className={this.props.classes.padXSSections} /></Hidden>
        <Hidden xsDown><div className={this.props.classes.padSections} /></Hidden>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={12}>
            <Typography type="display1" align="center" className={this.props.classes.sectionTitle}>
              Pricing
            </Typography>
            <Typography type="subheading" align="center" className={this.props.classes.sectionSubTitle}>
              No hidden costs, no contracts, just pay as you go.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper square elevation={24} className={this.props.classes.paper}>
              <Grid container justify="center" align="flex-start">
                <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                  <FlightTakeoffIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center" className={this.props.classes.service}>
                    Pay-as-you-Go
                  </Typography>
                  <Divider light className={this.props.classes.divider} />
                  <Typography type="caption" align="center" className={this.props.classes.features}>
                    Pay for as long (or little) as you want
                  </Typography>
                  <Divider light className={this.props.classes.dividerFeature} />
                  <Typography type="caption" align="center" className={this.props.classes.features}>
                    All inclusive<br /><br />
                    (Hosting, support, Maintenance, auto-scale,
                    load-balancing, CDN, SSL certificate)
                  </Typography>
                  <Divider light className={this.props.classes.dividerFeature} />
                  <Typography type="caption" align="center" className={this.props.classes.features}>
                    You own the intelectual property
                  </Typography>
                  <Divider light className={this.props.classes.dividerFeature} />
                  <Typography type="caption" align="center" className={this.props.classes.features}>
                    We own the code
                  </Typography>
                  <Divider light className={this.props.classes.divider} />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Scrollspy className={this.props.classes.scrollspy}>
                    <a href="#quote" className={this.props.classes.anchor} onClick={() => this.handleClick('pricing_quote_payg')}>
                      <Button color="primary">
                        <Typography type="title" align="center" color="inherit">QUOTE</Typography>
                      </Button>
                    </a>
                  </Scrollspy>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper square elevation={24} className={this.props.classes.paper}>
              <Grid container justify="center" align="flex-start">
                <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                  <FlightIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center" className={this.props.classes.service}>
                    1-Time Fee
                  </Typography>
                  <Divider light className={this.props.classes.divider} />
                  <Typography type="caption" align="center" className={this.props.classes.features}>
                    Pay a (usually high) 1 time fee
                  </Typography>
                  <Divider light className={this.props.classes.dividerFeature} />
                  <Typography type="caption" align="center" className={this.props.classes.features}>
                    3 months of All inclusive<br /><br />
                    (Hosting, support, Maintenance, auto-scale,
                    load-balancing, CDN, SSL certificate)
                  </Typography>
                  <Divider light className={this.props.classes.dividerFeature} />
                  <Typography type="caption" align="center" className={this.props.classes.features}>
                    You own the intelectual property
                  </Typography>
                  <Divider light className={this.props.classes.dividerFeature} />
                  <Typography type="caption" align="center" className={this.props.classes.features}>
                    You own the code
                  </Typography>
                  <Divider light className={this.props.classes.divider} />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Scrollspy className={this.props.classes.scrollspy}>
                    <a href="#quote" className={this.props.classes.anchor} onClick={() => this.handleClick('pricing_quote_fee')}>
                      <Button color="primary">
                        <Typography type="title" align="center" color="inherit">QUOTE</Typography>
                      </Button>
                    </a>
                  </Scrollspy>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Hidden smUp><div className={this.props.classes.padXSSections} /></Hidden>
        <Hidden xsDown><div className={this.props.classes.padSections} /></Hidden>
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

export default graphql(user, { props: data => data })(withStyles(styleSheet)(Pricing));
