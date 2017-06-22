import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import { fullWhite, indigo } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import { logEvent } from '../tools/analytics';

const styleSheet = createStyleSheet('How', {
  section: {
    background: fullWhite,
    padding: 10,
  },
  padSections: {
    marginTop: '5%',
  },
  sectionTitle: {
    color: indigo[500],
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 40,
  },
  div: {
    padding: 100,
  },
  grid: {
    textAlign: 'center',
  },
});

class How extends Component {
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
        if (isVisible) logEvent('section', 'how');
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
              {this.props.t('how.title')}
            </Typography>
            <Typography type="subheading" align="center" className={this.props.classes.sectionSubTitle}>
              {this.props.t('how.subtitle')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={this.props.classes.grid}>
            Imagen
          </Grid>
          <Grid item xs={12} sm={6} className={this.props.classes.grid}>
            <div className={this.props.classes.div}>
              <Typography type="title" align="center">
                {this.props.t('how.features.0.title')}
              </Typography>
              <Typography type="body1" align="center">
                {this.props.t('how.features.0.description')}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={this.props.classes.grid}>
            <div className={this.props.classes.div}>
              <Typography type="title" align="center">
                {this.props.t('how.features.1.title')}
              </Typography>
              <Typography type="body1" align="center">
                {this.props.t('how.features.1.description')}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={this.props.classes.grid}>
            Imagen
          </Grid>
          <Grid item xs={12} sm={6} className={this.props.classes.grid}>
            Imagen
          </Grid>
          <Grid item xs={12} sm={6} className={this.props.classes.grid}>
            <div className={this.props.classes.div}>
              <Typography type="title" align="center">
                {this.props.t('how.features.2.title')}
              </Typography>
              <Typography type="body1" align="center">
                {this.props.t('how.features.2.description')}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={this.props.classes.grid}>
            <div className={this.props.classes.div}>
              <Typography type="title" align="center">
                {this.props.t('how.features.3.title')}
              </Typography>
              <Typography type="body1" align="center">
                {this.props.t('how.features.3.description')}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={this.props.classes.grid}>
            Imagen
          </Grid>
          <Grid item xs={12} sm={6} className={this.props.classes.grid}>
            Imagen
          </Grid>
          <Grid item xs={12} sm={6} className={this.props.classes.grid}>
            <div className={this.props.classes.div}>
              <Typography type="title" align="center">
                {this.props.t('how.features.4.title')}
              </Typography>
              <Typography type="body1" align="center">
                {this.props.t('how.features.4.description')}
              </Typography>
            </div>
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

export default translate(['common'])(graphql(user, { props: data => data })(withStyles(styleSheet)(How)));
