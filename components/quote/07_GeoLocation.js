import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import PlaceIcon from 'material-ui-icons/Place';
import LayersIcon from 'material-ui-icons/Layers';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('GeoLocation', {
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

class GeoLocation extends Component {
  state = {
    simple: false,
    advanced: false,
    simpleHover: false,
    advancedHover: false,
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
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('simple')
                  }
                  elevation={
                    this.state.simple ? 12 : 1
                  }
                  onClick={() => this.setState({ simple: !this.state.simple, advanced: false })}
                  onMouseEnter={() => this.setState({ simpleHover: true })}
                  onMouseLeave={() => this.setState({ simpleHover: false })}
                >
                  {this.state.simple ?
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
                    this.state.advanced ? 12 : 1
                  }
                  onClick={() => this.setState({ advanced: !this.state.advanced, simple: false })}
                  onMouseEnter={() => this.setState({ advancedHover: true })}
                  onMouseLeave={() => this.setState({ advancedHover: false })}
                >
                  {this.state.advanced ?
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
      </div>
    );
  }
}

export default translate(['common'])(withStyles(styleSheet)(GeoLocation));
