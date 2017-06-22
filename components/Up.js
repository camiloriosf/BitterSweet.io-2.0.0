import React from 'react';
import Button from 'material-ui/Button';
import KeyboardArrowUpIcon from 'material-ui-icons/KeyboardArrowUp';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Fade from 'material-ui/transitions/Fade';
import { transparent, indigo } from 'material-ui/styles/colors';
import { gql, graphql } from 'react-apollo';
import { logEvent } from '../tools/analytics';

const styleSheet = createStyleSheet('Up', {
  section: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    padding: 5,
    zIndex: 9999999999,
  },
  quote: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  anchor: {
    textDecoration: 'none',
  },
  button: {
    background: transparent,
  },
  icon: {
    fill: indigo[500],
  },
});

function Up(props) {
  const handleClick = (action) => {
    if (!props.data.loading) {
      logEvent('click', action);
    }
  };

  return (
    <div className={props.classes.section} >
      <Fade enterTransitionDuration={1000} leaveTransitionDuration={1000} in>
        <div className={props.classes.quote}>
          <a href="#home" className={props.classes.anchor} onClick={() => handleClick('tool')}>
            <Button fab color="primary" className={props.classes.button}>
              <KeyboardArrowUpIcon className={props.classes.icon} />
            </Button>
          </a>
        </div>
      </Fade>
    </div>
  );
}

const user = gql`
  query User {
    user {
      token
      id
    }
  }
`;

export default graphql(user, { props: data => data })(withStyles(styleSheet)(Up));
