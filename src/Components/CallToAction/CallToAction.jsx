import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Container, Box } from '@material-ui/core';

const image = {
  url: '/assets/jackpot_base.png',
  title: 'Jackpot',
  width: '100%'
};

const useStyles = makeStyles({
  root: {},
  container: {
    backgroundColor: '#dad8d8'
  },
  box: {
    padding: 20,
    borderRadius: 5
    // margin: '20px'
  },
  image: {},
  title: {
    color: 'white',
    fontSize: '3em',
    fontWeight: 900,
    paddingTop: '10%'
  },
  subtitle: {
    color: 'yellow',
    fontSize: '6em',
    fontWeight: 900,
    paddingBottom: '10%'
  }
});

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box
        className={classes.box}
        style={{
          padding: 0
          //   width: '100%',
          //   height: '250px',
          //   borderRadius: 10
        }}
      >
        <ButtonBase
          style={{
            width: '100%',
            // border: 'solid',
            borderRadius: 15,
            backgroundImage: `url(${image.url})`,
            backgroundPosition: 'center right',
            backgroundColor: '#008ff8',
            backgroundRepeat: 'no-repeat',
            boxShadow:
              '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '250px',
              display: 'flex',
              flexWrap: 'nowrap',
              justifyContent: 'space-evenly',
              flexDirection: 'column',
              alignContent: 'center',
              alignItems: 'flex-start',
              paddingLeft: '10%'
            }}
          >
            <Typography className={classes.title}>Win Jackpot</Typography>
            <Typography className={classes.subtitle}>€3,210.50</Typography>
          </Box>
        </ButtonBase>
      </Box>
    </Container>
  );
}
