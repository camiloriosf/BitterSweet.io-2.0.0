import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import blue from 'material-ui/colors/blue';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import VisibilitySensor from 'react-visibility-sensor';
import { translate } from 'react-i18next';
import { logEvent } from '../../tools/analytics';

const styleSheet = createStyleSheet('Contact', {
  section: {
    padding: '50px 10px 100px 10px',
  },
  sectionTitle: {
    color: blue[500],
  },
  div: {
    margin: '0 auto',
    textAlign: 'center',
    maxWidth: 500,
  },
  buttonDiv: {
    marginTop: 30,
    textAlign: 'right',
  },
  textFields: {
    width: '100%',
  },
});

class Contact extends Component {
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
        if (isVisible) logEvent('section', 'contact');
        this.setState({ isVisible });
      }
    }
  };

  render() {
    return (
      <div className={this.props.classes.section}>
        <VisibilitySensor onChange={this.handleChange} />
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={12}>
            <Typography type="display1" align="center" className={this.props.classes.sectionTitle} paragraph>
              {this.props.t('contact.title')}
            </Typography>
            <Typography type="subheading" align="center" paragraph>
              {this.props.t('contact.subtitle')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div className={this.props.classes.div}>
              <form>
                <Grid container justify="center" align="flex-start">
                  <Grid item xs={12} sm={6}>
                    <TextField label={this.props.t('contact.form.name')} type="text" className={this.props.classes.textFields} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label={this.props.t('contact.form.email')} type="email" className={this.props.classes.textFields} />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField label={this.props.t('contact.form.about')} rows="4" multiline type="text" className={this.props.classes.textFields} />
                  </Grid>
                  <div className={this.props.classes.buttonDiv}>
                    <Button raised type="submit">{this.props.t('contact.form.button')}</Button>
                  </div>
                </Grid>
              </form>
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

export default translate(['common'])(graphql(user, { props: data => data })(withStyles(styleSheet)(Contact)));
