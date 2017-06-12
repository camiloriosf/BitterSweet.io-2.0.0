import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Hidden from 'material-ui/Hidden';
import { indigo } from 'material-ui/styles/colors';

const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    position: 'relative',
    width: '100%',
    background: indigo[500],
  },
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    background: 'inherit',
  },
  flex: {
    flex: 1,
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
});

class Header extends Component {
  state = {
    open: false,
  };

  toggleDrawer = (open) => {
    this.setState({ open });
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar className={this.props.classes.appBar} >
          <Toolbar>
            <Typography type="title" colorInherit className={this.props.classes.flex}>BitterSweet.io</Typography>
            <Hidden smDown>
              <div>
                <Button contrast>FEATURES</Button>
                <Button contrast>SERVICES</Button>
                <Button contrast>HOW</Button>
                <Button contrast>PRICING</Button>
                <Button contrast>QUOTE</Button>
                <Button contrast>FAQ</Button>
                <Button contrast>CONTACT</Button>
              </div>
            </Hidden>
            <Hidden mdUp>
              <IconButton onClick={() => this.toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
          <Drawer anchor="top" open={this.state.open} onRequestClose={() => this.toggleDrawer(false)} onClick={() => this.toggleDrawer(false)}>
            <div>
              <List className={this.props.classes.listFull} disablePadding>
                <div>
                  <ListItem>
                    <Typography type="title" colorInherit>BitterSweet.io</Typography>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="FEATURES" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="SERVICES" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="HOW" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="PRICING" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="QUOTE" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="FAQ" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="CONTACT" />
                  </ListItem>
                </div>
              </List>
            </div>
          </Drawer>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Header);
