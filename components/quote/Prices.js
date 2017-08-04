import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { translate } from 'react-i18next';
import * as actions from '../../lib/actions/quote';

const styleSheet = createStyleSheet('Prices', {
  section: {
    padding: 20,
    marginTop: 20,
  },
  title: {
    color: blue[500],
  },
  grid: {
    textAlign: 'center',
  },
  paperSelected: {
    textAlign: 'center',
    padding: 10,
    cursor: 'pointer',
    position: 'relative',
  },
  paperUnSelected: {
    textAlign: 'center',
    padding: 10,
    cursor: 'pointer',
    background: grey[50],
    position: 'relative',
  },
  paperHover: {
    textAlign: 'center',
    padding: 10,
    cursor: 'pointer',
    position: 'relative',
  },
});

class Prices extends Component {
  state = {
    paygHover: true,
    installmentsHover: false,
    feeHover: false,
  };

  handlePaperState = (paper) => {
    if (this.props.plan[paper]) {
      return this.props.classes.paperSelected;
    } else if (this.state[`${paper}Hover`]) {
      return this.props.classes.paperHover;
    }
    return this.props.classes.paperUnSelected;
  }

  formatPrice = price => `$${price.toLocaleString()}`;

  render() {
    return (
      <div className={this.props.classes.section}>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={12}>
            <Typography type="display1" align="center" paragraph>
              {this.props.t('quote.prices.title')}
            </Typography>
            <Typography type="subheading" align="center" paragraph>
              {this.props.t('quote.prices.subtitle')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Paper
              className={
                this.handlePaperState('installments')
              }
              elevation={
                this.props.plan.installments ? 12 : 1
              }
              onClick={() =>
                this.props.updateValue({
                  value:
                  { plan: {
                    installments: true,
                    fee: false,
                    payg: false,
                  } } })}
              onMouseEnter={() => this.setState({ installmentsHover: true })}
              onMouseLeave={() => this.setState({ installmentsHover: false })}
            >
              <Grid container justify="center" align="flex-start">
                <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                  <Typography type="title" color="accent" component="h2" align="center" className={this.props.classes.title}>
                    {this.formatPrice(this.props.prices.installments)}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.prices.installments.title')}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Paper
              className={
                this.handlePaperState('payg')
              }
              elevation={
                this.props.plan.payg ? 12 : 1
              }
              onClick={() =>
                this.props.updateValue({
                  value:
                  { plan: {
                    installments: false,
                    fee: false,
                    payg: true,
                  } } })}
              onMouseEnter={() => this.setState({ paygHover: true })}
              onMouseLeave={() => this.setState({ paygHover: false })}
            >
              <Grid container justify="center" align="flex-start">
                <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                  <Typography type="title" component="h2" align="center" className={this.props.classes.title}>
                    {this.formatPrice(this.props.prices.payg)}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.prices.payg.title')}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Paper
              className={
                this.handlePaperState('fee')
              }
              elevation={
                this.props.plan.fee ? 12 : 1
              }
              onClick={() =>
                this.props.updateValue({
                  value:
                  { plan: {
                    installments: false,
                    fee: true,
                    payg: false,
                  } } })}
              onMouseEnter={() => this.setState({ feeHover: true })}
              onMouseLeave={() => this.setState({ feeHover: false })}
            >
              <Grid container justify="center" align="flex-start">
                <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                  <Typography type="title" color="accent" component="h2" align="center" className={this.props.classes.title}>
                    {this.formatPrice(this.props.prices.fee)}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.prices.fee.title')}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    prices: state.quote.prices,
    plan: state.quote.plan,
  };
}

export default translate(['common'])(
  connect(mapStateToProps, actions)(withStyles(styleSheet)(Prices)));
