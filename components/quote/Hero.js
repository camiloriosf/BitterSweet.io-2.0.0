import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import { translate } from 'react-i18next';
import Fade from 'material-ui/transitions/Fade';
import { logPageView, setUser, logEvent } from '../../tools/analytics';
import env from '../../env';

const styleSheet = createStyleSheet('HeroQuote', {
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
    width: '90%',
  },
});

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      user: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.user && !this.state.user) {
      setUser(nextProps.data.user.id);
      logPageView();
      this.setState({ user: true });
    }
  }

  handleClick = (action) => {
    if (!this.props.data.loading) {
      logEvent('click', action);
    }
  };

  handleChange = (isVisible) => {
    if (!this.props.data.loading) {
      if (isVisible !== this.state.isVisible && this.state.user) {
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
          <img src={`${env.imageURI}imagen_01.png`} alt="imagen_01" className={this.props.classes.image} />
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

const user = gql`
  query User {
    user {
      token
      id
    }
  }
`;

export default translate(['common'])(graphql(user, { props: data => data })(withStyles(styleSheet)(Hero)));

