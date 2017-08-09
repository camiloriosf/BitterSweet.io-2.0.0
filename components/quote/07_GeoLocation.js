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
import PlaceIcon from 'material-ui-icons/Place';
import LayersIcon from 'material-ui-icons/Layers';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';
import * as actions from '../../lib/actions/quote';

const styleSheet = createStyleSheet('GeoLocation', {
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

class GeoLocation extends Component {
  state = {
    simpleHover: false,
    advancedHover: false,
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleRequestOpen = () => this.setState({ open: true });

  handlePaperState = (paper) => {
    if (this.props.geolocation[paper]) {
      return this.props.classes.paperSelected;
    } else if (this.state[`${paper}Hover`]) {
      return this.props.classes.paperHover;
    }
    return this.props.classes.paperUnSelected;
  }

  render() {
    const sections = Object.keys(this.props.i18n.store.data.en.common.quote.sections);
    const section = sections.indexOf('GeoLocation') + 1;
    return (
      <div className={this.props.classes.slide}>
        <Grid container justify="flex-start" align="center" gutter={40}>
          <Grid item xs={12} sm={3}>
            <Typography color="accent" type="headline" align="right">
              {section}/{sections.length}
            </Typography>
            <Typography type="title" color="secondary" align="right">
              {this.props.t('quote.sections.GeoLocation.title')}
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
                    this.handlePaperState('simple')
                  }
                  elevation={
                    this.props.geolocation.simple ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      { geolocation: {
                        simple: !this.props.geolocation.simple,
                        advanced: false,
                      } } })}
                  onMouseEnter={() => this.setState({ simpleHover: true })}
                  onMouseLeave={() => this.setState({ simpleHover: false })}
                >
                  {this.props.geolocation.simple ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <PlaceIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.GeoLocation.simple')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('advanced')
                  }
                  elevation={
                    this.props.geolocation.advanced ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      { geolocation: {
                        simple: false,
                        advanced: !this.props.geolocation.advanced,
                      } } })}
                  onMouseEnter={() => this.setState({ advancedHover: true })}
                  onMouseLeave={() => this.setState({ advancedHover: false })}
                >
                  {this.props.geolocation.advanced ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <LayersIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.GeoLocation.advanced')}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {this.props.t('quote.sections.GeoLocation.dialog.title')}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.t('quote.sections.GeoLocation.dialog.content.0')}<br /><br />
              {this.props.t('quote.sections.GeoLocation.dialog.content.1')}<br /><br />
              {this.props.t('quote.sections.GeoLocation.dialog.content.2')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              {this.props.t('quote.sections.GeoLocation.dialog.button')}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    geolocation: state.quote.geolocation,
  };
}

export default translate(['common'])(
  connect(mapStateToProps, actions)(withStyles(styleSheet)(GeoLocation)));
