import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { gql, graphql } from 'react-apollo';
import { translate } from 'react-i18next';

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
    payg: true,
    installments: false,
    fee: false,
  };

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
            <TextField label={this.props.t('quote.send.name')} type="text" className={this.props.classes.field} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label={this.props.t('quote.send.email')} type="text" className={this.props.classes.field} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button raised color="primary">{this.props.t('quote.send.submit')}</Button>
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

export default translate(['common'])(graphql(user, { props: data => data })(withStyles(styleSheet)(Send)));
