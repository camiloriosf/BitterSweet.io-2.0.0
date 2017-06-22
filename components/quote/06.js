import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { fullWhite, indigo, blue } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import ShoppingBasketIcon from 'material-ui-icons/ShoppingBasket';
import ContactMailIcon from 'material-ui-icons/ContactMail';
import StoreIcon from 'material-ui-icons/Store';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import HelpIcon from 'material-ui-icons/Help';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('Quote06', {
  slide: {
    padding: 10,
    color: '#fff',
  },
  title1: {
    color: fullWhite,
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    fill: indigo[500],
  },
  helpIcon: {
    fill: blue[200],
  },
  paperSelected: {
    textAlign: 'center',
    padding: 5,
    cursor: 'pointer',
  },
  paperUnSelected: {
    textAlign: 'center',
    padding: 5,
    background: indigo[200],
    cursor: 'pointer',
  },
});

class Quote06 extends Component {
  state = {
    transaction: '',
    subscription: '',
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleChange = (type, value) => {
    if (type) {
      if (this.state.transaction === value) this.setState({ transaction: '' });
      else this.setState({ transaction: value });
    } else if (!type) {
      if (this.state.subscription === value) this.setState({ subscription: '' });
      else this.setState({ subscription: value });
    }
  };

  render() {
    return (
      <div className={this.props.classes.slide}>
        <Typography type="title" align="center" className={this.props.classes.title1}>
          {this.props.t('quote.06.title')}
          <IconButton aria-label="Help" onClick={() => this.setState({ open: true })}>
            <HelpIcon className={this.props.classes.helpIcon} />
          </IconButton>
        </Typography>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={4}>
            <Paper
              className={
                this.state.transaction === 'opt1' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.transaction === 'opt1' ? 12 : 1
              }
              onClick={() => this.handleChange(true, 'opt1')}
            >
              <ShoppingCartIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                {this.props.t('quote.06.options.basicTransactions')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              className={
                this.state.transaction === 'opt2' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.transaction === 'opt2' ? 12 : 1
              }
              onClick={() => this.handleChange(true, 'opt2')}
            >
              <ShoppingBasketIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                {this.props.t('quote.06.options.advancedTransactions')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={4}>
            <Paper
              className={
                this.state.subscription === 'opt1' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.subscription === 'opt1' ? 12 : 1
              }
              onClick={() => this.handleChange(false, 'opt1')}
            >
              <ContactMailIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                {this.props.t('quote.06.options.basicSubscriptions')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              className={
                this.state.subscription === 'opt2' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.subscription === 'opt2' ? 12 : 1
              }
              onClick={() => this.handleChange(false, 'opt2')}
            >
              <StoreIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                {this.props.t('quote.06.options.advancedSubscriptions')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {this.props.t('quote.06.dialog.title')}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.t('quote.06.dialog.content.0')}<br /><br />
              {this.props.t('quote.06.dialog.content.1')}<br /><br />
              {this.props.t('quote.06.dialog.content.2')}<br /><br />
              {this.props.t('quote.06.dialog.content.3')}<br /><br />
              {this.props.t('quote.06.dialog.content.4')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">{this.props.t('quote.06.dialog.button')}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default translate(['common'])(withStyles(styleSheet)(Quote06));
