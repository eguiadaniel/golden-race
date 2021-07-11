import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import LeftIcon from './LeftIcon';

import ReactCountryFlag from 'react-country-flag';

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

export default function CardList({ list }) {
  const classes = useStyles();

  console.log('-----CardList-----');
  console.log('list', list);
  return (
    <>
      {list && (
        <div className={classes.root}>
          <List component="nav" aria-label="main mailbox folders">
            {list.map((item) => {
              console.log('------CardList-Item------');
              console.log(item);
              return (
                <>
                  <ListItem button>
                    <ListItemIcon>
                      <LeftIcon item={item} />
                    </ListItemIcon>
                    {/* {item.title} */}
                    <ListItemText primary={item.title} />
                  </ListItem>
                  <Divider />
                </>
              );
            })}
          </List>
        </div>
      )}
    </>
  );
}
