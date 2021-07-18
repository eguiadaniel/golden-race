import React from 'react';

import './CardList.scss';

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

export default function CardList({ list }) {
  return (
    <>
      {list && (
        <div>
          <List component="nav">
            {list.map((item) => {
              return (
                <ListItem button key={item.title}>
                  {item.leftIcon && (
                    <ListItemIcon>
                      {/* Custom component to render Icon flags and cups depending on data passed on CardData.json. 
                          "leftIcon": "spain" or "leftIcon": "champions" renders diferent SVG that also contains color props 
                          that can be passed.
                      */}
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
