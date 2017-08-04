import React from 'react';
import Button from 'material-ui/Button';
import KeyboardArrowUpIcon from 'material-ui-icons/KeyboardArrowUp';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Fade from 'material-ui/transitions/Fade';
import common from 'material-ui/colors/common';
import blue from 'material-ui/colors/blue';
import { logEvent } from '../../tools/analytics';

const { transparent } = common;

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
    fill: blue[500],
  },
});

function Up(props) {
  const handleClick = (action) => {
    if (props.id) {
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


export default withStyles(styleSheet)(Up);
