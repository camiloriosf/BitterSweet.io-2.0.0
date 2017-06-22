import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { fullWhite, indigo, blue } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
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
import TextField from 'material-ui/TextField';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('Send', {
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
  paper: {
    textAlign: 'center',
    padding: 5,
  },
  buttonDiv: {
    marginTop: 30,
    textAlign: 'center',
  },
});

class Send extends Component {
  state = {
    service: 0,
    fee: 0,
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  render() {
    return (
      <div className={this.props.classes.slide}>
        <Typography type="title" align="center" className={this.props.classes.title1}>
          {this.props.t('quote.send.title')}
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
                    {this.props.t('quote.send.payg.title')}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <Typography type="display1" align="center">
                      ${this.state.service}{this.props.t('quote.send.payg.month')}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={this.props.classes.paper} elevation={12} >
              <Grid container justify="center" align="center">
                <Grid item xs={12}>
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.send.fee.title')}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <Typography type="display1" align="center">
                      ${this.state.fee}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={8}>
            <Paper className={this.props.classes.paper} elevation={12} >
              <form>
                <Grid container justify="center" align="flex-start">
                  <Grid item xs={12} sm={4}>
                    <TextField label={this.props.t('quote.send.form.name')} type="text" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label={this.props.t('quote.send.form.email')} type="email" />
                  </Grid>
                </Grid>
                <div className={this.props.classes.buttonDiv}>
                  <Button raised type="submit">{this.props.t('quote.send.form.button')}</Button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {this.props.t('quote.send.dialog.title')}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.t('quote.send.dialog.content.0')}<br /><br />
              {this.props.t('quote.send.dialog.content.1')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">{this.props.t('quote.send.dialog.button')}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default translate(['common'])(withStyles(styleSheet)(Send));
