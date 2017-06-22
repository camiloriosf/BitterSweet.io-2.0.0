import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { indigo, fullWhite } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { gql, graphql } from 'react-apollo';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import { logEvent } from '../tools/analytics';
import { Quote01, Quote02, Quote03, Quote04, Quote05, Quote06, Quote07, Quote08, Quote09, Send } from './quote/';

const styleSheet = createStyleSheet('Quote', {
  section: {
    background: indigo[500],
    padding: '10px 10px 30px 10px',
  },
  padSections: {
    marginTop: 10,
  },
  sectionTitle: {
    color: fullWhite,
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 0,
    color: fullWhite,
  },
  stepperDiv: {
    padding: 5,
  },
  stepper: {
    flexGrow: 1,
    margin: '0 auto',
  },
  swipeableViews: {
    padding: 0,
  },
});

class Quote extends Component {
  state = {
    steps: 10,
    activeStep: 0,
    isVisible: null,
  };

  handleClick = (action) => {
    if (!this.props.data.loading) {
      logEvent('click', action);
    }
  };

  handleLogChange = (isVisible) => {
    if (!this.props.data.loading) {
      if (isVisible !== this.state.isVisible) {
        if (isVisible) logEvent('section', 'quote');
        this.setState({ isVisible });
      }
    }
  };

  handleChange = (index) => {
    this.setState({
      activeStep: index,
    });
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  render() {
    return (
      <div className={this.props.classes.section}>
        <VisibilitySensor onChange={this.handleLogChange} />
        <Grid container justify="center" align="flex-start" className={this.props.classes.padSections}>
          <Grid item xs={12} sm={12}>
            <Typography type="display1" align="center" className={this.props.classes.sectionTitle}>
              {this.props.t('quote.title')}
            </Typography>
            <Typography type="subheading" align="center" className={this.props.classes.sectionSubTitle}>
              {this.props.t('quote.subtitle')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div className={this.props.classes.swipeableViews}>
              <SwipeableViews
                enableMouseEvents
                index={this.state.activeStep}
                onChangeIndex={this.handleChange}
              >
                <Quote01 />
                <Quote02 />
                <Quote03 />
                <Quote04 />
                <Quote05 />
                <Quote06 />
                <Quote07 />
                <Quote08 />
                <Quote09 />
                <Send />
              </SwipeableViews>
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className={this.props.classes.stepperDiv}>
              <MobileStepper
                type="progress"
                steps={this.state.steps}
                position="static"
                backButtonText={this.props.t('quote.back')}
                nextButtonText={this.props.t('quote.next')}
                activeStep={this.state.activeStep}
                className={this.props.classes.stepper}
                onBack={this.handleBack}
                onNext={this.handleNext}
                disableBack={this.state.activeStep === 0}
                disableNext={this.state.activeStep === (this.state.steps - 1)}
              />
            </div>
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

export default translate(['common'])(graphql(user, { props: data => data })(withStyles(styleSheet)(Quote)));
