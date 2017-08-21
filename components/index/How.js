import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';
import { withStyles } from 'material-ui/styles';
import Fade from 'material-ui/transitions/Fade';
import Slide from 'material-ui/transitions/Slide';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import { logEvent } from '../../tools/analytics';
import Hwdi1 from '../../static/hwdi_1.svg';
import Hwdi2 from '../../static/hwdi_2.svg';
import Hwdi3 from '../../static/hwdi_3.svg';
import Hwdi4 from '../../static/hwdi_4.svg';
import Hwdi5 from '../../static/hwdi_5.svg';

const styles = {
  section: {
    padding: '50px 10px 100px 10px',
  },
  padSections: {
    marginTop: 10,
  },
  sectionTitle: {
    color: blue[500],
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 10,
  },
  div: {
    padding: '10px 50px 10px 50px',
  },
  grid: {
    textAlign: 'center',
  },
  img: {
    maxWidth: '70%',
    maxHeight: 200,
  },
};

class How extends Component {
  state = {
    isVisible: null,
  };

  handleClick = (action) => {
    if (this.props.id) {
      logEvent('click', action);
    }
  };

  handleChange = (isVisible) => {
    if (this.props.id) {
      if (isVisible !== this.state.isVisible) {
        if (isVisible) logEvent('section', 'how');
        this.setState({ isVisible });
      }
    }
  };

  renderIcon = (index) => {
    switch (index) {
      case 0:
        return <Hwdi1 className={this.props.classes.img} />;
      case 1:
        return <Hwdi2 className={this.props.classes.img} />;
      case 2:
        return <Hwdi3 className={this.props.classes.img} />;
      case 3:
        return <Hwdi4 className={this.props.classes.img} />;
      case 4:
        return <Hwdi5 className={this.props.classes.img} />;
      default:
        return null;
    }
  }

  renderFeatures = () => {
    if (this.props.i18n.store.data.en.common.how.features) {
      const features = this.props.i18n.store.data.en.common.how.features;
      return features.map((feature, index) => {
        const array = [];
        if ((index + 1) % 2 === 0) {
          array.push(
            <Grid item xs={12} sm={5} className={this.props.classes.grid} hidden={{ smUp: true }}>
              <Fade in enterTransitionDuration={2000}>
                {this.renderIcon(index)}
              </Fade>
            </Grid>);
        } else {
          array.push(
            <Grid item xs={12} sm={5} className={this.props.classes.grid}>
              <Fade in enterTransitionDuration={2000}>
                {this.renderIcon(index)}
              </Fade>
            </Grid>,
          );
        }

        array.push(
          <Grid item xs={12} sm={5} className={this.props.classes.grid}>
            <div className={this.props.classes.div}>
              <Typography type="title" align="left" paragraph>
                {this.props.t(`how.features.${index}.title`)}
              </Typography>
              <Typography type="body1" align="left">
                {this.props.t(`how.features.${index}.description`)}
              </Typography>
            </div>
          </Grid>,
        );

        if ((index + 1) % 2 === 0) {
          array.push(
            <Grid item xs={12} sm={5} className={this.props.classes.grid} hidden={{ xsDown: true }}>
              <Fade in enterTransitionDuration={2000}>
                {this.renderIcon(index)}
              </Fade>
            </Grid>,
          );
        }

        return array;
      });
    }
    return null;
  }

  render() {
    return (
      <div className={this.props.classes.section}>
        <VisibilitySensor
          onChange={this.handleChange}
          active={!this.state.isVisible}
          delayedCall
          minTopValue={300}
          partialVisibility
        >
          <Grid container justify="center" align="center" className={this.props.classes.padSections}>
            <Grid item xs={12} sm={12}>
              <Typography type="display1" align="center" className={this.props.classes.sectionTitle}>
                {this.props.t('how.title')}
              </Typography>
              <Slide direction="up" enterTransitionDuration={1000} in>
                <Typography type="subheading" align="center" className={this.props.classes.sectionSubTitle}>
                  {this.props.t('how.subtitle')}
                </Typography>
              </Slide>
            </Grid>
            {this.renderFeatures()}
          </Grid>
        </VisibilitySensor >
      </div>
    );
  }
}

export default translate(['common'])(withStyles(styles, { name: 'HowIndex' })(How));
