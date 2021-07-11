import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import ReactCountryFlag from 'react-country-flag';
import EnglandIcon from './Icon/EnglandIcon';
import SpainIcon from './Icon/SpainIcon';
import ChampionsIcon from './Icon/ChampionsIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <EnglandIcon fill1="white" fill2="red" />
          </ListItemIcon>
          <ListItemText primary="England League" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <SpainIcon fill1="yellow" fill2="red" />
          </ListItemIcon>
          <ListItemText primary="Spain League" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <ChampionsIcon />
          </ListItemIcon>
          <ListItemText primary="Champions League" />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}
