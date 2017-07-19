import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import ViewColumnIcon from 'material-ui-icons/ViewColumn';
import ViewArrayIcon from 'material-ui-icons/ViewArray';
import ViewCarouselIcon from 'material-ui-icons/ViewCarousel';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('Product', {
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

class Product extends Component {
  state = {
    prototypeHover: false,
    mvpHover: true,
    polishedHover: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handlePaperState = (paper) => {
    if (this.props.quote.product[paper]) {
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
        key: JSON.stringify({ product: { sub: paper, value } }),
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateQuote: {
          id: this.props.quote.id,
          product: {
            ...state,
            __typename: 'ProductType',
          },
          __typename: 'QuoteType',
        },
      },
    });
  }

  render() {
    const sections = Object.keys(this.props.i18n.store.data.en.common.quote.sections);
    const section = sections.indexOf('Product') + 1;
    return (
      <div className={this.props.classes.slide}>
        <Grid container justify="flex-start" align="center" gutter={40}>
          <Grid item xs={12} sm={3}>
            <Typography color="accent" type="headline" align="right">
              {section}/{sections.length}
            </Typography>
            <Typography type="title" color="secondary" align="right">
              {this.props.t('quote.sections.Product.title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('prototype')
                  }
                  elevation={
                    this.props.quote.product.prototype ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'prototype',
                      true,
                    {
                      prototype: true,
                      mvp: false,
                      polished: false,
                    },
                  )}
                  onMouseEnter={() => this.setState({ prototypeHover: true })}
                  onMouseLeave={() => this.setState({ prototypeHover: false })}
                >
                  {this.props.quote.product.prototype ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <ViewColumnIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Product.prototype')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('mvp')
                  }
                  elevation={
                    this.props.quote.product.mvp ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'mvp',
                      true,
                    {
                      prototype: false,
                      mvp: true,
                      polished: false,
                    },
                  )}
                  onMouseEnter={() => this.setState({ mvpHover: true })}
                  onMouseLeave={() => this.setState({ mvpHover: false })}
                >
                  {this.props.quote.product.mvp ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <ViewArrayIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Product.mvp')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('polished')
                  }
                  elevation={
                    this.props.quote.product.polished ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'polished',
                      true,
                    {
                      prototype: false,
                      mvp: false,
                      polished: true,
                    },
                  )}
                  onMouseEnter={() => this.setState({ polishedHover: true })}
                  onMouseLeave={() => this.setState({ polishedHover: false })}
                >
                  {this.props.quote.product.polished ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <ViewCarouselIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Product.polished')}
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
      product{
        prototype
        mvp
        polished
      }
    }
  }
`;

export default translate(['common'])(graphql(mutation)(withStyles(styleSheet)(Product)));
