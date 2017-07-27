import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import ShoppingBasketIcon from 'material-ui-icons/ShoppingBasket';
import ContactMailIcon from 'material-ui-icons/ContactMail';
import StoreIcon from 'material-ui-icons/Store';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('Commerce', {
  slide: {
    padding: 30,
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
  icon: {
    width: 40,
    height: 40,
    fill: blue[500],
  },
  done: {
    fill: blue[500],
    position: 'absolute',
    margin: 5,
    top: 0,
    right: 0,
  },
});

class Commerce extends Component {
  state = {
    basicTransactionsHover: false,
    advancedTransactionsHover: false,
    basicSubscriptionsHover: false,
    advancedSubscriptionsHover: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handlePaperState = (paper) => {
    if (this.props.quote.commerce[paper]) {
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
        key: JSON.stringify({ commerce: { sub: paper, value } }),
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateQuote: {
          id: this.props.quote.id,
          commerce: {
            ...state,
            __typename: 'CommerceType',
          },
          __typename: 'QuoteType',
        },
      },
    });
  }

  render() {
    const sections = Object.keys(this.props.i18n.store.data.en.common.quote.sections);
    const section = sections.indexOf('Commerce') + 1;
    return (
      <div className={this.props.classes.slide}>
        <Grid container justify="flex-start" align="center" gutter={40}>
          <Grid item xs={12} sm={3}>
            <Typography color="accent" type="headline" align="right">
              {section}/{sections.length}
            </Typography>
            <Typography type="title" color="secondary" align="right">
              {this.props.t('quote.sections.Commerce.title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={4}>
                <Paper
                  className={
                    this.handlePaperState('basicTransactions')
                  }
                  elevation={
                    this.props.quote.commerce.basicTransactions ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'basicTransactions',
                      !this.props.quote.commerce.basicTransactions,
                    {
                      basicTransactions: !this.props.quote.commerce.basicTransactions,
                      advancedTransactions: false,
                      basicSubscriptions: this.props.quote.commerce.basicSubscriptions,
                      advancedSubscriptions: this.props.quote.commerce.advancedSubscriptions,
                    },
                  )}
                  onMouseEnter={() => this.setState({ basicTransactionsHover: true })}
                  onMouseLeave={() => this.setState({ basicTransactionsHover: false })}
                >
                  {this.props.quote.commerce.basicTransactions ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <ShoppingCartIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Commerce.basicTransactions')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  className={
                    this.handlePaperState('advancedTransactions')
                  }
                  elevation={
                    this.props.quote.commerce.advancedTransactions ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'advancedTransactions',
                      !this.props.quote.commerce.advancedTransactions,
                    {
                      basicTransactions: false,
                      advancedTransactions: !this.props.quote.commerce.advancedTransactions,
                      basicSubscriptions: this.props.quote.commerce.basicSubscriptions,
                      advancedSubscriptions: this.props.quote.commerce.advancedSubscriptions,
                    },
                  )}
                  onMouseEnter={() => this.setState({ advancedTransactionsHover: true })}
                  onMouseLeave={() => this.setState({ advancedTransactionsHover: false })}
                >
                  {this.props.quote.commerce.advancedTransactions ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <ShoppingBasketIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Commerce.advancedTransactions')}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={4}>
                <Paper
                  className={
                    this.handlePaperState('basicSubscriptions')
                  }
                  elevation={
                    this.props.quote.commerce.basicSubscriptions ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'basicSubscriptions',
                      !this.props.quote.commerce.basicSubscriptions,
                    {
                      basicTransactions: this.props.quote.commerce.basicTransactions,
                      advancedTransactions: this.props.quote.commerce.advancedTransactions,
                      basicSubscriptions: !this.props.quote.commerce.basicSubscriptions,
                      advancedSubscriptions: false,
                    },
                  )}
                  onMouseEnter={() => this.setState({ basicSubscriptionsHover: true })}
                  onMouseLeave={() => this.setState({ basicSubscriptionsHover: false })}
                >
                  {this.props.quote.commerce.basicSubscriptions ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <ContactMailIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Commerce.basicSubscriptions')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  className={
                    this.handlePaperState('advancedSubscriptions')
                  }
                  elevation={
                    this.props.quote.commerce.advancedSubscriptions ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'advancedSubscriptions',
                      !this.props.quote.commerce.advancedSubscriptions,
                    {
                      basicTransactions: this.props.quote.commerce.basicTransactions,
                      advancedTransactions: this.props.quote.commerce.advancedTransactions,
                      basicSubscriptions: false,
                      advancedSubscriptions: !this.props.quote.commerce.advancedSubscriptions,
                    },
                  )}
                  onMouseEnter={() => this.setState({ advancedSubscriptionsHover: true })}
                  onMouseLeave={() => this.setState({ advancedSubscriptionsHover: false })}
                >
                  {this.props.quote.commerce.advancedSubscriptions ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <StoreIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Commerce.advancedSubscriptions')}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
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
      commerce {
        basicTransactions
        advancedTransactions
        basicSubscriptions
        advancedSubscriptions
      }
    }
  }
`;

export default translate(['common'])(graphql(mutation)(withStyles(styleSheet)(Commerce)));
