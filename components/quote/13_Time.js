import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import AlarmIcon from 'material-ui-icons/Alarm';
import ScheduleIcon from 'material-ui-icons/Schedule';
import UpdateIcon from 'material-ui-icons/Update';
import DoneIcon from 'material-ui-icons/Done';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('Time', {
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

class Time extends Component {
  state = {
    normalHover: true,
    asapHover: false,
    nowHover: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  handlePaperState = (paper) => {
    if (this.props.quote.time[paper]) {
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
        key: JSON.stringify({ time: { sub: paper, value } }),
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateQuote: {
          id: this.props.quote.id,
          time: {
            ...state,
            __typename: 'TimeType',
          },
          __typename: 'QuoteType',
        },
      },
    });
  }

  render() {
    const sections = Object.keys(this.props.i18n.store.data.en.common.quote.sections);
    const section = sections.indexOf('Time') + 1;
    return (
      <div className={this.props.classes.slide}>
        <Grid container justify="flex-start" align="center" gutter={40}>
          <Grid item xs={12} sm={3}>
            <Typography color="accent" type="headline" align="right">
              {section}/{sections.length}
            </Typography>
            <Typography type="title" color="secondary" align="right">
              {this.props.t('quote.sections.Time.title')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9} className={this.props.classes.section}>
            <Grid container justify="flex-start" align="flex-start">
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('normal')
                  }
                  elevation={
                    this.props.quote.time.normal ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'normal',
                      true,
                    {
                      normal: true,
                      asap: false,
                      now: false,
                    },
                  )}
                  onMouseEnter={() => this.setState({ normalHover: true })}
                  onMouseLeave={() => this.setState({ normalHover: false })}
                >
                  {this.props.quote.time.normal ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <AlarmIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Time.normal')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('asap')
                  }
                  elevation={
                    this.props.quote.time.asap ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'asap',
                      true,
                    {
                      normal: false,
                      asap: true,
                      now: false,
                    },
                  )}
                  onMouseEnter={() => this.setState({ asapHover: true })}
                  onMouseLeave={() => this.setState({ asapHover: false })}
                >
                  {this.props.quote.time.asap ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <ScheduleIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Time.asap')}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper
                  className={
                    this.handlePaperState('now')
                  }
                  elevation={
                    this.props.quote.time.now ? 12 : 1
                  }
                  onClick={() => this.handleSubmit(
                      'now',
                      true,
                    {
                      normal: false,
                      asap: false,
                      now: true,
                    },
                  )}
                  onMouseEnter={() => this.setState({ nowHover: true })}
                  onMouseLeave={() => this.setState({ nowHover: false })}
                >
                  {this.props.quote.time.now ?
                    <DoneIcon className={this.props.classes.done} />
                    : null
                  }
                  <UpdateIcon className={this.props.classes.icon} />
                  <Typography type="subheading" align="center">
                    {this.props.t('quote.sections.Time.now')}
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
      time {
        normal
        asap
        now
      }
    }
  }
`;

export default translate(['common'])(graphql(mutation)(withStyles(styleSheet)(Time)));
