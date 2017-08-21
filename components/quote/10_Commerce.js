import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import HelpOutlineIcon from 'material-ui-icons/HelpOutline';
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import ShoppingBasketIcon from 'material-ui-icons/ShoppingBasket';
import ContactMailIcon from 'material-ui-icons/ContactMail';
import StoreIcon from 'material-ui-icons/Store';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';
import * as actions from '../../lib/actions/quote';

const styles = {
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
  iconButton: {
    textAlign: 'right',
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
};

class Commerce extends Component {
  state = {
    basicTransactionsHover: false,
    advancedTransactionsHover: false,
    basicSubscriptionsHover: false,
    advancedSubscriptionsHover: false,
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleRequestOpen = () => this.setState({ open: true });

  handlePaperState = (paper) => {
    if (this.props.commerce[paper]) {
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
            <div className={this.props.classes.iconButton}>
              <IconButton color="primary" aria-label="Help" onClick={this.handleRequestOpen}>
                <HelpOutlineIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={4}>
                <Paper
                  className={
                    this.handlePaperState('basicTransactions')
                  }
                  elevation={
                    this.props.commerce.basicTransactions ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      { commerce: {
                        basicTransactions: !this.props.commerce.basicTransactions,
                        advancedTransactions: false,
                        basicSubscriptions: this.props.commerce.basicSubscriptions,
                        advancedSubscriptions: this.props.commerce.advancedSubscriptions,
                      } } })}
                  onMouseEnter={() => this.setState({ basicTransactionsHover: true })}
                  onMouseLeave={() => this.setState({ basicTransactionsHover: false })}
                >
                  {this.props.commerce.basicTransactions ?
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
                    this.props.commerce.advancedTransactions ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      { commerce: {
                        basicTransactions: false,
                        advancedTransactions: !this.props.commerce.advancedTransactions,
                        basicSubscriptions: this.props.commerce.basicSubscriptions,
                        advancedSubscriptions: this.props.commerce.advancedSubscriptions,
                      } } })}
                  onMouseEnter={() => this.setState({ advancedTransactionsHover: true })}
                  onMouseLeave={() => this.setState({ advancedTransactionsHover: false })}
                >
                  {this.props.commerce.advancedTransactions ?
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
                    this.props.commerce.basicSubscriptions ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      { commerce: {
                        basicTransactions: this.props.commerce.basicTransactions,
                        advancedTransactions: this.props.commerce.advancedTransactions,
                        basicSubscriptions: !this.props.commerce.basicSubscriptions,
                        advancedSubscriptions: false,
                      } } })}
                  onMouseEnter={() => this.setState({ basicSubscriptionsHover: true })}
                  onMouseLeave={() => this.setState({ basicSubscriptionsHover: false })}
                >
                  {this.props.commerce.basicSubscriptions ?
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
                    this.props.commerce.advancedSubscriptions ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      { commerce: {
                        basicTransactions: this.props.commerce.basicTransactions,
                        advancedTransactions: this.props.commerce.advancedTransactions,
                        basicSubscriptions: false,
                        advancedSubscriptions: !this.props.commerce.advancedSubscriptions,
                      } } })}
                  onMouseEnter={() => this.setState({ advancedSubscriptionsHover: true })}
                  onMouseLeave={() => this.setState({ advancedSubscriptionsHover: false })}
                >
                  {this.props.commerce.advancedSubscriptions ?
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
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {this.props.t('quote.sections.Commerce.dialog.title')}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.t('quote.sections.Commerce.dialog.content.0')}<br /><br />
              {this.props.t('quote.sections.Commerce.dialog.content.1')}<br /><br />
              {this.props.t('quote.sections.Commerce.dialog.content.2')}<br /><br />
              {this.props.t('quote.sections.Commerce.dialog.content.3')}<br /><br />
              {this.props.t('quote.sections.Commerce.dialog.content.4')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              {this.props.t('quote.sections.Commerce.dialog.button')}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    commerce: state.quote.commerce,
  };
}

export default translate(['common'])(
  connect(mapStateToProps, actions)(withStyles(styles, { name: 'CommerceQuote' })(Commerce)));
