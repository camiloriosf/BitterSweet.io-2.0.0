import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import AssignmentIcon from 'material-ui-icons/Assignment';
import PhonelinkIcon from 'material-ui-icons/Phonelink';
import WeekendIcon from 'material-ui-icons/Weekend';
import MoneyOffIcon from 'material-ui-icons/MoneyOff';
import SecurityIcon from 'material-ui-icons/Security';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Slide from 'material-ui/transitions/Slide';
import { gql, graphql } from 'react-apollo';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import { logEvent } from '../../tools/analytics';

const styleSheet = createStyleSheet('Services', {
  section: {
    background: grey[50],
    minHeight: 200,
    padding: '50px 10px 100px 10px',
  },
  paper: {
    textAlign: 'left',
    minHeight: 180,
    padding: 20,
  },
  padSections: {
    marginTop: 10,
  },
  icon: {
    fill: blue[100],
    width: 50,
    height: 50,
  },
  sectionTitle: {
    color: blue[500],
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 10,
  },
  secondRow: {
    marginTop: 10,
  },
});

class Services extends Component {
  state = {
    isVisible: false,
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

  renderIcon = (index) => {
    switch (index) {
      case 0:
        return <PhonelinkIcon className={this.props.classes.icon} />;
      case 1:
        return <FavoriteBorderIcon className={this.props.classes.icon} />;
      case 2:
        return <MoneyOffIcon className={this.props.classes.icon} />;
      case 3:
        return <AssignmentIcon className={this.props.classes.icon} />;
      case 4:
        return <WeekendIcon className={this.props.classes.icon} />;
      case 5:
        return <SecurityIcon className={this.props.classes.icon} />;
      default:
        return null;
    }
  }

  renderFeatures = (start, finish) => {
    if (this.props.i18n.store.data.en.common.services.features) {
      const features = this.props.i18n.store.data.en.common.services.features;
      return features.map((feature, index) => {
        if (index >= start && index <= finish) {
          return (
            <Grid item xs={12} sm={4} md={3} key={feature.title}>
              <Slide direction="up" enterTransitionDuration={1000} in>
                <Paper className={this.props.classes.paper} elevation={10}>
                  {this.renderIcon(index)}
                  <Typography type="title" align="left">
                    {this.props.t(`services.features.${index}.title`)}
                  </Typography>
                  <Typography type="body1" align="left">
                    {this.props.t(`services.features.${index}.description`)}
                  </Typography>
                </Paper>
              </Slide>
            </Grid>
          );
        }
        return null;
      });
    }
    return null;
  }

  renderContent() {
    return (
      <div>
        <Grid container justify="center" align="flex-start" className={this.props.classes.padSections}>
          <Grid item xs={12} sm={12}>
            <Slide direction="up" enterTransitionDuration={1000} in={this.state.isVisible}>
              <Typography type="display1" align="center" className={this.props.classes.sectionTitle}>
                {this.props.t('services.title')}
              </Typography>
            </Slide>
            <Slide direction="up" enterTransitionDuration={1000} in={this.state.isVisible}>
              <Typography type="subheading" align="center" className={this.props.classes.sectionSubTitle}>
                {this.props.t('services.subtitle')}
              </Typography>
            </Slide>
          </Grid>
          {this.renderFeatures(0, 2)}
        </Grid>
        <Grid container justify="center" align="flex-start" className={this.props.classes.secondRow}>
          {this.renderFeatures(3, 5)}
        </Grid>
      </div>
    );
  }

  render() {
    return (
      <VisibilitySensor onChange={this.handleChange} active={!this.state.isVisible} delayedCall>
        <div className={this.props.classes.section}>
          <Grid container justify="center" align="flex-start" className={this.props.classes.padSections}>
            <Grid item xs={12} sm={12}>
              <Typography type="display1" align="center" className={this.props.classes.sectionTitle}>
                {this.props.t('services.title')}
              </Typography>
              <Slide direction="up" enterTransitionDuration={1000} in>
                <Typography type="subheading" align="center" className={this.props.classes.sectionSubTitle}>
                  {this.props.t('services.subtitle')}
                </Typography>
              </Slide>
            </Grid>
            { this.renderFeatures(0, 2) }
          </Grid>
          <Grid container justify="center" align="flex-start" className={this.props.classes.secondRow}>
            { this.renderFeatures(3, 5) }
          </Grid>
        </div>
      </VisibilitySensor>
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
