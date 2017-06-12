import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import { indigo, grey } from 'material-ui/styles/colors';
import MoodIcon from 'material-ui-icons/Mood';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Services', {
  section: {
    background: grey[100],
    padding: 10,
  },
  paper: {
    textAlign: 'left',
    minHeight: 180,
    padding: 20,
  },
  padSections: {
    marginTop: '5%',
  },
  padXSSections: {
    marginTop: '20%',
  },
  icon: {
    fill: indigo[500],
    width: 50,
    height: 50,
  },
  sectionTitle: {
    color: indigo[500],
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 40,
  },
  secondRow: {
    marginTop: 20,
  },
});

function Services(props) {
  return (
    <div className={props.classes.section}>
      <Hidden smUp><div className={props.classes.padXSSections} /></Hidden>
      <Hidden xsDown><div className={props.classes.padSections} /></Hidden>
      <Grid container justify="center" align="flex-start">
        <Grid item xs={12} sm={12}>
          <Typography type="display1" align="center" className={props.classes.sectionTitle}>
            What we do
          </Typography>
          <Typography type="subheading" align="center" className={props.classes.sectionSubTitle}>
            We offer a unique approach to software development,
            taking care from coding to the hosting and promotion of your site/app.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={props.classes.paper} elevation={24}>
            <MoodIcon className={props.classes.icon} />
            <Typography type="headline" align="left" colorInherit>
                First Feature
            </Typography>
            <Typography type="subheading" align="left" colorInherit>
                Forget about technical stuff and FOCUS on your business
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={props.classes.paper} square elevation={24}>
            <MoodIcon className={props.classes.icon} />
            <Typography type="headline" align="left" colorInherit>
                Second Feature
            </Typography>
            <Typography type="subheading" align="left" colorInherit>
                Build high-performing apps that automatically scales
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={props.classes.paper} square elevation={24}>
            <MoodIcon className={props.classes.icon} />
            <Typography type="headline" align="left" colorInherit>
                Third Feature
            </Typography>
            <Typography type="subheading" align="left" colorInherit>
              No hidden costs
            </Typography>
            <Typography type="body1" align="left" colorInherit>
              No huge investments
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="center" align="flex-start" className={props.classes.secondRow}>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={props.classes.paper} elevation={24}>
            <MoodIcon className={props.classes.icon} />
            <Typography type="headline" align="left" colorInherit>
                First Feature
            </Typography>
            <Typography type="subheading" align="left" colorInherit>
                Forget about technical stuff and FOCUS on your business
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={props.classes.paper} square elevation={24}>
            <MoodIcon className={props.classes.icon} />
            <Typography type="headline" align="left" colorInherit>
                Second Feature
            </Typography>
            <Typography type="subheading" align="left" colorInherit>
                Build high-performing apps that automatically scales
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={props.classes.paper} square elevation={24}>
            <MoodIcon className={props.classes.icon} />
            <Typography type="headline" align="left" colorInherit>
                Third Feature
            </Typography>
            <Typography type="subheading" align="left" colorInherit>
              No hidden costs
            </Typography>
            <Typography type="body1" align="left" colorInherit>
              No huge investments
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Hidden smUp><div className={props.classes.padXSSections} /></Hidden>
      <Hidden xsDown><div className={props.classes.padSections} /></Hidden>
    </div>
  );
}

export default withStyles(styleSheet)(Services);
