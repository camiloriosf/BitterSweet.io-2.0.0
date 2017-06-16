import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { fullWhite, indigo, blue } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import ViewColumnIcon from 'material-ui-icons/ViewColumn';
import ViewArrayIcon from 'material-ui-icons/ViewArray';
import ViewCarouselIcon from 'material-ui-icons/ViewCarousel';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import HelpIcon from 'material-ui-icons/Help';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const styleSheet = createStyleSheet('Quote08', {
  slide: {
    padding: 15,
    color: '#fff',
  },
  title1: {
    color: fullWhite,
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    fill: indigo[500],
  },
  helpIcon: {
    fill: blue[200],
  },
  paperSelected: {
    textAlign: 'center',
    padding: 5,
    cursor: 'pointer',
  },
  paperUnSelected: {
    textAlign: 'center',
    padding: 5,
    background: indigo[200],
    cursor: 'pointer',
  },
});

class Quote08 extends Component {
  state = {
    product: 'opt2',
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleChange = (product) => {
    this.setState({ product });
  };

  render() {
    return (
      <div className={this.props.classes.slide}>
        <Typography type="title" align="center" className={this.props.classes.title1}>
          Product
          <IconButton aria-label="Help" onClick={() => this.setState({ open: true })}>
            <HelpIcon className={this.props.classes.helpIcon} />
          </IconButton>
        </Typography>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={3}>
            <Paper
              className={
                this.state.product === 'opt1' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.product === 'opt1' ? 12 : 1
              }
              onClick={() => this.handleChange('opt1')}
            >
              <ViewColumnIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Prototype
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper
              className={
                this.state.product === 'opt2' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.product === 'opt2' ? 12 : 1
              }
              onClick={() => this.handleChange('opt2')}
            >
              <ViewArrayIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  MVP
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper
              className={
                this.state.product === 'opt3' ?
                this.props.classes.paperSelected :
                this.props.classes.paperUnSelected
              }
              elevation={
                this.state.product === 'opt3' ? 12 : 1
              }
              onClick={() => this.handleChange('opt3')}
            >
              <ViewCarouselIcon className={this.props.classes.icon} />
              <Typography type="subheading" align="center">
                  Polished
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            Product
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Select the polishing level of your app<br /><br />
              Prototype: Very basic app, mostly to show the user interface<br /><br />
              MVP: Minimum viable product. A product ready to be tested and launched.<br /><br />
              Polished: Every aspect of the design and user interface has been addressed.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">Great!</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Quote08);
