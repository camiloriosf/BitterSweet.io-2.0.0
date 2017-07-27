import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import { gql, graphql, compose } from 'react-apollo';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Hero from './quote/Hero';
import Prices from './quote/Prices';
import Comments from './quote/Comments';
import Send from './quote/Send';
import Sections from './quote/Sections';
import fetchUser from '../lib/queries/fetchUser';
import fetchQuote from '../lib/queries/fetchQuote';
import * as actions from '../lib/actions/quote';

const styleSheet = createStyleSheet('Quote', {
  startButton: {
    margin: '0 auto',
    textAlign: 'center',
    paddingBottom: 100,
  },
});

class Quote extends Component {
  state = {
    loaded: false,
    fetching: false,
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.quote) {
      if (nextProps.quote.quote) {
        if (nextProps.quote.quote.id) {
          this.setState({ loaded: true, fetching: false });
        }
      }
    }
  }

  handleClick = () => {
    if (!this.props.user.loading && this.props.user.user) {
      if (this.props.user.user.token) {
        this.setState({ fetching: true });
        this.props.mutate({ variables: { token: this.props.user.user.token } })
          .then(data => this.props.getQuote({ id: data.data.createQuote.id }));
      }
    }
  }

  checkQuote = () => {
    if (!this.state.loaded) {
      if (this.props.user.loading || this.state.fetching) {
        return (
          <div className={this.props.classes.startButton}>
            <CircularProgress />
          </div>
        );
      }
      return (
        <div className={this.props.classes.startButton}>
          <Button raised color="primary" onClick={this.handleClick}>Start</Button>
        </div>
      );
    }

    if (
      this.props.quote.quote.saved &&
      this.props.quote.quote.id === this.props.id &&
      !this.state.fetching) {
      return (
        <div>
          <Typography type="title" align="center" paragraph>
            Great!
          </Typography>
          <Typography type="subheading" align="center" paragraph>
            We have received your quotation, we will get in touch with you shortly.
          </Typography>
          <div className={this.props.classes.startButton}>
            <Button raised color="primary" onClick={this.handleClick}>Quote again</Button>
          </div>
        </div>
      );
    }

    if (this.props.quote.quote.saved) {
      return (
        <div className={this.props.classes.startButton}>
          <CircularProgress />
        </div>);
    }

    return (
      <span>
        <Sections quote={this.props.quote.quote} />
        <Prices quote={this.props.quote.quote} />
        <Comments quote={this.props.quote.quote} />
        <Send quote={this.props.quote.quote} />
      </span>
    );
  }

  render() {
    return (
      <div >
        <Header url={this.props.url} />
        <Hero />
        {this.checkQuote()}
        <Footer />
      </div>
    );
  }
}

const mutation = gql`
  mutation CreateQuote($token: String!) {
    createQuote(token: $token) {
      id
    }
  }
`;

function mapStateToProps(state) {
  return {
    id: state.quote.id,
  };
}

export default
  translate(['common'])(
    connect(mapStateToProps, actions)(
      compose(
        graphql(mutation),
        graphql(fetchUser, { props: data => data, name: 'user' }),
        graphql(fetchQuote, { props: data => data, options: props => ({ variables: { id: props.id } }), skip: props => !props.id, name: 'quote' }),
      )(
        withStyles(styleSheet)(Quote))));
