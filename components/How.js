import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import { fullWhite, indigo } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('How', {
  section: {
    background: fullWhite,
    padding: 10,
  },
  padSections: {
    marginTop: '5%',
  },
  sectionTitle: {
    color: indigo[500],
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 40,
  },
});

function How(props) {
  return (
    <div className={props.classes.section}>
      <Hidden smUp><div className={props.classes.padXSSections} /></Hidden>
      <Hidden xsDown><div className={props.classes.padSections} /></Hidden>
      <Grid container justify="center" align="flex-start">
        <Grid item xs={12} sm={12}>
          <Typography type="display1" align="center" className={props.classes.sectionTitle}>
            How we do it
          </Typography>
          <Typography type="subheading" align="center" className={props.classes.sectionSubTitle}>
            Introducing a modern, modular approach to building
            fast, responsive and scalable web apps.
          </Typography>
        </Grid>
      </Grid>
      <Hidden smUp><div className={props.classes.padXSSections} /></Hidden>
      <Hidden xsDown><div className={props.classes.padSections} /></Hidden>
    </div>
  );
}

export default withStyles(styleSheet)(How);
