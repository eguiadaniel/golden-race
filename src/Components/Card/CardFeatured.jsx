import { Grid, Container } from '@material-ui/core';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CardItem from './CardItem';

const useStyles = makeStyles({
  featuredContainer: {
    padding: '0px 20px 20px 20px'
    // backgroundColor: '#dad8d8'
  },
  cardFeatured: {
    boxShadow: '0px -2px 16px 7px #00000040',
    border: 'solid 1px black'
  }
});

function CardFeatured({ sports }) {
  console.log(sports);

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.featuredContainer}>
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
              className={classes.cardFeatured}
              key={sport.title}
              sport={sport}
              width={{ xs: 6, sm: 3, md: 3 }}
            ></CardItem>
          ) : (
            <CardItem
              className={classes.cardFeatured}
              style={{ border: 'solid' }}
              key={sport.title}
              sport={sport}
              width={{ xs: 12, sm: 12, md: 12 }}
            ></CardItem>
          );
        })}
      </Grid>
    </Container>
  );
}

export default CardFeatured;
