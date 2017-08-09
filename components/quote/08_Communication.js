import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, createStyleSheet } from 'material-ui/styles';
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
import ChatIcon from 'material-ui-icons/Chat';
import EmailIcon from 'material-ui-icons/Email';
import NotificationsIcon from 'material-ui-icons/Notifications';
import SmsIcon from 'material-ui-icons/Sms';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';
import * as actions from '../../lib/actions/quote';

const styleSheet = createStyleSheet('Communication', {
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
});

class Communication extends Component {
  state = {
    chatHover: false,
    emailHover: false,
    pushHover: false,
    smsHover: false,
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleRequestOpen = () => this.setState({ open: true });

  handlePaperState = (paper) => {
    if (this.props.communication[paper]) {
      return this.props.classes.paperSelected;
    } else if (this.state[`${paper}Hover`]) {
      return this.props.classes.paperHover;
    }
    return this.props.classes.paperUnSelected;
  }

  render() {
    const sections = Object.keys(this.props.i18n.store.data.en.common.quote.sections);
    const section = sections.indexOf('Communication') + 1;
    return (
      <div className={this.props.classes.slide}>
        <Grid container justify="flex-start" align="center" gutter={40}>
          <Grid item xs={12} sm={3}>
            <Typography color="accent" type="headline" align="right">
              {section}/{sections.length}
            </Typography>
            <Typography type="title" color="secondary" align="right">
              {this.props.t('quote.sections.Communication.title')}
            </Typography>
            <div className={this.props.classes.iconButton}>
              <IconButton color="primary" aria-label="Help" onClick={this.handleRequestOpen}>
                <HelpOutlineIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('chat')
                  }
                  elevation={
                    this.props.communication.chat ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      {
                        communication: {
                          chat: !this.props.communication.chat,
                          email: this.props.communication.email,
                          push: this.props.communication.push,
                          sms: this.props.communication.sms,
                        },
                      },
                    })}
                  onMouseEnter={() => this.setState({ chatHover: true })}
                  onMouseLeave={() => this.setState({ chatHover: false })}
                >
                  {this.props.communication.chat ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <ChatIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Communication.chat')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('email')
                  }
                  elevation={
                    this.props.communication.email ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      {
                        communication: {
                          chat: this.props.communication.chat,
                          email: !this.props.communication.email,
                          push: this.props.communication.push,
                          sms: this.props.communication.sms,
                        },
                      },
                    })}
                  onMouseEnter={() => this.setState({ emailHover: true })}
                  onMouseLeave={() => this.setState({ emailHover: false })}
                >
                  {this.props.communication.email ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <EmailIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Communication.email')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('push')
                  }
                  elevation={
                    this.props.communication.push ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      {
                        communication: {
                          chat: this.props.communication.chat,
                          email: this.props.communication.email,
                          push: !this.props.communication.push,
                          sms: this.props.communication.sms,
                        },
                      },
                    })}
                  onMouseEnter={() => this.setState({ pushHover: true })}
                  onMouseLeave={() => this.setState({ pushHover: false })}
                >
                  {this.props.communication.push ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <NotificationsIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Communication.push')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('sms')
                  }
                  elevation={
                    this.props.communication.sms ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      {
                        communication: {
                          chat: this.props.communication.chat,
                          email: this.props.communication.email,
                          push: this.props.communication.push,
                          sms: !this.props.communication.sms,
                        },
                      },
                    })}
                  onMouseEnter={() => this.setState({ smsHover: true })}
                  onMouseLeave={() => this.setState({ smsHover: false })}
                >
                  {this.props.communication.sms ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <SmsIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Communication.sms')}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {this.props.t('quote.sections.Communication.dialog.title')}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.t('quote.sections.Communication.dialog.content.0')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              {this.props.t('quote.sections.Communication.dialog.button')}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    communication: state.quote.communication,
  };
}

export default translate(['common'])(
  connect(mapStateToProps, actions)(withStyles(styleSheet)(Communication)));

