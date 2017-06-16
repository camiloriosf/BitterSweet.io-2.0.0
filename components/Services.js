import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import { indigo, grey } from 'material-ui/styles/colors';
import AssignmentIcon from 'material-ui-icons/Assignment';
import PhonelinkIcon from 'material-ui-icons/Phonelink';
import WeekendIcon from 'material-ui-icons/Weekend';
import MoneyOffIcon from 'material-ui-icons/MoneyOff';
import SecurityIcon from 'material-ui-icons/Security';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';
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
    fill: indigo[100],
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
            <PhonelinkIcon className={props.classes.icon} />
            <Typography type="title" align="left">
                Multiplatform Dev
            </Typography>
            <Typography type="body1" align="left">
                We can develop your app for the Web, Android, iOS or Desktop.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={props.classes.paper} square elevation={24}>
            <FavoriteBorderIcon className={props.classes.icon} />
            <Typography type="title" align="left">
              Clear and Fair Price
            </Typography>
            <Typography type="body1" align="left">
              No hidden costs, we charge the same ammount every month, with
              no huge investments.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={props.classes.paper} square elevation={24}>
            <MoneyOffIcon className={props.classes.icon} />
            <Typography type="title" align="left">
              Zero Risk
            </Typography>
            <Typography type="body1" align="left">
              We only charge you when your app is up and running
              and you are happy with it.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="center" align="flex-start" className={props.classes.secondRow}>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={props.classes.paper} square elevation={24}>
            <AssignmentIcon className={props.classes.icon} />
            <Typography type="title" align="left">
              No Contracts
            </Typography>
            <Typography type="body1" align="left">
              Stop the service whenever you like, there are no long-term
              contracts.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={props.classes.paper} square elevation={24}>
            <WeekendIcon className={props.classes.icon} />
            <Typography type="title" align="left">
              Relax
            </Typography>
            <Typography type="body1" align="left">
              We take care of everything. From development to
              SEO optimization and support. You just focus on your business.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper className={props.classes.paper} elevation={24}>
            <SecurityIcon className={props.classes.icon} />
            <Typography type="title" align="left">
                Small and Big Companies alike
            </Typography>
            <Typography type="body1" align="left">
                We only use top of the line technologies, with
                integrated SSL certificates, load-balancing, auto scaling and CDN.
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
