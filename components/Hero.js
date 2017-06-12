import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import { indigo, fullWhite } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Hero', {
  section: {
    background: indigo[500],
    padding: 10,
  },
  pad1: {
    marginTop: '10%',
  },
  pad2: {
    marginTop: '3%',
  },
  pad3: {
    marginTop: '7%',
  },
  pad4: {
    marginTop: '20%',
  },
  padXS1: {
    marginTop: '10%',
  },
  padXS2: {
    marginTop: '10%',
  },
  padXS3: {
    marginTop: '10%',
  },
  padXS4: {
    marginTop: '20%',
  },
  title: {
    color: fullWhite,
  },
  subTitle: {
    color: fullWhite,
  },
  button: {
    minWidth: 200,
    minHeight: 40,
    color: fullWhite,
  },
});

function Hero(props) {
  return (
    <div className={props.classes.section}>
      <Grid container justify="center" align="flex-start">
        <Grid item xs={12} sm={12}>
          <Hidden smUp><div className={props.classes.padXS1} /></Hidden>
          <Hidden xsDown><div className={props.classes.pad1} /></Hidden>
          <Typography type="display3" align="center" colorInherit className={props.classes.title}>
                MAKE YOUR BUSINESS EASIER
              </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Hidden smUp><div className={props.classes.padXS2} /></Hidden>
          <Hidden xsDown><div className={props.classes.pad2} /></Hidden>
          <Typography type="headline" align="center" colorInherit className={props.classes.subTitle}>
            BitterSweet simplifies software development,
            taking care of the whole life cycle of your project.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Hidden smUp><div className={props.classes.padXS3} /></Hidden>
          <Hidden xsDown><div className={props.classes.pad3} /></Hidden>
          <Grid container justify="center" align="center" >
            <Button raised primary accent className={props.classes.button}>
              <Typography type="title" align="center" colorInherit>QUOTE</Typography>
            </Button>
          </Grid>
          <Hidden smUp><div className={props.classes.padXS4} /></Hidden>
          <Hidden xsDown><div className={props.classes.pad4} /></Hidden>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styleSheet)(Hero);
