import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { fullWhite, indigo, blue } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import NotInterestedIcon from 'material-ui-icons/NotInterested';
import EmailIcon from 'material-ui-icons/Email';
import ShareIcon from 'material-ui-icons/Share';
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

const styleSheet = createStyleSheet('Quote02', {
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

class Quote02 extends Component {
  state = {
    authentication: 'opt1',
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleChange = (authentication) => {
    this.setState({ authentication });
  };

  render() {
    return (
      <div className={this.props.classes.slide}>
        <Typography type="title" align="center" className={this.props.classes.title1}>
          {this.props.t('quote.02.title')}
          <IconButton aria-label="Help" onClick={() => this.setState({ open: true })}>
            <HelpIcon className={this.props.classes.helpIcon} />
          </IconButton>
        </Typography>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.authentication === 'opt1' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.authentication === 'opt1' ? 12 : 1
              }
              onClick={() => this.handleChange('opt1')}
            >
              <NotInterestedIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                {this.props.t('quote.02.options.noLogin')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.authentication === 'opt2' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.authentication === 'opt2' ? 12 : 1
              }
              onClick={() => this.handleChange('opt2')}
            >
              <EmailIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                {this.props.t('quote.02.options.email')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.authentication === 'opt3' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.authentication === 'opt3' ? 12 : 1
              }
              onClick={() => this.handleChange('opt3')}
            >
              <div className={this.props.classes.iconDiv}>
                <EmailIcon className={this.props.classes.icon} />
                <ShareIcon className={this.props.classes.icon} />
              </div>
              <Typography type="subheading" align="center">
                {this.props.t('quote.02.options.emailSocial')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={
                this.state.authentication === 'opt4' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.authentication === 'opt4' ? 12 : 1
              }
              onClick={() => this.handleChange('opt4')}
            >
              <ShareIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                {this.props.t('quote.02.options.social')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {this.props.t('quote.02.dialog.title')}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.t('quote.02.dialog.content.0')}<br /><br />
              {this.props.t('quote.02.dialog.content.1')}<br /><br />
              {this.props.t('quote.02.dialog.content.2')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">{this.props.t('quote.02.dialog.button')}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default translate(['common'])(withStyles(styleSheet)(Quote02));
