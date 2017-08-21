import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import HelpOutlineIcon from 'material-ui-icons/HelpOutline';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';
import { translate } from 'react-i18next';
import * as actions from '../../lib/actions/quote';

const styles = {
  slide: {
    padding: 30,
  },
  paper: {
    textAlign: 'center',
    padding: 20,
  },
  iconButton: {
    textAlign: 'right',
  },
};

class Pages extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleRequestOpen = () => this.setState({ open: true });

  handleUp = () => {
    this.props.updateValue({
      value:
      { pages: this.props.pages + 1 },
    });
  };

  handleDown = () => {
    if (this.props.pages > 1) {
      this.props.updateValue({
        value:
        { pages: this.props.pages - 1 },
      });
    }
  };

  render() {
    const sections = Object.keys(this.props.i18n.store.data.en.common.quote.sections);
    const section = sections.indexOf('Pages') + 1;
    return (
      <div className={this.props.classes.slide}>
        <Grid container justify="flex-start" align="center" gutter={40}>
          <Grid item xs={12} sm={3}>
            <Typography color="accent" type="headline" align="right">
              {section}/{sections.length}
            </Typography>
            <Typography type="title" color="secondary" align="right">
              {this.props.t('quote.sections.Pages.title')}
            </Typography>
            <div className={this.props.classes.iconButton}>
              <IconButton color="primary" aria-label="Help" onClick={this.handleRequestOpen}>
                <HelpOutlineIcon />
              </IconButton>
            </div>
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
                          {this.props.pages}
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
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {this.props.t('quote.sections.Pages.dialog.title')}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.t('quote.sections.Pages.dialog.content.0')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              {this.props.t('quote.sections.Pages.dialog.button')}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pages: state.quote.pages,
  };
}

export default translate(['common'])(
  connect(mapStateToProps, actions)(withStyles(styles, { name: 'PagesQuote' })(Pages)));
