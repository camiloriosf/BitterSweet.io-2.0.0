import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import { translate } from 'react-i18next';
import * as actions from '../../lib/actions/quote';
import fetchQuote from '../../lib/queries/fetchQuote';

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
    this.props.updateName({ name });
  }

  handleEmailChange = ({ email }) => {
    this.props.updateEmail({ email });
  }

  handleSubmit = () => {
    this.setState({ loading: true });
    this.props.mutate({
      variables: {
        id: this.props.quote.id,
        key: JSON.stringify({
          comments: { value: this.props.comments },
          name: { value: this.props.name },
          email: { value: this.props.email },
          saved: { value: true },
        }),
      },
      refetchQueries: [{ query: fetchQuote, variables: { id: this.props.quote.id } }],
    })
      .then(() => this.props.clearForm())
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
              value={this.props.name}
              onChange={event => this.handleNameChange({ name: event.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label={this.props.t('quote.send.email')}
              type="text"
              className={this.props.classes.field}
              value={this.props.email}
              onChange={event => this.handleEmailChange({ email: event.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            {
              this.state.loading
                ? <CircularProgress />
                : <Button raised disabled={this.validateEmail(this.props.email)} color="primary" onClick={this.handleSubmit}>{this.props.t('quote.send.submit')}</Button>
            }
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
      saved
    }
  }
`;

function mapStateToProps(state) {
  return {
    comments: state.quote.comments,
    name: state.quote.name,
    email: state.quote.email,
  };
}

export default translate(['common'])(
  connect(mapStateToProps, actions)(
    graphql(mutation)(withStyles(styleSheet)(Send))));
