import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import { translate } from 'react-i18next';

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
    payg: true,
    installments: false,
    fee: false,
  };

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
            <TextField label={this.props.t('quote.comments.textField')} rows="4" multiline type="text" className={this.props.classes.comments} />
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

export default translate(['common'])(graphql(user, { props: data => data })(withStyles(styleSheet)(Comments)));
