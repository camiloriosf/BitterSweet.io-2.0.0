import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import StorageIcon from 'material-ui-icons/Storage';
import PermMediaIcon from 'material-ui-icons/PermMedia';
import DeviceHubIcon from 'material-ui-icons/DeviceHub';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('Data', {
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

class Data extends Component {
  state = {
    database: false,
    media: false,
    datasource: false,
    databaseHover: false,
    mediaHover: false,
    datasourceHover: false,
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
    const section = sections.indexOf('Data') + 1;
    return (
      <div className={this.props.classes.slide}>
        <Grid container justify="flex-start" align="center" gutter={40}>
          <Grid item xs={12} sm={3}>
            <Typography color="accent" type="headline" align="right">
              {section}/{sections.length}
            </Typography>
            <Typography type="title" color="secondary" align="right">
              {this.props.t('quote.sections.Data.title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('database')
                  }
                  elevation={
                    this.state.database ? 12 : 1
                  }
                  onClick={() => this.setState({ database: !this.state.database })}
                  onMouseEnter={() => this.setState({ databaseHover: true })}
                  onMouseLeave={() => this.setState({ databaseHover: false })}
                >
                  {this.state.database ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <StorageIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Data.database')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('media')
                  }
                  elevation={
                    this.state.media ? 12 : 1
                  }
                  onClick={() => this.setState({ media: !this.state.media })}
                  onMouseEnter={() => this.setState({ mediaHover: true })}
                  onMouseLeave={() => this.setState({ mediaHover: false })}
                >
                  {this.state.media ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <PermMediaIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Data.media')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('datasource')
                  }
                  elevation={
                    this.state.datasource ? 12 : 1
                  }
                  onClick={() => this.setState({ datasource: !this.state.datasource })}
                  onMouseEnter={() => this.setState({ datasourceHover: true })}
                  onMouseLeave={() => this.setState({ datasourceHover: false })}
                >
                  {this.state.datasource ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <DeviceHubIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Data.datasource')}
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

export default translate(['common'])(withStyles(styleSheet)(Data));
