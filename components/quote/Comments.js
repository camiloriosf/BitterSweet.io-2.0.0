import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import { translate } from 'react-i18next';

let interval;

const styleSheet = createStyleSheet('Comments', {
  section: {
    padding: 20,
    marginTop: 50,
  },
  comments: {
    textAlign: 'center',
    width: '100%',
  },
});

class Comments extends Component {
  state = {
    comments: this.props.quote.comments,
  };

  handleChange = ({ value }) => {
    this.setState({ comments: value });
    clearInterval(interval);
    interval = setInterval(() => {
      clearInterval(interval);
      this.props.mutate({
        variables: {
          id: this.props.quote.id,
          key: JSON.stringify({ comments: { value } }),
        },
      });
    }, 500);
  }

  render() {
    return (
      <div className={this.props.classes.section}>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={12}>
            <Typography type="display1" align="center" paragraph>
              {this.props.t('quote.comments.title')}
            </Typography>
            <Typography type="subheading" align="center" paragraph>
              {this.props.t('quote.comments.subtitle')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              label={this.props.t('quote.comments.textField')}
              rows="4"
              multiline
              type="text"
              className={this.props.classes.comments}
              value={this.state.comments}
              onChange={event => this.handleChange({ value: event.target.value })}
            />
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
      comments
    }
  }
`;

export default translate(['common'])(graphql(mutation)(withStyles(styleSheet)(Comments)));
