import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { fullWhite, indigo, blue } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AlarmIcon from 'material-ui-icons/Alarm';
import ScheduleIcon from 'material-ui-icons/Schedule';
import UpdateIcon from 'material-ui-icons/Update';
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

const styleSheet = createStyleSheet('Quote09', {
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

class Quote09 extends Component {
  state = {
    time: 'opt1',
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleChange = (time) => {
    this.setState({ time });
  };

  render() {
    return (
      <div className={this.props.classes.slide}>
        <Typography type="title" align="center" className={this.props.classes.title1}>
          Delivery Time
          <IconButton aria-label="Help" onClick={() => this.setState({ open: true })}>
            <HelpIcon className={this.props.classes.helpIcon} />
          </IconButton>
        </Typography>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={3}>
            <Paper
              className={
                this.state.time === 'opt1' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.time === 'opt1' ? 12 : 1
              }
              onClick={() => this.handleChange('opt1')}
            >
              <ScheduleIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Normal
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper
              className={
                this.state.time === 'opt2' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.time === 'opt2' ? 12 : 1
              }
              onClick={() => this.handleChange('opt2')}
            >
              <AlarmIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Start ASAP
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper
              className={
                this.state.time === 'opt3' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.time === 'opt3' ? 12 : 1
              }
              onClick={() => this.handleChange('opt3')}
            >
              <UpdateIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Deliverable in 3 months or less
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            Delivery Time
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Select how fast you want your app to be ready<br /><br />
              Normal: Normal time is about 3 months, but we will
              start your app as soon as an opening is available,
              this could be tomorrow or the next month, it depends on our work load.<br /><br />
              Start ASAP: We will start your app immediately,
              with a delivery time of 3 months.<br /><br />
              Deliverable in 3 months or less: We will start your app immediately,
              with a delivery time of less than 3 months.
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

export default withStyles(styleSheet)(Quote09);
