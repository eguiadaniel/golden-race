import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Container, Box } from '@material-ui/core';

import '../CallToAction/CallToAction.scss';

const image = {
  url: '/assets/jackpot_base.png',
  title: 'Jackpot',
  width: '100%'
};

const useStyles = makeStyles({
  container: {
    backgroundColor: '#dad8d8'
  },
  box: {
    padding: 20,
    borderRadius: 5
  }
});

export default function CallToAction() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box
        className={classes.box}
        style={{
          padding: 0
        }}
      >
        <ButtonBase
          style={{
            width: '100%',
            borderRadius: 15,
            backgroundImage: `url(${image.url})`,
            backgroundPosition: 'top',
            backgroundColor: '#008ff8',
            backgroundRepeat: 'no-repeat',
            boxShadow:
              '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
            backgroundSize: 'cover'
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              flexWrap: 'nowrap',
              justifyContent: 'space-evenly',
              alignContent: 'center',
              alignItems: 'flex-start',
              paddingLeft: 40,
              lineHeight: 1
            }}
          >
            <Typography className="title">
              Win Jackpot
              <Typography component="span" className="subtitle">
                €3,210.50
              </Typography>
            </Typography>
          </Box>
        </ButtonBase>
      </Box>
    </Container>
  );
}
