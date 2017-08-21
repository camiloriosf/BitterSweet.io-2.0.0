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
import BuildIcon from 'material-ui-icons/Build';
import DashboardIcon from 'material-ui-icons/Dashboard';
import TimelineIcon from 'material-ui-icons/Timeline';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';
import * as actions from '../../lib/actions/quote';

const styles = {
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
  iconButton: {
    textAlign: 'right',
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
};

class Admin extends Component {
  state = {
    adminHover: false,
    dashboardHover: false,
    reportsHover: false,
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleRequestOpen = () => this.setState({ open: true });

  handlePaperState = (paper) => {
    if (this.props.admin[paper]) {
      return this.props.classes.paperSelected;
    } else if (this.state[`${paper}Hover`]) {
      return this.props.classes.paperHover;
    }
    return this.props.classes.paperUnSelected;
  }

  render() {
    const sections = Object.keys(this.props.i18n.store.data.en.common.quote.sections);
    const section = sections.indexOf('Admin') + 1;
    return (
      <div className={this.props.classes.slide}>
        <Grid container justify="flex-start" align="center" gutter={40}>
          <Grid item xs={12} sm={3}>
            <Typography color="accent" type="headline" align="right">
              {section}/{sections.length}
            </Typography>
            <Typography type="title" color="secondary" align="right">
              {this.props.t('quote.sections.Admin.title')}
            </Typography>
            <div className={this.props.classes.iconButton}>
              <IconButton color="primary" aria-label="Help" onClick={this.handleRequestOpen}>
                <HelpOutlineIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('admin')
                  }
                  elevation={
                    this.props.admin.admin ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      {
                        admin: {
                          admin: !this.props.admin.admin,
                          dashboard: this.props.admin.dashboard,
                          reports: this.props.admin.reports,
                        },
                      },
                    })}
                  onMouseEnter={() => this.setState({ adminHover: true })}
                  onMouseLeave={() => this.setState({ adminHover: false })}
                >
                  {this.props.admin.admin ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <BuildIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Admin.admin')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('dashboard')
                  }
                  elevation={
                    this.props.admin.dashboard ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      {
                        admin: {
                          admin: this.props.admin.admin,
                          dashboard: !this.props.admin.dashboard,
                          reports: this.props.admin.reports,
                        },
                      },
                    })}
                  onMouseEnter={() => this.setState({ dashboardHover: true })}
                  onMouseLeave={() => this.setState({ dashboardHover: false })}
                >
                  {this.props.admin.dashboard ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <DashboardIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Admin.dashboard')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('reports')
                  }
                  elevation={
                    this.props.admin.reports ? 12 : 1
                  }
                  onClick={() =>
                    this.props.updateValue({
                      value:
                      {
                        admin: {
                          admin: this.props.admin.admin,
                          dashboard: this.props.admin.dashboard,
                          reports: !this.props.admin.reports,
                        },
                      },
                    })}
                  onMouseEnter={() => this.setState({ reportsHover: true })}
                  onMouseLeave={() => this.setState({ reportsHover: false })}
                >
                  {this.props.admin.reports ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <TimelineIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Admin.reports')}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>
            {this.props.t('quote.sections.Admin.dialog.title')}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.t('quote.sections.Admin.dialog.content.0')}<br /><br />
              {this.props.t('quote.sections.Admin.dialog.content.1')}<br /><br />
              {this.props.t('quote.sections.Admin.dialog.content.2')}<br /><br />
              {this.props.t('quote.sections.Admin.dialog.content.3')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              {this.props.t('quote.sections.Admin.dialog.button')}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    admin: state.quote.admin,
  };
}

export default translate(['common'])(
  connect(mapStateToProps, actions)(withStyles(styles, { name: 'AdminQuote' })(Admin)));

