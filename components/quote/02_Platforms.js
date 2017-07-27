import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
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
    webHover: false,
    androidHover: false,
    iosHover: false,
    desktopHover: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handlePaperState = (paper) => {
    if (this.props.quote.platforms[paper]) {
      return this.props.classes.paperSelected;
    } else if (this.state[`${paper}Hover`]) {
      return this.props.classes.paperHover;
    }
    return this.props.classes.paperUnSelected;
  }

  handleSubmit = (paper, value, state) => {
    this.props.mutate({
      variables: {
        id: this.props.quote.id,
        key: JSON.stringify({ platforms: { sub: paper, value } }),
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateQuote: {
          id: this.props.quote.id,
          platforms: {
            ...state,
            __typename: 'PlatformsType',
          },
          __typename: 'QuoteType',
        },
      },
    });
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
                    this.props.quote.platforms.web ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'web',
                      !this.props.quote.platforms.web,
                    {
                      web: !this.props.quote.platforms.web,
                      android: this.props.quote.platforms.android,
                      ios: this.props.quote.platforms.ios,
                      desktop: this.props.quote.platforms.desktop,
                    },
                    )}
                  onMouseEnter={() => this.setState({ webHover: true })}
                  onMouseLeave={() => this.setState({ webHover: false })}
                >
                  {this.props.quote.platforms.web ?
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
                    this.props.quote.platforms.android ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'android',
                      !this.props.quote.platforms.android,
                    {
                      web: this.props.quote.platforms.web,
                      android: !this.props.quote.platforms.android,
                      ios: this.props.quote.platforms.ios,
                      desktop: this.props.quote.platforms.desktop,
                    },
                    )}
                  onMouseEnter={() => this.setState({ androidHover: true })}
                  onMouseLeave={() => this.setState({ androidHover: false })}
                >
                  {this.props.quote.platforms.android ?
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
                    this.props.quote.platforms.ios ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'ios',
                      !this.props.quote.platforms.ios,
                    {
                      web: this.props.quote.platforms.web,
                      android: this.props.quote.platforms.android,
                      ios: !this.props.quote.platforms.ios,
                      desktop: this.props.quote.platforms.desktop,
                    },
                    )}
                  onMouseEnter={() => this.setState({ iosHover: true })}
                  onMouseLeave={() => this.setState({ iosHover: false })}
                >
                  {this.props.quote.platforms.ios ?
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
                    this.props.quote.platforms.desktop ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'desktop',
                      !this.props.quote.platforms.desktop,
                    {
                      web: this.props.quote.platforms.web,
                      android: this.props.quote.platforms.android,
                      ios: this.props.quote.platforms.ios,
                      desktop: !this.props.quote.platforms.desktop,
                    },
                    )}
                  onMouseEnter={() => this.setState({ desktopHover: true })}
                  onMouseLeave={() => this.setState({ desktopHover: false })}
                >
                  {this.props.quote.platforms.desktop ?
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

const mutation = gql`
  mutation UpdateQuote($id: String!, $key: JSON) {
    updateQuote(id: $id, key: $key) {
      id
      platforms{
        web
        ios
        android
        desktop
      }
    }
  }
`;

export default translate(['common'])(graphql(mutation)(withStyles(styleSheet)(Platforms)));
