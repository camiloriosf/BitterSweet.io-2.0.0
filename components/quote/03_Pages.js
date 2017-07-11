import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';
import { translate } from 'react-i18next';

const styleSheet = createStyleSheet('Pages', {
  slide: {
    padding: 20,
  },
  paper: {
    textAlign: 'center',
    padding: 10,
  },
});

class Pages extends Component {
  state = {
    pages: 1,
  };

  handleRequestClose = () => this.setState({ open: false });

  handleUp = () => {
    this.setState({
      pages: this.state.pages + 1,
    });
  };

  handleDown = () => {
    if (this.state.pages > 1) {
      this.setState({
        pages: this.state.pages - 1,
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
                          {this.state.pages}
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
      </div>
    );
  }
}

export default translate(['common'])(withStyles(styleSheet)(Pages));
