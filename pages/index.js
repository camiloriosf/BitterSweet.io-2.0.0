import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import { blue } from 'material-ui/styles/colors';
import MoodIcon from 'material-ui-icons/Mood';
// import SwipeableViews from 'react-swipeable-views';
// import autoPlay from 'react-swipeable-views-utils/lib/autoPlay';
import MainLayout from '../components/MainLayout';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    textAlign: 'center',
    minHeight: 150,
  },
  pad1: {
    marginTop: '15%',
  },
  pad2: {
    marginTop: '5%',
  },
  pad3: {
    marginTop: '10%',
  },
  pad4: {
    marginTop: '20%',
  },
  padXS1: {
    marginTop: '20%',
  },
  padXS2: {
    marginTop: '50%',
  },
  padXS3: {
    marginTop: '40%',
  },
  padXS4: {
    marginTop: '20%',
  },
  title: {
    fontSize: '300%',
  },
  subTitle: {
    fontSize: '150%',
  },
  button: {
    minWidth: 200,
    minHeight: 40,
  },
  card: {
    marginTop: '5%',
  },
  icon: {
    fill: blue['500'],
    width: 100,
    height: 100,
  },
};

function Index() {
  return (
    <MainLayout title="BitterSweet.io - Welcome">
      <div style={styles.root}>
        <Hidden smUp><div style={styles.padXS1} /></Hidden>
        <Hidden xsDown><div style={styles.pad1} /></Hidden>
        <Grid container justify="center" align="flex-start">
          <Grid item xs={12} sm={12}>
            <Typography type="title" align="center" colorInherit style={styles.title}>A Unique Approach to Software Dev</Typography>
          </Grid>
          <Hidden smUp><div style={styles.padXS2} /></Hidden>
          <Hidden xsDown><div style={styles.pad2} /></Hidden>
          <Grid item xs={12} sm={12}>
            <Typography type="title" align="center" colorInherit style={styles.subTitle}>
              BitterSweet simplifies software development,
              taking care of the whole life cycle of your project.
            </Typography>
          </Grid>
          <Hidden smUp><div style={styles.padXS3} /></Hidden>
          <Hidden xsDown><div style={styles.pad3} /></Hidden>
          <Grid item xs={12} sm={12}>
            <Grid container justify="center" align="center" >
              <Button raised primary style={styles.button}>
                <Typography type="title" align="center" colorInherit>QUOTE</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Hidden smUp><div style={styles.padXS4} /></Hidden>
        <Hidden xsDown><div style={styles.pad4} /></Hidden>
        <Grid container justify="center" align="flex-start" style={styles.card}>
          <Grid item xs={12} sm>
            <Paper style={styles.paper} square elevation={24}>
              <MoodIcon style={styles.icon} />
              <Typography type="body1" align="center" colorInherit>
                Forget about technical stuff and FOCUS on your business
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm>
            <Paper style={styles.paper} square elevation={24}>
              <MoodIcon style={styles.icon} />
              <Typography type="body1" align="center" colorInherit>
                Build high-performing apps that automatically scales
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm>
            <Paper style={styles.paper} square elevation={24}>
              <MoodIcon style={styles.icon} />
              <Typography type="body1" align="center" colorInherit>
                No hidden costs
              </Typography>
              <Typography type="body1" align="center" colorInherit>
                No huge investments
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
}

export default Index;
