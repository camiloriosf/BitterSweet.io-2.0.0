import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import { fullWhite, indigo } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('FAQ', {
  section: {
    background: fullWhite,
    padding: 10,
  },
  padSections: {
    marginTop: '5%',
  },
  padFAQ: {
    marginTop: '4%',
  },
  padXSSections: {
    marginTop: '20%',
  },
  padXSFAQ: {
    marginTop: '20%',
  },
  sectionTitle: {
    color: indigo[500],
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 40,
  },
});

function FAQ(props) {
  return (
    <div className={props.classes.section}>
      <Hidden smUp><div className={props.classes.padXSSections} /></Hidden>
      <Hidden xsDown><div className={props.classes.padSections} /></Hidden>
      <Grid container justify="center" align="flex-start">
        <Grid item xs={12} sm={12}>
          <Typography type="display1" align="center" className={props.classes.sectionTitle}>
            Frequently Asked Questions
          </Typography>
          <Typography type="subheading" align="center" className={props.classes.sectionSubTitle}>
            Got questions? We have answers.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" align="flex-start">
        <Grid item xs={12} sm={4}>
          <Typography type="headline" align="left" colorInherit paragraph>
            Question?
          </Typography>
          <Typography type="subheading" align="left" colorInherit>
            Answer
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography type="headline" align="left" colorInherit paragraph>
            Question?
          </Typography>
          <Typography type="subheading" align="left" colorInherit>
            Answer
          </Typography>
        </Grid>
      </Grid>
      <Hidden smUp><div className={props.classes.padXSFAQ} /></Hidden>
      <Hidden xsDown><div className={props.classes.padFAQ} /></Hidden>
      <Grid container justify="center" align="flex-start">
        <Grid item xs={12} sm={4}>
          <Typography type="headline" align="left" colorInherit paragraph>
            Question?
          </Typography>
          <Typography type="subheading" align="left" colorInherit>
            Answer
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography type="headline" align="left" colorInherit paragraph>
            Question?
          </Typography>
          <Typography type="subheading" align="left" colorInherit>
            Answer
          </Typography>
        </Grid>
      </Grid>
      <Hidden smUp><div className={props.classes.padXSSections} /></Hidden>
      <Hidden xsDown><div className={props.classes.padSections} /></Hidden>
    </div>
  );
}

export default withStyles(styleSheet)(FAQ);
