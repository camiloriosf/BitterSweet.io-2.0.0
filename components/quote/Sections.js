import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import { translate } from 'react-i18next';
import SwipeableViews from 'react-swipeable-views';
import NDA from './01_NDA';
import Platforms from './02_Platforms';
import Pages from './03_Pages';
import Design from './04_Design';
import Authentication from './05_Authentication';
import Data from './06_Data';
import GeoLocation from './07_GeoLocation';
import Communication from './08_Communication';
import APIs from './09_APIs';
import Commerce from './10_Commerce';
import Admin from './11_Admin';
import Product from './12_Product';
import Time from './13_Time';

const styles = {
  section: {
    textAlign: 'center',
  },
  div: {
    display: 'inline-block',
  },
  stepper: {
    backgroundColor: '#FFF',
  },
};

class Comments extends Component {
  state = {
    activeStep: 0,
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
        <SwipeableViews animateHeight enableMouseEvents index={this.state.activeStep}>
          <NDA quote={this.props.quote} />
          <Platforms quote={this.props.quote} />
          <Pages quote={this.props.quote} />
          <Design quote={this.props.quote} />
          <Authentication quote={this.props.quote} />
          <Data quote={this.props.quote} />
          <GeoLocation quote={this.props.quote} />
          <Communication quote={this.props.quote} />
          <APIs quote={this.props.quote} />
          <Commerce quote={this.props.quote} />
          <Admin quote={this.props.quote} />
          <Product quote={this.props.quote} />
          <Time quote={this.props.quote} />
        </SwipeableViews>
        <div className={this.props.classes.div}>
          <MobileStepper
            type="text"
            steps={13}
            position="static"
            className={this.props.classes.stepper}
            activeStep={this.state.activeStep}
            onBack={this.handleBack}
            onNext={this.handleNext}
            disableBack={this.state.activeStep === 0}
            disableNext={this.state.activeStep === 12}
          />
        </div>
      </div>
    );
  }
}

export default translate(['common'])(withStyles(styles, { name: 'SectionsQuote' })(Comments));
