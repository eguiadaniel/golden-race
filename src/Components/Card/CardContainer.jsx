import { Grid, Container } from '@material-ui/core';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CardItem from './CardItem';

const useStyles = makeStyles({
  container: {
    padding: 20,
    backgroundColor: '#dad8d8'
  }
});

function CardContainer({ sports }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="top"
        spacing={2}
      >
        {sports.map((sport) => {
          return sport.width === 'half' ? (
            <CardItem
              key={sport.title}
              sport={sport}
              width={{ xs: 6, sm: 3, md: 3 }}
            ></CardItem>
          ) : (
            <CardItem
              key={sport.title}
              sport={sport}
              width={{ xs: 12, sm: 6, md: 3 }}
            ></CardItem>
          );
        })}
      </Grid>
    </Container>
  );
}

export default CardContainer;
