import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import { fullWhite, indigo, grey } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import { logEvent } from '../tools/analytics';

const styleSheet = createStyleSheet('FAQ', {
  section: {
    background: fullWhite,
    padding: 10,
  },
  padSections: {
    marginTop: '5%',
  },
  padXSSections: {
    marginTop: '20%',
  },
  sectionTitle: {
    color: indigo[500],
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 40,
  },
  question: {
    color: indigo[400],
  },
  answer: {
    color: grey[500],
  },
});

class FAQ extends Component {
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
        if (isVisible) logEvent('section', 'FAQ');
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
              {this.props.t('faq.title')}
            </Typography>
            <Typography type="subheading" align="center" className={this.props.classes.sectionSubTitle}>
              {this.props.t('faq.subtitle')}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={5}>
            <Typography type="subheading" align="left" className={this.props.classes.question}>
              {this.props.t('faq.questions.0.question')}
            </Typography>
            <Typography type="body1" align="left" className={this.props.classes.answer}>
              {this.props.t('faq.questions.0.answer')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography type="subheading" align="left" className={this.props.classes.question}>
              {this.props.t('faq.questions.1.question')}
            </Typography>
            <Typography type="body1" align="left" className={this.props.classes.answer}>
              {this.props.t('faq.questions.1.answer')}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={5}>
            <Typography type="subheading" align="left" className={this.props.classes.question}>
              {this.props.t('faq.questions.2.question')}
            </Typography>
            <Typography type="body1" align="left" className={this.props.classes.answer}>
              {this.props.t('faq.questions.2.answer')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography type="subheading" align="left" className={this.props.classes.question}>
              {this.props.t('faq.questions.3.question')}
            </Typography>
            <Typography type="body1" align="left" className={this.props.classes.answer}>
              {this.props.t('faq.questions.3.answer')}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={5}>
            <Typography type="subheading" align="left" className={this.props.classes.question}>
              {this.props.t('faq.questions.4.question')}
            </Typography>
            <Typography type="body1" align="left" className={this.props.classes.answer}>
              {this.props.t('faq.questions.4.answer')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography type="subheading" align="left" className={this.props.classes.question}>
              {this.props.t('faq.questions.5.question')}
            </Typography>
            <Typography type="body1" align="left" className={this.props.classes.answer}>
              {this.props.t('faq.questions.5.answer')}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={5}>
            <Typography type="subheading" align="left" className={this.props.classes.question}>
              {this.props.t('faq.questions.6.question')}
            </Typography>
            <Typography type="body1" align="left" className={this.props.classes.answer}>
              {this.props.t('faq.questions.6.answer')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography type="subheading" align="left" className={this.props.classes.question}>
              {this.props.t('faq.questions.7.question')}
            </Typography>
            <Typography type="body1" align="left" className={this.props.classes.answer}>
              {this.props.t('faq.questions.7.answer')}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={5}>
            <Typography type="subheading" align="left" className={this.props.classes.question}>
              {this.props.t('faq.questions.8.question')}
            </Typography>
            <Typography type="body1" align="left" className={this.props.classes.answer}>
              {this.props.t('faq.questions.8.answer')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography type="subheading" align="left" className={this.props.classes.question}>
              {this.props.t('faq.questions.9.question')}
            </Typography>
            <Typography type="body1" align="left" className={this.props.classes.answer}>
              {this.props.t('faq.questions.9.answer')}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={5}>
            <Typography type="subheading" align="left" className={this.props.classes.question}>
              {this.props.t('faq.questions.10.question')}
            </Typography>
            <Typography type="body1" align="left" className={this.props.classes.answer}>
              {this.props.t('faq.questions.10.answer')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography type="subheading" align="left" className={this.props.classes.question}>
              {this.props.t('faq.questions.11.question')}
            </Typography>
            <Typography type="body1" align="left" className={this.props.classes.answer}>
              {this.props.t('faq.questions.11.answer')}
            </Typography>
          </Grid>
        </Grid>
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

export default translate(['common'])(graphql(user, { props: data => data })(withStyles(styleSheet)(FAQ)));
