import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import BuildIcon from 'material-ui-icons/Build';
import DashboardIcon from 'material-ui-icons/Dashboard';
import TimelineIcon from 'material-ui-icons/Timeline';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('Admin', {
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

class Admin extends Component {
  state = {
    adminHover: false,
    dashboardHover: false,
    reportsHover: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handlePaperState = (paper) => {
    if (this.props.quote.admin[paper]) {
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
        key: JSON.stringify({ admin: { sub: paper, value } }),
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateQuote: {
          id: this.props.quote.id,
          admin: {
            ...state,
            __typename: 'AdminType',
          },
          __typename: 'QuoteType',
        },
      },
    });
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
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('admin')
                  }
                  elevation={
                    this.props.quote.admin.admin ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'admin',
                      !this.props.quote.admin.admin,
                    {
                      admin: !this.props.quote.admin.admin,
                      dashboard: this.props.quote.admin.dashboard,
                      reports: this.props.quote.admin.reports,
                    },
                  )}
                  onMouseEnter={() => this.setState({ adminHover: true })}
                  onMouseLeave={() => this.setState({ adminHover: false })}
                >
                  {this.props.quote.admin.admin ?
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
                    this.props.quote.admin.dashboard ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'dashboard',
                      !this.props.quote.admin.dashboard,
                    {
                      admin: this.props.quote.admin.admin,
                      dashboard: !this.props.quote.admin.dashboard,
                      reports: this.props.quote.admin.reports,
                    },
                  )}
                  onMouseEnter={() => this.setState({ dashboardHover: true })}
                  onMouseLeave={() => this.setState({ dashboardHover: false })}
                >
                  {this.props.quote.admin.dashboard ?
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
                    this.props.quote.admin.reports ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'reports',
                      !this.props.quote.admin.reports,
                    {
                      admin: this.props.quote.admin.admin,
                      dashboard: this.props.quote.admin.dashboard,
                      reports: !this.props.quote.admin.reports,
                    },
                  )}
                  onMouseEnter={() => this.setState({ reportsHover: true })}
                  onMouseLeave={() => this.setState({ reportsHover: false })}
                >
                  {this.props.quote.admin.reports ?
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
      </div>
    );
  }
}

const mutation = gql`
  mutation UpdateQuote($id: String!, $key: JSON) {
    updateQuote(id: $id, key: $key) {
      id
      admin{
        admin
        dashboard
        reports
      }
    }
  }
`;

export default translate(['common'])(graphql(mutation)(withStyles(styleSheet)(Admin)));
