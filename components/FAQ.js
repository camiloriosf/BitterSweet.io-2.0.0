import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import { fullWhite, indigo, grey } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('FAQ', {
  section: {
    background: fullWhite,
    padding: 10,
  },
  padSections: {
    marginTop: '5%',
  },
  padXSSections: {
    marginTop: '20%',
  },
  sectionTitle: {
    color: indigo[500],
  },
  sectionSubTitle: {
    marginTop: 10,
    marginBottom: 40,
  },
  question: {
    color: indigo[400],
  },
  answer: {
    color: grey[500],
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
        <Grid item xs={12} sm={5}>
          <Typography type="subheading" align="left" className={props.classes.question}>
            Do I have to pay anything in advance?
          </Typography>
          <Typography type="body1" align="left" className={props.classes.answer}>
            No, we want to reduce your risk so we can build a new awesome app.
            We won&apos;t charge you anything until we have finished and tested your
            app, and more importantly, you are happy with it.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography type="subheading" align="left" className={props.classes.question}>
            I want to show you a sketch of my app, how can I do it?
          </Typography>
          <Typography type="body1" align="left" className={props.classes.answer}>
            That&apos;s great! The more information the faster we
            can develop your app. If you want to send information fell free to write us to
            contact@bittersweet.io. We can also arrange an Skype call to chat about your next
            project.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" align="flex-start">
        <Grid item xs={12} sm={5}>
          <Typography type="subheading" align="left" className={props.classes.question}>
            Do I have to worry about the maintenance of my app?
          </Typography>
          <Typography type="body1" align="left" className={props.classes.answer}>
            Absolutely not. With our Pay-as-you-Go service we take care of everything,
            and we really mean everything (maintenance, support, scaling, balancing, etc.).
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography type="subheading" align="left" className={props.classes.question}>
            Is it possible to make changes after my app has been launched?
          </Typography>
          <Typography type="body1" align="left" className={props.classes.answer}>
            We understand that the initial idea of your app might need some adjustments.
            We can take care of that too, as long as it doesn&apos;t mean to re-do your app.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" align="flex-start">
        <Grid item xs={12} sm={5}>
          <Typography type="subheading" align="left" className={props.classes.question}>
            What if I need to add some features?
          </Typography>
          <Typography type="body1" align="left" className={props.classes.answer}>
            No problem, just requote and that&apos;s the new price you will have to pay when
            we add the new feature. This also goes if you need to remove some features.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography type="subheading" align="left" className={props.classes.question}>
            Do I have to buy the domain?
          </Typography>
          <Typography type="body1" align="left" className={props.classes.answer}>
            We also can take care of that. However, we strongly recommend you to do it.
            The name of your Company should always be yours. Nevertheless, we can
            guide you with this important step.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" align="flex-start">
        <Grid item xs={12} sm={5}>
          <Typography type="subheading" align="left" className={props.classes.question}>
            Do I have access to the code?
          </Typography>
          <Typography type="body1" align="left" className={props.classes.answer}>
            In order to take care of everything we keep a close eye to the source code. Also,
            since our service is very cheap (compared to others),
            we can&apos;t give access to the source code.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography type="subheading" align="left" className={props.classes.question}>
            Who owns the intellectual property of the app?
          </Typography>
          <Typography type="body1" align="left" className={props.classes.answer}>
            You, from day 0 until the end of times. We only own the code, but the idea behind it
            will always be yours.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" align="flex-start">
        <Grid item xs={12} sm={5}>
          <Typography type="subheading" align="left" className={props.classes.question}>
            Is my app secure?
          </Typography>
          <Typography type="body1" align="left" className={props.classes.answer}>
            You can count on that. We only use top of the line technologies. In top of that
            all of our apps comes with SSL certificates for secure connections. This means you
            can perform all kind of critical operations with the same standards as the big
            companies use.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography type="subheading" align="left" className={props.classes.question}>
            If I want to end the service, How can I do it?
          </Typography>
          <Typography type="body1" align="left" className={props.classes.answer}>
            Just stop paying. We use the same models as companies like Spotify or Netflix, you only
            pay for as long as you want to keep the service.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" align="flex-start">
        <Grid item xs={12} sm={5}>
          <Typography type="subheading" align="left" className={props.classes.question}>
            If I decide to end the service, How can I keep the code?
          </Typography>
          <Typography type="body1" align="left" className={props.classes.answer}>
            You can stop the service whenever you like. However, if you want to keep the code
            you have to pay the 1-Time fee price.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography type="subheading" align="left" className={props.classes.question}>
            Once I end the service, do I keep the domain?
          </Typography>
          <Typography type="body1" align="left" className={props.classes.answer}>
            Yes, the domain will always be yours.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styleSheet)(FAQ);
