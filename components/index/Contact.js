import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import blue from 'material-ui/colors/blue';
import Snackbar from 'material-ui/Snackbar';
import { withStyles, createStyleSheet } from 'material-ui/styles';
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
    loading: false,
    name: '',
    email: '',
    message: '',
    open: false,
    status: '',
  };

  validateEmail = (value) => {
    const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if (value === '' || !re.test(value)) {
      return true;
    }
    return false;
  }

  handleClick = (action) => {
    if (this.props.id) {
      logEvent('click', action);
    }
  };

  handleChange = (isVisible) => {
    if (this.props.id) {
      if (isVisible !== this.state.isVisible) {
        if (isVisible) logEvent('section', 'contact');
        this.setState({ isVisible });
      }
    }
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    this.props.mutate({
      variables: {
        user: {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
          sent: true,
        },
      },
    })
      .then(() => this.setState({ loading: false, name: '', email: '', message: '', open: true, status: this.props.t('contact.form.success') }))
      .catch(() => this.setState({ loading: false, open: true, status: this.props.t('contact.form.error') }));
  }

  render() {
    return (
      <VisibilitySensor
        onChange={this.handleChange}
        active={!this.state.isVisible}
        delayedCall
        minTopValue={300}
        partialVisibility
      >
        <div className={this.props.classes.section}>
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
                <form onSubmit={this.handleSubmit}>
                  <Grid container justify="center" align="flex-start">
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label={this.props.t('contact.form.name')}
                        type="text"
                        className={this.props.classes.textFields}
                        value={this.state.name}
                        onChange={event => this.setState({ name: event.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label={this.props.t('contact.form.email')}
                        type="email"
                        className={this.props.classes.textFields}
                        value={this.state.email}
                        onChange={event => this.setState({ email: event.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        label={this.props.t('contact.form.about')}
                        rows="4"
                        multiline
                        type="text"
                        className={this.props.classes.textFields}
                        value={this.state.message}
                        onChange={event => this.setState({ message: event.target.value })}
                      />
                    </Grid>
                    <div className={this.props.classes.buttonDiv}>
                      {
                      this.state.loading
                        ? <CircularProgress />
                      : <Button raised type="submit" disabled={this.validateEmail(this.state.email)}>{this.props.t('contact.form.button')}</Button>}
                    </div>
                  </Grid>
                </form>
              </div>
            </Grid>
          </Grid>
          <Snackbar
            open={this.state.open}
            autoHideDuration={2000}
            onRequestClose={this.handleRequestClose}
            SnackbarContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{this.state.status}</span>}
          />
        </div>
      </VisibilitySensor>
    );
  }
}

const mutation = gql`
  mutation CreateContact($user: CreateContactInput!){
    createContact(input:$user){
      changedContact{
        sent
      }
    }
  }
`;

export default translate(['common'])(graphql(mutation)(withStyles(styleSheet)(Contact)));
