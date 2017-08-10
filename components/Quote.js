import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import { gql, graphql, compose } from 'react-apollo';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
// import Header from './Header';
// import Footer from './Footer';
// import Nav from './Nav';
// import Languages from './Languages';
// import Hero from './quote/Hero';
// import Prices from './quote/Prices';
// import Comments from './quote/Comments';
// import Send from './quote/Send';
// import Sections from './quote/Sections';
import * as actions from '../lib/actions/quote';
import { logPageView, setUser } from '../tools/analytics';

const Header = dynamic(import('./Header'));
const Footer = dynamic(import('./Footer'));
const Nav = dynamic(import('./Nav'));
const Languages = dynamic(import('./Languages'));
const Hero = dynamic(import('./quote/Hero'));
const Prices = dynamic(import('./quote/Prices'));
const Comments = dynamic(import('./quote/Comments'));
const Send = dynamic(import('./quote/Send'));
const Sections = dynamic(import('./quote/Sections'));


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
    showCircular: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
    this.checkUser();
  }

  checkUser() {
    if (window.localStorage) {
      if (window.localStorage.getItem('user')) {
        this.props.updateDevice(
          {
            variables: {
              device: { id: window.localStorage.getItem('user') },
            },
          },
        ).then(() => {
          setUser(window.localStorage.getItem('user'));
          logPageView();
          this.setState({ loaded: true });
        },
        ).catch(() => {
          this.props.createDevice()
            .then((data) => {
              window.localStorage.setItem('user', data.data.createDevice.changedDevice.id);
              setUser(window.localStorage.getItem('user'));
              logPageView();
              this.setState({ loaded: true });
            });
        });
      } else {
        this.props.createDevice()
          .then((data) => {
            window.localStorage.setItem('user', data.data.createDevice.changedDevice.id);
            setUser(window.localStorage.getItem('user'));
            logPageView();
            this.setState({ loaded: true });
          });
      }
    }
  }

  handleClick = () => {
    if (this.state.loaded && window.localStorage.getItem('user')) {
      this.setState({ showCircular: true }, () => {
        this.props.clearForm();
        this.props.createQuote({ variables: { deviceId: window.localStorage.getItem('user') } })
          .then(data =>
            this.props.updateValue({ value: { id: data.data.createQuote.changedQuote.id } }))
          .then(() => this.setState({ showCircular: false }));
      });
    }
  }

  checkQuote = () => {
    if (!this.state.loaded || this.state.showCircular) {
      return (
        <div className={this.props.classes.startButton}>
          <CircularProgress />
        </div>
      );
    }

    if (this.state.loaded && !this.props.id) {
      return (
        <div className={this.props.classes.startButton}>
          <Button raised color="primary" onClick={this.handleClick}>{this.props.t('quote.start')}</Button>
        </div>
      );
    }

    if (this.props.saved) {
      return (
        <div>
          <Typography type="title" align="center" paragraph>
            {this.props.t('quote.send.success')}
          </Typography>
          <Typography type="subheading" align="center" paragraph>
            {this.props.t('quote.send.message')}
          </Typography>
          <div className={this.props.classes.startButton}>
            <Button raised color="primary" onClick={this.handleClick}>{this.props.t('quote.send.again')}</Button>
          </div>
        </div>
      );
    }

    return (
      <span>
        <Sections />
        <Prices />
        <Comments />
        <Send />
      </span>
    );
  }

  render() {
    return (
      <div >
        <Header url={this.props.url} id={window.localStorage.getItem('user')} />
        <Hero id={window.localStorage.getItem('user')} />
        {this.checkQuote()}
        <Footer id={window.localStorage.getItem('user')} />
        <Languages />
        <Hidden mdUp><Nav url={this.props.url} /></Hidden>
      </div>
    );
  }
}

const createDevice = gql`
  mutation {
    createDevice(input:{}){
      changedDevice{
        id
      }
    }
  }
`;

const updateDevice = gql`
  mutation UpdateDevice($device:UpdateDeviceInput!){
    updateDevice(input:$device){
      changedDevice{
        id
      }
    }
  }
`;

const createQuote = gql`
  mutation createQuote($deviceId: ID!){
    createQuote(input:{deviceId:$deviceId}){
      changedQuote{
        id
      }
    }
  }
`;

function mapStateToProps(state) {
  return {
    id: state.quote.id,
    saved: state.quote.saved,
  };
}

export default
  translate(['common'])(
    connect(mapStateToProps, actions)(
      compose(
        graphql(createDevice, { name: 'createDevice' }),
        graphql(createQuote, { name: 'createQuote' }),
        graphql(updateDevice, { name: 'updateDevice' }),
      )(
        withStyles(styleSheet)(Quote))));
