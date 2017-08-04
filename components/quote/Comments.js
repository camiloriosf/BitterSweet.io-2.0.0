import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { translate } from 'react-i18next';
import * as actions from '../../lib/actions/quote';

const styleSheet = createStyleSheet('Comments', {
  section: {
    padding: 20,
    marginTop: 50,
  },
  comments: {
    textAlign: 'center',
    width: '100%',
  },
});

class Comments extends Component {

  handleChange = ({ comments }) => {
    this.props.updateValue({
      value:
      {
        comments,
      },
    });
  }

  render() {
    return (
      <div className={this.props.classes.section}>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={12}>
            <Typography type="display1" align="center" paragraph>
              {this.props.t('quote.comments.title')}
            </Typography>
            <Typography type="subheading" align="center" paragraph>
              {this.props.t('quote.comments.subtitle')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              label={this.props.t('quote.comments.textField')}
              rows="4"
              multiline
              type="text"
              className={this.props.classes.comments}
              value={this.props.comments}
              onChange={event => this.handleChange({ comments: event.target.value })}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.quote.comments,
  };
}

export default translate(['common'])(
  connect(mapStateToProps, actions)(withStyles(styleSheet)(Comments)));
