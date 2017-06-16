import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { fullWhite, indigo, blue } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import KeyboardArrowUpIcon from 'material-ui-icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from 'material-ui-icons/KeyboardArrowDown';
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

const styleSheet = createStyleSheet('Quote05', {
  slide: {
    padding: 15,
    color: '#fff',
  },
  title1: {
    color: fullWhite,
    marginBottom: 20,
  },
  title2: {
    color: fullWhite,
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    fill: indigo[500],
  },
  helpIcon: {
    fill: blue[200],
  },
  paper: {
    textAlign: 'center',
    padding: 5,
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
  paperTextInput: {
    textAlign: 'center',
    padding: 5,
  },
});

class Quote05 extends Component {
  state = {
    apis: 0,
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleUp = () => {
    this.setState({
      apis: this.state.apis + 1,
    });
  };

  handleDown = () => {
    if (this.state.apis > 0) {
      this.setState({
        apis: this.state.apis - 1,
      });
    }
  };

  render() {
    return (
      <div className={this.props.classes.slide}>
        <Typography type="title" align="center" className={this.props.classes.title1}>
          Cloud APIs
          <IconButton aria-label="Help" onClick={() => this.setState({ open: true })}>
            <HelpIcon className={this.props.classes.helpIcon} />
          </IconButton>
        </Typography>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={4}>
            <Paper className={this.props.classes.paper} elevation={12} >
              <Grid container justify="center" align="center">
                <Grid item xs={12}>
                  <Typography type="subheading" align="center">
                    Number of Cloud APIs
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <Typography type="display1" align="center">
                      {this.state.apis}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Button color="primary" onClick={this.handleDown}>
                    <KeyboardArrowDownIcon />
                  </Button>
                  <Button color="primary" onClick={this.handleUp}>
                    <KeyboardArrowUpIcon />
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            Cloud APIs
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Cloud APIs are a way to connect to other services
              (e.i. weather, stocks, currency, etc).<br /><br />
              Choose how many of these APIs you will like to integrate with your app.
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

export default withStyles(styleSheet)(Quote05);
