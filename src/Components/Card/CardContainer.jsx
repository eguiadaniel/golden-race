import { Grid, Container } from '@material-ui/core';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CardItem from './CardItem';

const useStyles = makeStyles({
  container: {
    padding: 20
  }
});

function CardContainer({ data }) {
  console.log(data);

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {data.sports.map((sport) => (
          <CardItem key={sport.title} sport={sport}></CardItem>
        ))}
      </Grid>
    </Container>
  );
}

export default CardContainer;
