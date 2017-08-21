import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import { translate } from 'react-i18next';
import * as actions from '../../lib/actions/quote';

const styles = {
  section: {
    padding: 20,
    marginTop: 50,
    marginBottom: 50,
  },
  field: {
    textAlign: 'center',
    width: '100%',
  },
};

class Send extends Component {

  state = {
    loading: false,
  };

  validateEmail = (value) => {
    const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if (value === '' || !re.test(value)) {
      return true;
    }
    return false;
  }

  handleNameChange = ({ name }) => {
    this.props.updateValue({
      value:
      {
        name,
      },
    });
  }

  handleEmailChange = ({ email }) => {
    this.props.updateValue({
      value:
      {
        email,
      },
    });
  }

  handleSubmit = () => {
    this.setState({ loading: true });
    this.props.mutate({
      variables: {
        quote: { ...this.props.quote, saved: true },
      },
    })
      .then(data =>
        this.props.updateValue({ value: { saved: data.data.updateQuote.changedQuote.saved } }))
      .catch(() => this.setState({ loading: false }));
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
              value={this.props.quote.name}
              onChange={event => this.handleNameChange({ name: event.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label={this.props.t('quote.send.email')}
              type="email"
              className={this.props.classes.field}
              value={this.props.quote.email}
              onChange={event => this.handleEmailChange({ email: event.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            {
              this.state.loading
                ? <CircularProgress />
                : <Button raised disabled={this.validateEmail(this.props.quote.email)} color="primary" onClick={this.handleSubmit}>{this.props.t('quote.send.submit')}</Button>
            }
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mutation = gql`
  mutation updateQuote($quote:UpdateQuoteInput!){
    updateQuote(input:$quote){
      changedQuote{
        saved
      }
    }
  }
`;

function mapStateToProps(state) {
  return {
    quote: state.quote,
  };
}

export default translate(['common'])(
  connect(mapStateToProps, actions)(
    graphql(mutation)(withStyles(styles, { name: 'SendQuote' })(Send))));
