import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { translate } from 'react-i18next';
import Fade from 'material-ui/transitions/Fade';
import { logEvent } from '../../tools/analytics';

const styles = {
  section: {
    padding: '20px 10px 50px 10px',
  },
  subTitle: {
    maxWidth: 400,
  },
  sections: {
    marginTop: 100,
  },
  imageContainer: {
    textAlign: 'center',
  },
  image: {
    maxWidth: 394,
  },
};

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  handleClick = (action) => {
    if (this.props.id) {
      logEvent('click', action);
    }
  };

  handleChange = (isVisible) => {
    if (this.props.id) {
      if (isVisible !== this.state.isVisible && this.props.id) {
        if (isVisible) logEvent('section', 'quote_hero');
        this.setState({ isVisible });
      }
    }
  };

  renderView = () => (
    <Grid container justify="flex-start" align="flex-start" direction="row-reverse">
      <Grid item xs={12} sm={5} className={this.props.classes.sections}>
        <Grid container justify="flex-start" align="flex-start">
          <Grid item xs={12} sm={12}>
            <Fade enterTransitionDuration={500} in>
              <Typography type="display1" color="accent" align="left">
                {this.props.t('quote.title')}
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Fade enterTransitionDuration={1000} in>
              <Typography type="subheading" align="left" className={this.props.classes.subTitle}>
                {this.props.t('quote.subtitle')}
              </Typography>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={5}>
        <div className={this.props.classes.imageContainer}>
          <img src="static/cabecera_quote.png" alt="Quote my project" className={this.props.classes.image} />
        </div>
      </Grid>
    </Grid>
    )

  render() {
    return (
      <div className={this.props.classes.section}>
        {this.renderView()}
      </div>
    );
  }
}

export default translate(['common'])(withStyles(styles, { name: 'HeroQuote' })(Hero));

