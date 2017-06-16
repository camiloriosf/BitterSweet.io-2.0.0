import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { fullWhite, indigo, blue } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import NotInterestedIcon from 'material-ui-icons/NotInterested';
import BuildIcon from 'material-ui-icons/Build';
import DashboardIcon from 'material-ui-icons/Dashboard';
import TimelineIcon from 'material-ui-icons/Timeline';
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

const styleSheet = createStyleSheet('Quote07', {
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

class Quote07 extends Component {
  state = {
    admin: 'opt1',
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleChange = (admin) => {
    this.setState({ admin });
  };

  render() {
    return (
      <div className={this.props.classes.slide}>
        <Typography type="title" align="center" className={this.props.classes.title1}>
          Admin Console
          <IconButton aria-label="Help" onClick={() => this.setState({ open: true })}>
            <HelpIcon className={this.props.classes.helpIcon} />
          </IconButton>
        </Typography>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.admin === 'opt1' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.admin === 'opt1' ? 12 : 1
              }
              onClick={() => this.handleChange('opt1')}
            >
              <NotInterestedIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  None
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.admin === 'opt2' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.admin === 'opt2' ? 12 : 1
              }
              onClick={() => this.handleChange('opt2')}
            >
              <BuildIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Admin
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.admin === 'opt3' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.admin === 'opt3' ? 12 : 1
              }
              onClick={() => this.handleChange('opt3')}
            >
              <DashboardIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Dashboard
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.admin === 'opt4' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.admin === 'opt4' ? 12 : 1
              }
              onClick={() => this.handleChange('opt4')}
            >
              <TimelineIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Reports
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            Admin Console
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Admin consoles help you manage the different aspects of your app<br /><br />
              Reports: We will send you periodical pdf reports of the usage of your app<br /><br />
              Admin: You will be able to set the most important aspects of your site, like
              managing users, staff, access to the different areas, etc<br /><br />
              Dashboard: Full control of your app,
              charts and tables to show you every aspect of it.
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

export default withStyles(styleSheet)(Quote07);
