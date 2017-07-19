import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import { translate } from 'react-i18next';

let interval;

const styleSheet = createStyleSheet('Send', {
  section: {
    padding: 20,
    marginTop: 50,
    marginBottom: 50,
  },
  field: {
    textAlign: 'center',
    width: '100%',
  },
});

class Send extends Component {
  state = {
    name: this.props.quote.name,
    email: this.props.quote.email,
  };

  validateEmail = (value) => {
    const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if (value === '' || !re.test(value)) {
      return true;
    }
    return false;
  }

  handleChange = ({ field, value }) => {
    this.setState({ [field]: value });
    clearInterval(interval);
    interval = setInterval(() => {
      clearInterval(interval);
      this.props.mutate({
        variables: {
          id: this.props.quote.id,
          key: JSON.stringify({ [field]: { value } }),
        },
      });
    }, 500);
  }

  render() {
    return (
      <div className={this.props.classes.section}>
        <Grid container justify="center" align="center">
          <Grid item xs={12} sm={12}>
            <Typography type="display1" align="center" paragraph>
              {this.props.t('quote.send.title')}
            </Typography>
            <Typography type="subheading" align="center" paragraph>
              {this.props.t('quote.send.subtitle')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label={this.props.t('quote.send.name')}
              type="text"
              className={this.props.classes.field}
              value={this.state.name}
              onChange={event => this.handleChange({ field: 'name', value: event.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label={this.props.t('quote.send.email')}
              type="text"
              className={this.props.classes.field}
              value={this.state.email}
              onChange={event => this.handleChange({ field: 'email', value: event.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button raised disabled={this.validateEmail(this.state.email)} color="primary">{this.props.t('quote.send.submit')}</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mutation = gql`
  mutation UpdateQuote($id: String!, $key: JSON) {
    updateQuote(id: $id, key: $key) {
      id
      name
      email
    }
  }
`;

export default translate(['common'])(graphql(mutation)(withStyles(styleSheet)(Send)));
