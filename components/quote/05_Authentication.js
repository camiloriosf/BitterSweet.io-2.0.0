import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import EmailIcon from 'material-ui-icons/Email';
import ShareIcon from 'material-ui-icons/Share';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('Authentication', {
  slide: {
    padding: 30,
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

class Authentication extends Component {
  state = {
    emailHover: false,
    socialHover: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handlePaperState = (paper) => {
    if (this.props.quote.authentication[paper]) {
      return this.props.classes.paperSelected;
    } else if (this.state[`${paper}Hover`]) {
      return this.props.classes.paperHover;
    }
    return this.props.classes.paperUnSelected;
  }

  handleSubmit = (paper, value, state) => {
    this.props.mutate({
      variables: {
        id: this.props.quote.id,
        key: JSON.stringify({ authentication: { sub: paper, value } }),
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateQuote: {
          id: this.props.quote.id,
          authentication: {
            ...state,
            __typename: 'AuthenticationType',
          },
          __typename: 'QuoteType',
        },
      },
    });
  }

  render() {
    const sections = Object.keys(this.props.i18n.store.data.en.common.quote.sections);
    const section = sections.indexOf('Authentication') + 1;
    return (
      <div className={this.props.classes.slide}>
        <Grid container justify="flex-start" align="center" gutter={40}>
          <Grid item xs={12} sm={3}>
            <Typography color="accent" type="headline" align="right">
              {section}/{sections.length}
            </Typography>
            <Typography type="title" color="secondary" align="right">
              {this.props.t('quote.sections.Authentication.title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('email')
                  }
                  elevation={
                    this.props.quote.authentication.email ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'email',
                      !this.props.quote.authentication.email,
                    {
                      email: !this.props.quote.authentication.email,
                      social: this.props.quote.authentication.social,
                    },
                    )}
                  onMouseEnter={() => this.setState({ emailHover: true })}
                  onMouseLeave={() => this.setState({ emailHover: false })}
                >
                  {this.props.quote.authentication.email ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <EmailIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Authentication.email')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('social')
                  }
                  elevation={
                    this.props.quote.authentication.social ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'social',
                      !this.props.quote.authentication.social,
                    {
                      email: this.props.quote.authentication.email,
                      social: !this.props.quote.authentication.social,
                    },
                    )}
                  onMouseEnter={() => this.setState({ socialHover: true })}
                  onMouseLeave={() => this.setState({ socialHover: false })}
                >
                  {this.props.quote.authentication.social ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <ShareIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Authentication.social')}
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
      authentication{
        social
        email
      }
    }
  }
`;

export default translate(['common'])(graphql(mutation)(withStyles(styleSheet)(Authentication)));
