import { Grid, Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import CardList from './CardList';

import './CardItem.css';

const useStyles = makeStyles({
  title: {
    fontSize: '1rem',
    fontWeight: 900,
    lineHeight: 1.334,
    letterSpacing: 0,
    textAlign: 'left'
  },
  image: {
    minHeight: 300,
    objectPosition: 'top',
    objectFit: 'cover'
  },
  card: {}
});

function CardItem({ sport, width }) {
  const classes = useStyles();
  return (
    <>
      {sport.width && (
        <Grid item md={width.md} sm={width.sm} xs={width.xs}>
          <Card className={classes.card} elevation={4}>
            <CardActionArea>
              <CardMedia
                className={classes.image}
                component="img"
                alt={sport.title}
                height="250"
                image={sport.image}
                title={sport.title}
              />
              <CardContent>
                <Box display="flex" p={1} bgcolor="" className={classes.box}>
                  <Box py={0} flexGrow={1} bgcolor="">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      {sport.title}
                    </Typography>
                  </Box>
                  {!sport.list && (
                    <Box py={0} bgcolor="">
                      <ArrowForwardIosIcon />
                    </Box>
                  )}
                </Box>
                <CardList list={sport.list} />
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'flex-end' }}>
              <Button size="small" color="primary">
                {sport.button}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  );
}

export default CardItem;
