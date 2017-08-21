import React, { Component } from 'react';
import Link from 'next/link';
import Button from 'material-ui/Button';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Fade from 'material-ui/transitions/Fade';
import onClickOutside from 'react-onclickoutside';
import { translate } from 'react-i18next';

const styles = {
  section: {
    position: 'fixed',
    top: 0,
    right: 0,
    padding: 5,
    zIndex: 9999999999,
  },
  services: {
    position: 'fixed',
    top: 10,
    right: 50,
    margin: 5,
    minWidth: 100,
    zIndex: 9999999999,
  },
  how: {
    position: 'fixed',
    top: 50,
    right: 50,
    margin: 5,
    minWidth: 100,
    zIndex: 9999999999,
  },
  pricing: {
    position: 'fixed',
    top: 90,
    right: 50,
    margin: 5,
    minWidth: 100,
    zIndex: 9999999999,
  },
  quote: {
    position: 'fixed',
    top: 130,
    right: 50,
    margin: 5,
    minWidth: 100,
    zIndex: 9999999999,
  },
  faq: {
    position: 'fixed',
    top: 170,
    right: 50,
    margin: 5,
    minWidth: 100,
    zIndex: 9999999999,
  },
  contact: {
    position: 'fixed',
    top: 210,
    right: 50,
    margin: 5,
    minWidth: 100,
    zIndex: 9999999999,
  },
};

class Nav extends Component {
  state = {
    open: false,
    transition: true,
    count: 0,
  };

  handleClick = () => {
    if (this.state.open) this.setState({ transition: false });
    else this.setState({ open: true, transition: true, count: 0 });
  };

  handleRequest = () => {
    this.setState({ transition: false });
  };

  handleTransition = () => {
    this.setState({ count: this.state.count + 1 });
    if (this.state.count === 6) this.setState({ open: false, transition: true });
  }

  handleClickOutside = () => {
    this.setState({ transition: false });
  }

  render() {
    return (
      <div className={this.props.classes.section} >
        <IconButton color="accent" onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>
        {this.state.open ?
          <div>
            <Fade
              enterTransitionDuration={100}
              leaveTransitionDuration={350}
              in={this.state.transition}
              onExited={this.handleTransition}
            >
              {
                this.props.url.pathname !== '/'
                  ?
                    <Link href="/#services"><Button color="primary" raised dense className={this.props.classes.services}>what we do</Button></Link>
                  :
                    <a href="#services">
                      <Button
                        color="primary"
                        raised
                        dense
                        className={this.props.classes.services}
                        onClick={this.handleRequest}
                      >
                      what we do
                        </Button>
                    </a>
              }
            </Fade>
            <Fade
              enterTransitionDuration={150}
              leaveTransitionDuration={300}
              in={this.state.transition}
              onExited={this.handleTransition}
            >
              {
                this.props.url.pathname !== '/'
                  ?
                    <Link href="/#how"><Button color="primary" raised dense className={this.props.classes.how}>how</Button></Link>
                  :
                    <a href="#how">
                      <Button
                        color="primary"
                        raised
                        dense
                        className={this.props.classes.how}
                        onClick={this.handleRequest}
                      >
                      how
                        </Button>
                    </a>
              }
            </Fade>
            <Fade
              enterTransitionDuration={200}
              leaveTransitionDuration={250}
              in={this.state.transition}
              onExited={this.handleTransition}
            >
              {
                this.props.url.pathname !== '/'
                  ?
                    <Link href="/#pricing"><Button color="primary" raised dense className={this.props.classes.pricing}>pricing</Button></Link>
                  :
                    <a href="#pricing">
                      <Button
                        color="primary"
                        raised
                        dense
                        className={this.props.classes.pricing}
                        onClick={this.handleRequest}
                      >
                      pricing
                        </Button>
                    </a>
              }
            </Fade>
            <Fade
              enterTransitionDuration={250}
              leaveTransitionDuration={200}
              in={this.state.transition}
              onExited={this.handleTransition}
            >
              {
                this.props.url.pathname === '/quote'
                  ?
                    <Button
                      color="primary"
                      raised
                      dense
                      className={this.props.classes.quote}
                      onClick={this.handleRequest}
                    >
                      quote
                    </Button>
                  :
                    <Link href="/quote"><Button color="primary" raised dense className={this.props.classes.quote}>quote</Button></Link>
              }
            </Fade>
            <Fade
              enterTransitionDuration={300}
              leaveTransitionDuration={150}
              in={this.state.transition}
              onExited={this.handleTransition}
            >
              {
                this.props.url.pathname !== '/'
                  ?
                    <Link href="/#faq"><Button color="primary" raised dense className={this.props.classes.faq}>faq</Button></Link>
                  :
                    <a href="#faq">
                      <Button
                        color="primary"
                        raised
                        dense
                        className={this.props.classes.faq}
                        onClick={this.handleRequest}
                      >
                      faq
                        </Button>
                    </a>
              }
            </Fade>
            <Fade
              enterTransitionDuration={350}
              leaveTransitionDuration={100}
              in={this.state.transition}
              onExited={this.handleTransition}
            >
              {
                this.props.url.pathname !== '/'
                  ?
                    <Link href="/#contact"><Button color="primary" raised dense className={this.props.classes.contact}>contact</Button></Link>
                  :
                    <a href="#contact">
                      <Button
                        color="primary"
                        raised
                        dense
                        className={this.props.classes.contact}
                        onClick={this.handleRequest}
                      >
                      contact
                        </Button>
                    </a>
              }
            </Fade>
          </div>
          : null}
      </div>
    );
  }
}

export default
  translate(['common'])(withStyles(styles, { name: 'Nav' })(onClickOutside(Nav)));
