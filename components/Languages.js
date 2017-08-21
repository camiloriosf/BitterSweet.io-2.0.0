import React, { Component } from 'react';
import Button from 'material-ui/Button';
import LanguageIcon from 'material-ui-icons/Language';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Fade from 'material-ui/transitions/Fade';
import onClickOutside from 'react-onclickoutside';
import { translate } from 'react-i18next';

const styles = {
  section: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    padding: 5,
    zIndex: 9999999999,
  },
  languageES: {
    position: 'fixed',
    bottom: 50,
    left: 0,
    margin: 5,
    zIndex: 9999999999,
  },
  languageEN: {
    position: 'fixed',
    bottom: 120,
    left: 0,
    margin: 5,
    zIndex: 9999999999,
  },
};

class Languages extends Component {
  state = {
    open: false,
    transition: true,
    count: 0,
  };

  handleClick = () => {
    if (this.state.open) this.setState({ transition: false });
    else this.setState({ open: true, transition: true, count: 0 });
  };

  handleRequest = (lang) => {
    this.setState({ transition: false });
    this.props.i18n.changeLanguage(lang);
  };

  handleTransition = () => {
    this.setState({ count: this.state.count + 1 });
    if (this.state.count === 2) this.setState({ open: false, transition: true });
  }

  handleClickOutside = () => {
    this.setState({ transition: false });
  }

  render() {
    return (
      <div className={this.props.classes.section} >
        <IconButton color="accent" onClick={this.handleClick}>
          <LanguageIcon />
        </IconButton>
        { this.state.open ?
          <div>
            <Fade
              enterTransitionDuration={200}
              leaveTransitionDuration={500}
              in={this.state.transition}
              onExited={this.handleTransition}
            >
              <Button fab className={this.props.classes.languageES} onClick={() => this.handleRequest('es')}>
                ES
              </Button>
            </Fade>
            <Fade
              enterTransitionDuration={500}
              leaveTransitionDuration={200}
              in={this.state.transition}
              onExited={this.handleTransition}
            >
              <Button fab className={this.props.classes.languageEN} onClick={() => this.handleRequest('en')}>
                EN
              </Button>
            </Fade>
          </div>
        : null}
      </div>
    );
  }
}

export default
  translate(['common'])(withStyles(styles, { name: 'Languages' })(onClickOutside(Languages)));
