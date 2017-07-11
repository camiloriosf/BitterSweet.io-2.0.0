import React, { Component } from 'react';
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
    padding: 20,
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
    basicTransactions: false,
    advancedTransactions: false,
    basicSubscriptions: false,
    advancedSubscriptions: false,
    basicTransactionsHover: false,
    advancedTransactionsHover: false,
    basicSubscriptionsHover: false,
    advancedSubscriptionsHover: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handlePaperState = (paper) => {
    if (this.state[paper]) {
      return this.props.classes.paperSelected;
    } else if (this.state[`${paper}Hover`]) {
      return this.props.classes.paperHover;
    }
    return this.props.classes.paperUnSelected;
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
                    this.state.basicTransactions ? 12 : 1
                  }
                  onClick={() => this.setState({
                    basicTransactions: !this.state.basicTransactions,
                    advancedTransactions: false,
                  })}
                  onMouseEnter={() => this.setState({ basicTransactionsHover: true })}
                  onMouseLeave={() => this.setState({ basicTransactionsHover: false })}
                >
                  {this.state.basicTransactions ?
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
                    this.state.advancedTransactions ? 12 : 1
                  }
                  onClick={() => this.setState({
                    advancedTransactions: !this.state.advancedTransactions,
                    basicTransactions: false,
                  })}
                  onMouseEnter={() => this.setState({ advancedTransactionsHover: true })}
                  onMouseLeave={() => this.setState({ advancedTransactionsHover: false })}
                >
                  {this.state.advancedTransactions ?
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
                    this.state.basicSubscriptions ? 12 : 1
                  }
                  onClick={() => this.setState({
                    basicSubscriptions: !this.state.basicSubscriptions,
                    advancedSubscriptions: false,
                  })}
                  onMouseEnter={() => this.setState({ basicSubscriptionsHover: true })}
                  onMouseLeave={() => this.setState({ basicSubscriptionsHover: false })}
                >
                  {this.state.basicSubscriptions ?
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
                    this.state.advancedSubscriptions ? 12 : 1
                  }
                  onClick={() => this.setState({
                    advancedSubscriptions: !this.state.advancedSubscriptions,
                    basicSubscriptions: false,
                  })}
                  onMouseEnter={() => this.setState({ advancedSubscriptionsHover: true })}
                  onMouseLeave={() => this.setState({ advancedSubscriptionsHover: false })}
                >
                  {this.state.advancedSubscriptions ?
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

export default translate(['common'])(withStyles(styleSheet)(Commerce));