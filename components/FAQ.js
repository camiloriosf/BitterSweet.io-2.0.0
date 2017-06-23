import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { fullWhite, indigo, grey } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Fade from 'material-ui/transitions/Fade';
import { gql, graphql } from 'react-apollo';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import { logEvent } from '../tools/analytics';

const styleSheet = createStyleSheet('FAQ', {
  section: {
    background: fullWhite,
    padding: '10px 10px 30px 10px',
  },
  padSections: {
    marginTop: 10,
  },
  sectionTitle: {
    color: indigo[500],
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 10,
  },
  question: {
    color: indigo[400],
    cursor: 'pointer',
  },
  answer: {
    color: grey[500],
  },
});

class FAQ extends Component {
  state = {
    isVisible: null,
    question: 0,
  };

  handleClick = (question) => {
    /* if (!this.props.data.loading) {
      logEvent('click', action);
    }*/
    this.setState({ question });
  };

  handleChange = (isVisible) => {
    if (!this.props.data.loading) {
      if (isVisible !== this.state.isVisible) {
        if (isVisible) logEvent('section', 'FAQ');
        this.setState({ isVisible });
      }
    }
  };

  renderQuestions = (start, finish) => {
    if (this.props.i18n.store.data.en.common.faq.questions) {
      const questions = this.props.i18n.store.data.en.common.faq.questions;
      return questions.map((question, index) => {
        if (index >= start && index <= finish) {
          return (
            <Grid item xs={12} sm={12} key={question.question}>
              <Typography type="subheading" align="left" className={this.props.classes.question} onClick={() => this.handleClick(index)}>
                {this.props.t(`faq.questions.${index}.question`)}
              </Typography>
              {this.state.question === index ?
                <Fade enterTransitionDuration={500} in >
                  <Typography type="body1" align="left" className={this.props.classes.answer}>
                    {this.props.t(`faq.questions.${index}.answer`)}
                  </Typography>
                </Fade>
                : null}
            </Grid>
          );
        }
        return null;
      });
    }
    return null;
  }

  render() {
    return (
      <div className={this.props.classes.section}>
        <VisibilitySensor onChange={this.handleChange} />
        <Grid container justify="center" align="flex-start" className={this.props.classes.padSections}>
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
            <Grid container justify="center" align="flex-start">
              {this.renderQuestions(0, 5)}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Grid container justify="center" align="flex-start">
              {this.renderQuestions(6, 11)}
            </Grid>
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
