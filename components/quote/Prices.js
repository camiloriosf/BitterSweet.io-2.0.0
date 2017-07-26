import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import { translate } from 'react-i18next';
import fetchQuote from '../../lib/queries/fetchQuote';

const styleSheet = createStyleSheet('Prices', {
  section: {
    padding: 20,
    marginTop: 50,
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
    payg: true,
    installments: false,
    fee: false,
    paygHover: true,
    installmentsHover: false,
    feeHover: false,
  };

  handlePaperState = (paper) => {
    if (this.props.quote.plan[paper]) {
      return this.props.classes.paperSelected;
    } else if (this.state[`${paper}Hover`]) {
      return this.props.classes.paperHover;
    }
    return this.props.classes.paperUnSelected;
  }

  handleSubmit = (paper, value, state) => {
    this.props.mutate({
      variables: {
        id: this.props.quote.id,
        key: JSON.stringify({ plan: { sub: paper, value } }),
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateQuote: {
          id: this.props.quote.id,
          plan: {
            ...state,
            __typename: 'PlanType',
          },
          __typename: 'QuoteType',
        },
      },
    });
  }

  calcInstallments = () => {
    if (this.props.quote.time.now) {
      return 10;
    }
    return 0;
  }

  calcPayg = () => 1

  calcFee = () => 1

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
                this.props.quote.plan.installments ? 12 : 1
              }
              onClick={() => this.handleSubmit(
                'installments',
                true,
                {
                  payg: false,
                  installments: true,
                  fee: false,
                },
              )}
              onMouseEnter={() => this.setState({ installmentsHover: true })}
              onMouseLeave={() => this.setState({ installmentsHover: false })}
            >
              <Grid container justify="center" align="flex-start">
                <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                  <Typography type="title" color="accent" component="h2" align="center" className={this.props.classes.title}>
                    {this.calcInstallments()}
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
                this.props.quote.plan.payg ? 12 : 1
              }
              onClick={() => this.handleSubmit(
                'payg',
                true,
                {
                  payg: true,
                  installments: false,
                  fee: false,
                },
              )}
              onMouseEnter={() => this.setState({ paygHover: true })}
              onMouseLeave={() => this.setState({ paygHover: false })}
            >
              <Grid container justify="center" align="flex-start">
                <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                  <Typography type="title" component="h2" align="center" className={this.props.classes.title}>
                    {this.calcPayg()}
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
                this.props.quote.plan.fee ? 12 : 1
              }
              onClick={() => this.handleSubmit(
                'fee',
                true,
                {
                  payg: false,
                  installments: false,
                  fee: true,
                },
              )}
              onMouseEnter={() => this.setState({ feeHover: true })}
              onMouseLeave={() => this.setState({ feeHover: false })}
            >
              <Grid container justify="center" align="flex-start">
                <Grid item xs={12} sm={12} className={this.props.classes.grid}>
                  <Typography type="title" color="accent" component="h2" align="center" className={this.props.classes.title}>
                    {this.calcFee()}
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

const mutation = gql`
  mutation UpdateQuote($id: String!, $key: JSON) {
    updateQuote(id: $id, key: $key) {
      id
      plan {
        payg
        installments
        fee
      }
    }
  }
`;

export default translate(['common'])(graphql(mutation)(withStyles(styleSheet)(Prices)));
