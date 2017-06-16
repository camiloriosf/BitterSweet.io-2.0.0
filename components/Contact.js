import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { grey, indigo } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Contact', {
  section: {
    background: grey[100],
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
  },
  div: {
    margin: '0 auto',
    textAlign: 'center',
    maxWidth: 500,
  },
  buttonDiv: {
    marginTop: 30,
    textAlign: 'right',
  },
});

function Contact(props) {
  return (
    <div className={props.classes.section}>
      <Hidden smUp><div className={props.classes.padXSSections} /></Hidden>
      <Hidden xsDown><div className={props.classes.padSections} /></Hidden>
      <Grid container justify="center" align="flex-start">
        <Grid item xs={12} sm={12}>
          <Typography type="display1" align="center" className={props.classes.sectionTitle}>
            Get in touch
          </Typography>
          <Typography type="subheading" align="center" className={props.classes.sectionSubTitle}>
            We are here to help you.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div className={props.classes.div}>
            <form>
              <TextField label="Name" type="text" />
              <TextField label="Email" type="email" />
              <TextField label="About your company and project" rows="4" multiline type="text" />
              <div className={props.classes.buttonDiv}>
                <Button raised type="submit">Send</Button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
      <Hidden smUp><div className={props.classes.padXSSections} /></Hidden>
      <Hidden xsDown><div className={props.classes.padSections} /></Hidden>
    </div>
  );
}

export default withStyles(styleSheet)(Contact);
