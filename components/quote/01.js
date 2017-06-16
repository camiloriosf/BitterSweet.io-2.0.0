import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { fullWhite, indigo, blue } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import WebIcon from 'material-ui-icons/Web';
import AndroidIcon from 'material-ui-icons/Android';
import TabletMacIcon from 'material-ui-icons/TabletMac';
import DesktopMacIcon from 'material-ui-icons/DesktopMac';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import KeyboardArrowUpIcon from 'material-ui-icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from 'material-ui-icons/KeyboardArrowDown';
import IconButton from 'material-ui/IconButton';
import HelpIcon from 'material-ui-icons/Help';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const styleSheet = createStyleSheet('Quote01', {
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

class Quote01 extends Component {
  state = {
    web: false,
    android: false,
    iOS: false,
    desktop: false,
    pages: 1,
    design: false,
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleUp = () => {
    this.setState({
      pages: this.state.pages + 1,
    });
  };

  handleDown = () => {
    if (this.state.pages > 1) {
      this.setState({
        pages: this.state.pages - 1,
      });
    }
  };

  render() {
    return (
      <div className={this.props.classes.slide}>
        <Typography type="title" align="center" className={this.props.classes.title1}>
          Choose platforms
          <IconButton aria-label="Help" onClick={() => this.setState({ open: true })}>
            <HelpIcon className={this.props.classes.helpIcon} />
          </IconButton>
        </Typography>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.web ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.web ? 12 : 1
              }
              onClick={() => this.setState({ web: !this.state.web })}
            >
              <WebIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Web
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.android ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.android ? 12 : 1
              }
              onClick={() => this.setState({ android: !this.state.android })}
            >
              <AndroidIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Android
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.iOS ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.iOS ? 12 : 1
              }
              onClick={() => this.setState({ iOS: !this.state.iOS })}
            >
              <TabletMacIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  iOS
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.desktop ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.desktop ? 12 : 1
              }
              onClick={() => this.setState({ desktop: !this.state.desktop })}
            >
              <DesktopMacIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Desktop
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={4}>
            <Paper className={this.props.classes.paper} elevation={12} >
              <Grid container justify="center" align="center">
                <Grid item xs={12}>
                  <Typography type="subheading" align="center">
                    Number of pages/screens
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <Typography type="display1" align="center">
                      {this.state.pages}
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
          <Grid item xs={12} sm={4}>
            <Paper
              className={
                this.state.design ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.design ? 12 : 1
              }
              onClick={() => this.setState({ design: !this.state.design })}
            >
              <Typography type="subheading" align="center">
                Design Services
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            Platforms
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Select the platforms you want your
              app to support. You can select as may as you want.<br /><br />
              You can also select wheter you want us to take care of the design or not.<br /><br />
              Please also select the number of pages/screens your app will have. For example,
              if the website has 8 pages and the mobile app has 5 screens, please select 8.
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

export default withStyles(styleSheet)(Quote01);
