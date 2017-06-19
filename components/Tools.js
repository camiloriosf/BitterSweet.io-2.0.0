import React from 'react';
import Button from 'material-ui/Button';
import KeyboardArrowUpIcon from 'material-ui-icons/KeyboardArrowUp';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Fade from 'material-ui/transitions/Fade';
import Scrollspy from 'react-scrollspy';
import { gql, graphql } from 'react-apollo';
import { logEvent } from '../lib/analytics';

const styleSheet = createStyleSheet('Tools', {
  section: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    padding: 20,
  },
  scrollspy: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  anchor: {
    textDecoration: 'none',
  },
});

function Tools(props) {
  const handleClick = (action) => {
    if (!props.data.loading) {
      logEvent('click', action);
    }
  };

  return (
    <div className={props.classes.section} >
      <Fade enterTransitionDuration={1000} leaveTransitionDuration={1000} in>
        <Scrollspy className={props.classes.scrollspy}>
          <a href="#home" className={props.classes.anchor} onClick={() => handleClick('tool')}>
            <Button fab color="accent">
              <KeyboardArrowUpIcon />
            </Button>
          </a>
        </Scrollspy>
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

export default graphql(user, { props: data => data })(withStyles(styleSheet)(Tools));
