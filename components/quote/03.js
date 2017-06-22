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
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('Quote03', {
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
          {this.props.t('quote.03.title')}
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
                {this.props.t('quote.03.options.none')}
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
                {this.props.t('quote.03.options.database')}
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
                {this.props.t('quote.03.options.databaseMedia')}
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
                {this.props.t('quote.03.options.source')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {this.props.t('quote.03.dialog.title')}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.t('quote.03.dialog.content.0')}<br /><br />
              {this.props.t('quote.03.dialog.content.1')}<br /><br />
              {this.props.t('quote.03.dialog.content.2')}<br /><br />
              {this.props.t('quote.03.dialog.content.3')}<br /><br />
              {this.props.t('quote.03.dialog.content.4')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">{this.props.t('quote.03.dialog.button')}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default translate(['common'])(withStyles(styleSheet)(Quote03));
