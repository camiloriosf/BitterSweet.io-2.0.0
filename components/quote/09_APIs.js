import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('APIs', {
  slide: {
    padding: 20,
  },
  paper: {
    textAlign: 'center',
    padding: 10,
  },
});

class APIs extends Component {

  handleRequestClose = () => this.setState({ open: false });

  handleUp = () => {
    this.props.mutate({
      variables: {
        id: this.props.quote.id,
        key: JSON.stringify({ apis: { value: this.props.quote.apis + 1 } }),
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateQuote: {
          id: this.props.quote.id,
          apis: this.props.quote.apis + 1,
          __typename: 'QuoteType',
        },
      },
    });
  };

  handleDown = () => {
    if (this.props.quote.apis > 0) {
      this.props.mutate({
        variables: {
          id: this.props.quote.id,
          key: JSON.stringify({ apis: { value: this.props.quote.apis - 1 } }),
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateQuote: {
            id: this.props.quote.id,
            apis: this.props.quote.apis - 1,
            __typename: 'QuoteType',
          },
        },
      });
    }
  };

  render() {
    const sections = Object.keys(this.props.i18n.store.data.en.common.quote.sections);
    const section = sections.indexOf('APIs') + 1;
    return (
      <div className={this.props.classes.slide}>
        <Grid container justify="flex-start" align="center" gutter={40}>
          <Grid item xs={12} sm={3}>
            <Typography color="accent" type="headline" align="right">
              {section}/{sections.length}
            </Typography>
            <Typography type="title" color="secondary" align="right">
              {this.props.t('quote.sections.APIs.title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={6} md={3}>
                <Paper className={this.props.classes.paper} elevation={12} >
                  <Grid container justify="center" align="center">
                    <Grid item xs={4}>
                      <IconButton onClick={this.handleDown}>
                        <RemoveIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                      <div>
                        <Typography type="display1" align="center">
                          {this.props.quote.apis}
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <IconButton onClick={this.handleUp}>
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
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
      apis
    }
  }
`;

export default translate(['common'])(graphql(mutation)(withStyles(styleSheet)(APIs)));
