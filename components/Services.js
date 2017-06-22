import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import { indigo, grey } from 'material-ui/styles/colors';
import AssignmentIcon from 'material-ui-icons/Assignment';
import PhonelinkIcon from 'material-ui-icons/Phonelink';
import WeekendIcon from 'material-ui-icons/Weekend';
import MoneyOffIcon from 'material-ui-icons/MoneyOff';
import SecurityIcon from 'material-ui-icons/Security';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import { logEvent } from '../tools/analytics';

const styleSheet = createStyleSheet('Services', {
  section: {
    background: grey[100],
    padding: 10,
  },
  paper: {
    textAlign: 'left',
    minHeight: 180,
    padding: 20,
  },
  padSections: {
    marginTop: '5%',
  },
  padXSSections: {
    marginTop: '20%',
  },
  icon: {
    fill: indigo[100],
    width: 50,
    height: 50,
  },
  sectionTitle: {
    color: indigo[500],
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 40,
  },
  secondRow: {
    marginTop: 20,
  },
});

class Services extends Component {
  state = {
    isVisible: null,
  };

  handleClick = (action) => {
    if (!this.props.data.loading) {
      logEvent('click', action);
    }
  };

  handleChange = (isVisible) => {
    if (!this.props.data.loading) {
      if (isVisible !== this.state.isVisible) {
        if (isVisible) logEvent('section', 'services');
        this.setState({ isVisible });
      }
    }
  };

  render() {
    return (
      <div className={this.props.classes.section}>
        <VisibilitySensor onChange={this.handleChange} />
        <Hidden smUp><div className={this.props.classes.padXSSections} /></Hidden>
        <Hidden xsDown><div className={this.props.classes.padSections} /></Hidden>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={12}>
            <Typography type="display1" align="center" className={this.props.classes.sectionTitle}>
              {this.props.t('services.title')}
            </Typography>
            <Typography type="subheading" align="center" className={this.props.classes.sectionSubTitle}>
              {this.props.t('services.subtitle')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={this.props.classes.paper} elevation={24}>
              <PhonelinkIcon className={this.props.classes.icon} />
              <Typography type="title" align="left">
                {this.props.t('services.features.0.title')}
              </Typography>
              <Typography type="body1" align="left">
                {this.props.t('services.features.0.description')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={this.props.classes.paper} square elevation={24}>
              <FavoriteBorderIcon className={this.props.classes.icon} />
              <Typography type="title" align="left">
                {this.props.t('services.features.1.title')}
              </Typography>
              <Typography type="body1" align="left">
                {this.props.t('services.features.1.description')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={this.props.classes.paper} square elevation={24}>
              <MoneyOffIcon className={this.props.classes.icon} />
              <Typography type="title" align="left">
                {this.props.t('services.features.2.title')}
              </Typography>
              <Typography type="body1" align="left">
                {this.props.t('services.features.2.description')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justify="center" align="flex-start" className={this.props.classes.secondRow}>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={this.props.classes.paper} square elevation={24}>
              <AssignmentIcon className={this.props.classes.icon} />
              <Typography type="title" align="left">
                {this.props.t('services.features.3.title')}
              </Typography>
              <Typography type="body1" align="left">
                {this.props.t('services.features.3.description')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={this.props.classes.paper} square elevation={24}>
              <WeekendIcon className={this.props.classes.icon} />
              <Typography type="title" align="left">
                {this.props.t('services.features.4.title')}
              </Typography>
              <Typography type="body1" align="left">
                {this.props.t('services.features.4.description')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={this.props.classes.paper} elevation={24}>
              <SecurityIcon className={this.props.classes.icon} />
              <Typography type="title" align="left">
                {this.props.t('services.features.5.title')}
              </Typography>
              <Typography type="body1" align="left">
                {this.props.t('services.features.5.description')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Hidden smUp><div className={this.props.classes.padXSSections} /></Hidden>
        <Hidden xsDown><div className={this.props.classes.padSections} /></Hidden>
      </div>
    );
  }
}

const user = gql`
  query User {
    user {
      token
      id
    }
  }
`;

export default translate(['common'])(graphql(user, { props: data => data })(withStyles(styleSheet)(Services)));
