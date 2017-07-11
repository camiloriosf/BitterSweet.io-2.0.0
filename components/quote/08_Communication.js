import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import ChatIcon from 'material-ui-icons/Chat';
import EmailIcon from 'material-ui-icons/Email';
import NotificationsIcon from 'material-ui-icons/Notifications';
import SmsIcon from 'material-ui-icons/Sms';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('Communication', {
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

class Communication extends Component {
  state = {
    chat: false,
    email: false,
    push: false,
    sms: false,
    chatHover: false,
    emailHover: false,
    pushHover: false,
    smsHover: false,
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
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('chat')
                  }
                  elevation={
                    this.state.chat ? 12 : 1
                  }
                  onClick={() => this.setState({ chat: !this.state.chat })}
                  onMouseEnter={() => this.setState({ chatHover: true })}
                  onMouseLeave={() => this.setState({ chatHover: false })}
                >
                  {this.state.chat ?
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
                    this.state.email ? 12 : 1
                  }
                  onClick={() => this.setState({ email: !this.state.email })}
                  onMouseEnter={() => this.setState({ emailHover: true })}
                  onMouseLeave={() => this.setState({ emailHover: false })}
                >
                  {this.state.email ?
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
                    this.state.push ? 12 : 1
                  }
                  onClick={() => this.setState({ push: !this.state.push })}
                  onMouseEnter={() => this.setState({ pushHover: true })}
                  onMouseLeave={() => this.setState({ pushHover: false })}
                >
                  {this.state.push ?
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
                    this.state.sms ? 12 : 1
                  }
                  onClick={() => this.setState({ sms: !this.state.sms })}
                  onMouseEnter={() => this.setState({ smsHover: true })}
                  onMouseLeave={() => this.setState({ smsHover: false })}
                >
                  {this.state.sms ?
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
      </div>
    );
  }
}

export default translate(['common'])(withStyles(styleSheet)(Communication));
