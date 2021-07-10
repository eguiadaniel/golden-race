import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345
  },
  image: {
    minHeight: 200
  }
});

function CardItem({ sport }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={sport.title}
            height="250"
            image={sport.image}
            title={sport.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {sport.title}
            </Typography>
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
  );
}

export default CardItem;
