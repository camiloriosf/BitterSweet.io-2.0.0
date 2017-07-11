import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import WebIcon from 'material-ui-icons/Web';
import AndroidIcon from 'material-ui-icons/Android';
import TabletMacIcon from 'material-ui-icons/TabletMac';
import DesktopMacIcon from 'material-ui-icons/DesktopMac';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('Platforms', {
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

class Platforms extends Component {
  state = {
    web: false,
    android: false,
    ios: false,
    desktop: false,
    webHover: false,
    androidHover: false,
    iosHover: false,
    desktopHover: false,
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
    const section = sections.indexOf('Platforms') + 1;
    return (
      <div className={this.props.classes.slide}>
        <Grid container justify="flex-start" align="center" gutter={40}>
          <Grid item xs={12} sm={3}>
            <Typography color="accent" type="headline" align="right">
              {section}/{sections.length}
            </Typography>
            <Typography type="title" color="secondary" align="right">
              {this.props.t('quote.sections.Platforms.title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('web')
                  }
                  elevation={
                    this.state.web ? 12 : 1
                  }
                  onClick={() => this.setState({ web: !this.state.web })}
                  onMouseEnter={() => this.setState({ webHover: true })}
                  onMouseLeave={() => this.setState({ webHover: false })}
                >
                  {this.state.web ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <WebIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Platforms.web')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('android')
                  }
                  elevation={
                    this.state.android ? 12 : 1
                  }
                  onClick={() => this.setState({ android: !this.state.android })}
                  onMouseEnter={() => this.setState({ androidHover: true })}
                  onMouseLeave={() => this.setState({ androidHover: false })}
                >
                  {this.state.android ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <AndroidIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Platforms.android')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('ios')
                  }
                  elevation={
                    this.state.ios ? 12 : 1
                  }
                  onClick={() => this.setState({ ios: !this.state.ios })}
                  onMouseEnter={() => this.setState({ iosHover: true })}
                  onMouseLeave={() => this.setState({ iosHover: false })}
                >
                  {this.state.ios ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <TabletMacIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Platforms.ios')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('desktop')
                  }
                  elevation={
                    this.state.desktop ? 12 : 1
                  }
                  onClick={() => this.setState({ desktop: !this.state.desktop })}
                  onMouseEnter={() => this.setState({ desktopHover: true })}
                  onMouseLeave={() => this.setState({ desktopHover: false })}
                >
                  {this.state.desktop ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <DesktopMacIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Platforms.desktop')}
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

export default translate(['common'])(withStyles(styleSheet)(Platforms));
