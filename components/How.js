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
  div: {
    padding: 100,
  },
  grid: {
    textAlign: 'center',
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
        <Grid item xs={12} sm={6} className={props.classes.grid}>
          Imagen
        </Grid>
        <Grid item xs={12} sm={6} className={props.classes.grid}>
          <div className={props.classes.div}>
            <Typography type="title" align="center">
              Goodbye old way, welcome BitterSweet.io
            </Typography>
            <Typography type="body1" align="center">
            In BitterSweet.io we have created a new way of developing apps.
            With it we are able to lower costs, release times and add
            all the features industrial grade softwares have.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={props.classes.grid}>
          <div className={props.classes.div}>
            <Typography type="title" align="center">
              Don&apos;t pay for our office. We don&apos;t have one.
            </Typography>
            <Typography type="body1" align="center">
              We are a fully Cloud Company, we use all the technologies available to
              increase collaborative work, so we don&apos;t have to transfer these costs to you.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={props.classes.grid}>
          Imagen
        </Grid>
        <Grid item xs={12} sm={6} className={props.classes.grid}>
          Imagen
        </Grid>
        <Grid item xs={12} sm={6} className={props.classes.grid}>
          <div className={props.classes.div}>
            <Typography type="title" align="center">
              No templates, we build from the ground up
            </Typography>
            <Typography type="body1" align="center">
              We believe each requeriment requires a different approach, that is why
              we don&apos;t use pre made templates, we build everything ourselves.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={props.classes.grid}>
          <div className={props.classes.div}>
            <Typography type="title" align="center">
              State-of-the-Art Technologies
            </Typography>
            <Typography type="body1" align="center">
              In BitterSweet.io we only use the latest technologies, the same
              big companies like Facebook, Airbnb or Netflix use.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={props.classes.grid}>
          Imagen
        </Grid>
        <Grid item xs={12} sm={6} className={props.classes.grid}>
          Imagen
        </Grid>
        <Grid item xs={12} sm={6} className={props.classes.grid}>
          <div className={props.classes.div}>
            <Typography type="title" align="center">
              We may not be the fit for you
            </Typography>
            <Typography type="body1" align="center">
              In BitterSweet.io we believe in transparency. This is why
              we know our services are not for everyone. Nevertheless,
              we invite you to send us a message, we are here to guide you even if
              you don&apos;t hire our services.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Hidden smUp><div className={props.classes.padXSSections} /></Hidden>
      <Hidden xsDown><div className={props.classes.padSections} /></Hidden>
    </div>
  );
}

export default withStyles(styleSheet)(How);
