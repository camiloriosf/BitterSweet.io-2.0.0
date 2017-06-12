import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import { indigo, fullWhite, grey } from 'material-ui/styles/colors';
import MoodIcon from 'material-ui-icons/Mood';
import MainLayout from '../components/MainLayout';

const styles = {
  root: {
    flexGrow: 1,
  },
  section1: {
    background: indigo[500],
    padding: 10,
  },
  section2: {
    background: grey[100],
    padding: 10,
  },
  section3: {
    background: fullWhite,
    padding: 10,
  },
  paper: {
    textAlign: 'center',
    minHeight: 150,
    background: 'inherit',
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
  padSections: {
    marginTop: '5%',
  },
  padFAQ: {
    marginTop: '4%',
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
  padXSSections: {
    marginTop: '20%',
  },
  padXSFAQ: {
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
  icon: {
    fill: indigo[500],
    width: 100,
    height: 100,
    margin: 20,
  },
  features: {
    margin: 20,
  },
  FAQ: {
    marginTop: 10,
    marginBottom: 40,
  },
};

function Index() {
  return (
    <MainLayout title="BitterSweet.io - Welcome">
      <div style={styles.root}>
        <div style={styles.section1}>
          <Grid container justify="center" align="flex-start">
            <Grid item xs={12} sm={12}>
              <Hidden smUp><div style={styles.padXS1} /></Hidden>
              <Hidden xsDown><div style={styles.pad1} /></Hidden>
              <Typography type="display3" align="center" colorInherit style={styles.title}>A Unique Approach to Software Dev</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Hidden smUp><div style={styles.padXS2} /></Hidden>
              <Hidden xsDown><div style={styles.pad2} /></Hidden>
              <Typography type="headline" align="center" colorInherit style={styles.subTitle}>
                BitterSweet simplifies software development,
                taking care of the whole life cycle of your project.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Hidden smUp><div style={styles.padXS3} /></Hidden>
              <Hidden xsDown><div style={styles.pad3} /></Hidden>
              <Grid container justify="center" align="center" >
                <Button raised primary accent style={styles.button}>
                  <Typography type="title" align="center" colorInherit>QUOTE</Typography>
                </Button>
              </Grid>
              <Hidden smUp><div style={styles.padXS4} /></Hidden>
              <Hidden xsDown><div style={styles.pad4} /></Hidden>
            </Grid>
          </Grid>
        </div>
        <div style={styles.section2}>
          <Hidden smUp><div style={styles.padXSSections} /></Hidden>
          <Hidden xsDown><div style={styles.padSections} /></Hidden>
          <Grid container justify="center" align="flex-start">
            <Grid item xs={12} sm={3}>
              <Paper style={styles.paper} square elevation={0}>
                <MoodIcon style={styles.icon} />
                <Typography type="headline" align="center" colorInherit>
                  First Feature
                </Typography>
                <Typography type="subheading" align="center" colorInherit style={styles.features}>
                  Forget about technical stuff and FOCUS on your business
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper style={styles.paper} square elevation={0}>
                <MoodIcon style={styles.icon} />
                <Typography type="headline" align="center" colorInherit>
                  Second Feature
                </Typography>
                <Typography type="subheading" align="center" colorInherit style={styles.features}>
                  Build high-performing apps that automatically scales
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper style={styles.paper} square elevation={0}>
                <MoodIcon style={styles.icon} />
                <Typography type="headline" align="center" colorInherit>
                  Third Feature
                </Typography>
                <div style={styles.features}>
                  <Typography type="subheading" align="center" colorInherit>
                    No hidden costs
                  </Typography>
                  <Typography type="body1" align="center" colorInherit>
                    No huge investments
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <Hidden smUp><div style={styles.padXSSections} /></Hidden>
          <Hidden xsDown><div style={styles.padSections} /></Hidden>
        </div>
        <div style={styles.section3}>
          <Hidden smUp><div style={styles.padXSSections} /></Hidden>
          <Hidden xsDown><div style={styles.padSections} /></Hidden>
          <Grid container justify="center" align="flex-start">
            <Grid item xs={12} sm={12}>
              <Typography type="display1" align="center" colorInherit>
                  Frequently Asked Questions
              </Typography>
              <Typography type="subheading" align="center" colorInherit style={styles.FAQ}>
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
          <Hidden smUp><div style={styles.padXSFAQ} /></Hidden>
          <Hidden xsDown><div style={styles.padFAQ} /></Hidden>
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
          <Hidden smUp><div style={styles.padXSSections} /></Hidden>
          <Hidden xsDown><div style={styles.padSections} /></Hidden>
        </div>
      </div>
    </MainLayout>
  );
}

export default Index;
