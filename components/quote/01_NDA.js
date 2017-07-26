import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import SecurityIcon from 'material-ui-icons/Security';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('NDA', {
  slide: {
    padding: 20,
  },
  paperSelected: {
    textAlign: 'center',
    padding: 10,
    cursor: 'pointer',
    position: 'relative',
  },
  paperUnSelected: {
    textAlign: 'center',
    padding: 10,
    cursor: 'pointer',
    background: grey[50],
    position: 'relative',
  },
  paperHover: {
    textAlign: 'center',
    padding: 10,
    cursor: 'pointer',
    position: 'relative',
  },
  icon: {
    width: 40,
    height: 40,
    fill: blue[500],
  },
  done: {
    fill: blue[500],
    position: 'absolute',
    margin: 5,
    top: 0,
    right: 0,
  },
});

class NDA extends Component {
  state = {
    hover: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handlePaperState = () => {
    if (this.props.quote.NDA) {
      return this.props.classes.paperSelected;
    } else if (this.state.hover) {
      return this.props.classes.paperHover;
    }
    return this.props.classes.paperUnSelected;
  }

  handleSubmit = () => {
    this.props.mutate({
      variables: {
        id: this.props.quote.id,
        key: JSON.stringify({ NDA: { value: !this.props.quote.NDA } }),
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateQuote: {
          id: this.props.quote.id,
          NDA: !this.props.quote.NDA,
          __typename: 'QuoteType',
        },
      },
    });
  }

  render() {
    const sections = Object.keys(this.props.i18n.store.data.en.common.quote.sections);
    const section = sections.indexOf('NDA') + 1;
    return (
      <div className={this.props.classes.slide}>
        <Grid container justify="flex-start" align="center" gutter={40}>
          <Grid item xs={12} sm={3}>
            <Typography color="accent" type="headline" align="right">
              {section}/{sections.length}
            </Typography>
            <Typography type="title" color="secondary" align="right">
              {this.props.t('quote.sections.NDA.title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState()
                  }
                  elevation={
                    this.props.quote.NDA ? 12 : 1
                  }
                  onClick={() => this.handleSubmit()}
                  onMouseEnter={() => this.setState({ hover: true })}
                  onMouseLeave={() => this.setState({ hover: false })}
                >
                  {this.props.quote.NDA ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <SecurityIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.NDA.content')}
                  </Typography>
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
      NDA
    }
  }
`;

export default translate(['common'])(graphql(mutation)(withStyles(styleSheet)(NDA)));
