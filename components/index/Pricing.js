import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import FlightTakeoffIcon from 'material-ui-icons/FlightTakeoff';
import FlightIcon from 'material-ui-icons/Flight';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import Router from 'next/router';
import { logEvent } from '../../tools/analytics';

const styleSheet = createStyleSheet('Pricing', {
  section: {
    background: grey[50],
    padding: '50px 10px 100px 10px',
  },
  padSections: {
    marginTop: 10,
  },
  service: {
    color: grey[700],
  },
  features: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  icon: {
    fill: blue[500],
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
  quote: {
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
    if (this.props.id) {
      logEvent('click', action);
    }
    Router.push('/quote');
  };

  handleChange = (isVisible) => {
    if (this.props.id) {
      if (isVisible !== this.state.isVisible) {
        if (isVisible) logEvent('section', 'pricing');
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
          <Grid container justify="center" align="flex-start" className={this.props.classes.padSections}>
            <Grid item xs={12} sm={12}>
              <Typography type="display1" align="center" paragraph>
                {this.props.t('pricing.title')}
              </Typography>
              <Typography type="subheading" align="center" paragraph>
                {this.props.t('pricing.subtitle')}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Paper square elevation={10} className={this.props.classes.paper}>
                <Grid container justify="center" align="flex-start">
                  <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                    <FlightTakeoffIcon className={this.props.classes.icon} />
                    <Typography type="headline" component="h2" align="center" className={this.props.classes.service}>
                      {this.props.t('pricing.payg.title')}
                    </Typography>
                    <Divider light className={this.props.classes.divider} />
                    <Typography component="p" align="center" paragraph className={this.props.classes.features}>
                      {this.props.t('pricing.payg.features.0')}
                    </Typography>
                    <Typography component="p" align="center" paragraph className={this.props.classes.features}>
                      {this.props.t('pricing.payg.features.1')}
                    </Typography>
                    <Typography component="p" align="center" paragraph className={this.props.classes.features}>
                      {this.props.t('pricing.payg.features.3')}
                    </Typography>
                    <Typography component="p" align="center" paragraph className={this.props.classes.features}>
                      {this.props.t('pricing.payg.features.4')}
                    </Typography>
                    <Divider light className={this.props.classes.divider} />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <div className={this.props.classes.quote}>
                      <Button color="primary" onClick={() => this.handleClick('pricing_quote_payg')}>
                        <Typography type="title" align="center" color="inherit">QUOTE</Typography>
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Paper square elevation={10} className={this.props.classes.paper}>
                <Grid container justify="center" align="flex-start">
                  <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                    <FlightTakeoffIcon className={this.props.classes.icon} />
                    <Typography type="headline" component="h2" align="center" className={this.props.classes.service}>
                      {this.props.t('pricing.installments.title')}
                    </Typography>
                    <Divider light className={this.props.classes.divider} />
                    <Typography component="p" align="center" paragraph className={this.props.classes.features}>
                      {this.props.t('pricing.installments.features.0')}
                    </Typography>
                    <Typography component="p" align="center" paragraph className={this.props.classes.features}>
                      {this.props.t('pricing.installments.features.1')}
                    </Typography>
                    <Typography component="p" align="center" paragraph className={this.props.classes.features}>
                      {this.props.t('pricing.installments.features.3')}
                    </Typography>
                    <Typography component="p" align="center" paragraph className={this.props.classes.features}>
                      {this.props.t('pricing.installments.features.4')}
                    </Typography>
                    <Divider light className={this.props.classes.divider} />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <div className={this.props.classes.quote}>
                      <Button color="primary" onClick={() => this.handleClick('pricing_quote_payg')}>
                        <Typography type="title" align="center" color="inherit">QUOTE</Typography>
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Paper square elevation={10} className={this.props.classes.paper}>
                <Grid container justify="center" align="flex-start">
                  <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                    <FlightIcon className={this.props.classes.icon} />
                    <Typography type="headline" component="h2" align="center" className={this.props.classes.service}>
                      {this.props.t('pricing.fee.title')}
                    </Typography>
                    <Divider light className={this.props.classes.divider} />
                    <Typography component="p" align="center" paragraph className={this.props.classes.features}>
                      {this.props.t('pricing.fee.features.0')}
                    </Typography>
                    <Typography component="p" align="center" paragraph className={this.props.classes.features}>
                      {this.props.t('pricing.fee.features.1')}
                    </Typography>
                    <Typography component="p" align="center" paragraph className={this.props.classes.features}>
                      {this.props.t('pricing.fee.features.3')}
                    </Typography>
                    <Typography component="p" align="center" paragraph className={this.props.classes.features}>
                      {this.props.t('pricing.fee.features.4')}
                    </Typography>
                    <Divider light className={this.props.classes.divider} />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <div className={this.props.classes.quote}>
                      <Button color="primary" onClick={() => this.handleClick('pricing_quote_fee')}>
                        <Typography type="title" align="center" color="inherit">{this.props.t('pricing.button')}</Typography>
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </VisibilitySensor>
    );
  }
}

export default translate(['common'])(withStyles(styleSheet)(Pricing));
