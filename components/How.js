import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { fullWhite, indigo } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import { logEvent } from '../tools/analytics';

const styleSheet = createStyleSheet('How', {
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
  div: {
    padding: '10px 50px 10px 50px',
  },
  grid: {
    textAlign: 'center',
  },
  img: {
    maxWidth: '70%',
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

  renderFeatures = () => {
    if (this.props.i18n.store.data.en.common.how.features) {
      const features = this.props.i18n.store.data.en.common.how.features;
      return features.map((feature, index) => {
        const array = [];
        if ((index + 1) % 2 === 0) {
          array.push(
            <Grid item xs={12} sm={6} className={this.props.classes.grid} hidden={{ smUp: true }}>
              <img src={`/static/how_${index}.png`} alt={`imagen ${index + 1}`} className={this.props.classes.img} />
            </Grid>);
        } else {
          array.push(<Grid item xs={12} sm={6} className={this.props.classes.grid}>
            <img src={`/static/how_${index}.png`} alt={`imagen ${index + 1}`} className={this.props.classes.img} />
          </Grid>);
        }

        array.push(<Grid item xs={12} sm={6} className={this.props.classes.grid}>
          <div className={this.props.classes.div}>
            <Typography type="title" align="left" paragraph>
              {this.props.t(`how.features.${index}.title`)}
            </Typography>
            <Typography type="body1" align="left">
              {this.props.t(`how.features.${index}.description`)}
            </Typography>
          </div>
        </Grid>);

        if ((index + 1) % 2 === 0) {
          array.push(
            <Grid item xs={12} sm={6} className={this.props.classes.grid} hidden={{ xsDown: true }}>
              <img src={`/static/how_${index}.png`} alt={`imagen ${index + 1}`} className={this.props.classes.img} />
            </Grid>);
        }

        return array;
      });
    }
    return null;
  }

  render() {
    return (
      <div className={this.props.classes.section}>
        <VisibilitySensor onChange={this.handleChange} />
        <Grid container justify="center" align="center" className={this.props.classes.padSections}>
          <Grid item xs={12} sm={12}>
            <Typography type="display1" align="center" className={this.props.classes.sectionTitle}>
              {this.props.t('how.title')}
            </Typography>
            <Typography type="subheading" align="center" className={this.props.classes.sectionSubTitle}>
              {this.props.t('how.subtitle')}
            </Typography>
          </Grid>
          {this.renderFeatures()}
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

export default translate(['common'])(graphql(user, { props: data => data })(withStyles(styleSheet)(How)));
