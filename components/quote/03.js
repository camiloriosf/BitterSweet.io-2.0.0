import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { fullWhite, indigo, blue } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import NotInterestedIcon from 'material-ui-icons/NotInterested';
import StorageIcon from 'material-ui-icons/Storage';
import PermMediaIcon from 'material-ui-icons/PermMedia';
import DeviceHubIcon from 'material-ui-icons/DeviceHub';
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

const styleSheet = createStyleSheet('Quote03', {
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

class Quote03 extends Component {
  state = {
    data: 'opt1',
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleChange = (data) => {
    this.setState({ data });
  };

  render() {
    return (
      <div className={this.props.classes.slide}>
        <Typography type="title" align="center" className={this.props.classes.title1}>
          Data
          <IconButton aria-label="Help" onClick={() => this.setState({ open: true })}>
            <HelpIcon className={this.props.classes.helpIcon} />
          </IconButton>
        </Typography>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.data === 'opt1' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.data === 'opt1' ? 12 : 1
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
                this.state.data === 'opt2' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.data === 'opt2' ? 12 : 1
              }
              onClick={() => this.handleChange('opt2')}
            >
              <StorageIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Database
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.data === 'opt3' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.data === 'opt3' ? 12 : 1
              }
              onClick={() => this.handleChange('opt3')}
            >
              <PermMediaIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Database + Media
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.data === 'opt4' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.data === 'opt4' ? 12 : 1
              }
              onClick={() => this.handleChange('opt4')}
            >
              <DeviceHubIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Data Source
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            Data
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is how your app can store data,
              like users accounts, usage information, etc.<br /><br />
              None: No database will be used, this is perfect for sites that
              only want to show static (the same the whole time) information<br /><br />
              Database: We will set up a Full Database for you,
              that will grow with your application<br /><br />
              Database + Media: Along with the Database, we will also set up a
              special storage for all your documents, images and any kind of
              files that you want to store<br /><br />
              Data Source: You already have a Database? No problem,
              we can integrate it with your new app.
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

export default withStyles(styleSheet)(Quote03);
