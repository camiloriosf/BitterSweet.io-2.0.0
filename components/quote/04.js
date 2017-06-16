import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { fullWhite, indigo, blue } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import NotInterestedIcon from 'material-ui-icons/NotInterested';
import PlaceIcon from 'material-ui-icons/Place';
import LayersIcon from 'material-ui-icons/Layers';
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

const styleSheet = createStyleSheet('Quote04', {
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

class Quote04 extends Component {
  state = {
    geo: 'opt1',
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleChange = (geo) => {
    this.setState({ geo });
  };

  render() {
    return (
      <div className={this.props.classes.slide}>
        <Typography type="title" align="center" className={this.props.classes.title1}>
          GeoLocation
          <IconButton aria-label="Help" onClick={() => this.setState({ open: true })}>
            <HelpIcon className={this.props.classes.helpIcon} />
          </IconButton>
        </Typography>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={3}>
            <Paper
              className={
                this.state.geo === 'opt1' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.geo === 'opt1' ? 12 : 1
              }
              onClick={() => this.handleChange('opt1')}
            >
              <NotInterestedIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  None
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper
              className={
                this.state.geo === 'opt2' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.geo === 'opt2' ? 12 : 1
              }
              onClick={() => this.handleChange('opt2')}
            >
              <PlaceIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Simple
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper
              className={
                this.state.geo === 'opt3' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.geo === 'opt3' ? 12 : 1
              }
              onClick={() => this.handleChange('opt3')}
            >
              <LayersIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Advanced
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            GeoLocation
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              GeoLocation can help you give a better experience to your users<br /><br />
              None: No GeoLocation will be used<br /><br />
              Simple: Simple location queries, see where your users are<br /><br />
              Advanced: Geo Fencing, Location Queries, etc.
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

export default withStyles(styleSheet)(Quote04);
