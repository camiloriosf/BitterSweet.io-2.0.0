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
    padding: '10px 10px 0px 10px',
  },
  pad1: {
    marginTop: '7%',
  },
  pad2: {
    marginTop: '1%',
  },
  pad3: {
    marginTop: '3%',
  },
  pad4: {
    marginTop: '3%',
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
    maxWidth: 700,
    margin: '0 auto',
  },
  button: {
    minWidth: 200,
    minHeight: 40,
    color: fullWhite,
  },
  crop1: {
    width: 940,
    height: 250,
    overflow: 'hidden',
    margin: '0 auto',
    position: 'relative',
  },
  crop2: {
    width: 626,
    height: 250,
    overflow: 'hidden',
    margin: '0 auto',
    position: 'relative',
  },
  mockup1: {
    position: 'absolute',
    zIndex: 900000,
  },
  mockup11: {
    position: 'absolute',
    left: -157,
    zIndex: 900000,
  },
  mockup2: {
    position: 'absolute',
    zIndex: 700000,
  },
  mockup3: {
    position: 'absolute',
    zIndex: 700000,
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
            BitterSweet.io simplifies software development,
            taking care of the whole life cycle of your project.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Hidden smUp><div className={props.classes.padXS3} /></Hidden>
          <Hidden xsDown><div className={props.classes.pad3} /></Hidden>
          <Grid container justify="center" align="center" >
            <Button raised color="accent" accent className={props.classes.button}>
              <Typography type="title" align="center" colorInherit color="inherit">QUOTE</Typography>
            </Button>
          </Grid>
          <Hidden smUp><div className={props.classes.padXS4} /></Hidden>
          <Hidden xsDown><div className={props.classes.pad4} /></Hidden>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Hidden smDown>
            <div className={props.classes.crop1}>
              <img src="static/home_mockups_1.png" alt="WebSite Mockup 1" className={props.classes.mockup1} />
              <img src="static/home_mockups_2.png" alt="WebSite Mockup 2" className={props.classes.mockup2} />
              <img src="static/home_mockups_3.png" alt="WebSite Mockup 3" className={props.classes.mockup3} />
            </div>
          </Hidden>
          <Hidden mdUp xsDown>
            <div className={props.classes.crop2}>
              <img src="static/home_mockups_1.png" alt="WebSite Mockup 1" className={props.classes.mockup11} />
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styleSheet)(Hero);
