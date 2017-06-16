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

const styleSheet = createStyleSheet('Quote06', {
  slide: {
    padding: 15,
    color: '#fff',
  },
  title1: {
    color: fullWhite,
    marginBottom: 20,
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
          E-Commerce
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
                  1-Time Purchase
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
                  Advanced Transactions
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
                  Basic Subscription
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
                  Advanced Subscription
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            E-Commerce
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Choose if you will like to sell things through your app<br /><br />
              1-Time Purchase: Typical for stores that
              sell goods (e.i shoes, food, etc.) and
              don&apos;t want to store the user information<br /><br />
              Advanced Transactions: Choose this if you want to store the users
              information for future purchases<br /><br />
              Basic Subscription: Typical for companies that sell services and want to charge
              a monthly fee<br /><br />
              Advanced Subscription: Staff accounts, discount codes, gift cards, etc.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">Great!</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Quote06);
