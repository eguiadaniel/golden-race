import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './CardList.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import LeftIcon from './LeftIcon';
import RightIcon from './RightIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  label: {
    fontSize: 8,
    textTransform: 'capitalize'
  }
}));

export default function CardList({ list }) {
  const classes = useStyles();

  return (
    <>
      {list && (
        <div className={classes.root}>
          <List component="nav" aria-label="main mailbox folders">
            {list.map((item) => {
              return (
                <ListItem button key={item.title}>
                  {item.leftIcon && (
                    <ListItemIcon>
                      <LeftIcon item={item} />
                    </ListItemIcon>
                  )}
                  <ListItemText
                    className="listItemText"
                    primary={item.title}
                    secondary={item.secondary}
                  />
                  {item.rightIcon && <RightIcon item={item} />}
                  <ListItemSecondaryAction style={{ right: 0 }}>
                    <IconButton>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
            <Divider />
          </List>
        </div>
      )}
    </>
  );
}
