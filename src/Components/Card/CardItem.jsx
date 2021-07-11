import { Grid, Paper, Box } from '@material-ui/core';
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
    fontSize: '1.3rem',
    fontWeight: 900,
    lineHeight: 1.334,
    letterSpacing: 0,
    textAlign: 'left'
  },
  image: {
    minHeight: 200
  }
});
// const width = { xs: 12, sm: 6, md: 3 };

function CardItem({ sport, width }) {
  //   if ((sport.width = 'half')) {
  //     const width = { xs: 6, sm: 4, md: 2 };
  //   } else {
  //     const width = { xs: 12, sm: 6, md: 3 };
  //   }

  // console.log('---------------CardItem----------');
  // console.log(sport);

  const classes = useStyles();
  return (
    <>
      {sport.width && (
        <Grid
          // className="xs-flex-basis"
          item
          md={width.md}
          sm={width.sm}
          xs={width.xs}
          // style={{ maxWidth: '100%' }}
        >
          <Card className="" elevation={4}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={sport.title}
                height="250"
                image={sport.image}
                title={sport.title}
              />
              <CardContent>
                <Box display="flex" p={1} bgcolor="">
                  <Box p={1} flexGrow={1} bgcolor="">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      {sport.title}
                    </Typography>
                  </Box>
                  <Box p={1} bgcolor="">
                    <ArrowForwardIosIcon />
                  </Box>
                </Box>
                <CardList list={sport.list} />
                {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
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
