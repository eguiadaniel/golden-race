import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles({
  box: {
    backgroundColor: '#254cac',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto'
  },
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    flexGrow: 1,
    backgroundColor: '#506fbc',
    border: 0,
    borderRadius: 5,
    color: 'white',
    height: 42,
    padding: '10px 20px',
    margin: '10px 10px',
    textTransform: 'capitalize'
  },
  smallButton: {
    display: 'inline-flex',
    flexGrow: 0,
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '18px',
    borderRadius: '16px',
    height: '28px',
    minWidth: '50px',
    width: 'auto',
    padding: '0 16px'
  }
});

function TopFilters() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container maxWidth="sm" className={classes.container}>
        <Button
          className={classes.button}
          size="medium"
          variant="contained"
          disableElevation
          startIcon={<SortByAlphaIcon />}
          onClick={() => {
            alert('clicked A-Z Virtual');
          }}
        >
          Virtuals
        </Button>
        <Button
          className={classes.button}
          size="medium"
          variant="contained"
          disableElevation
          startIcon={<AssignmentIcon />}
        >
          My Bets
        </Button>
      </Container>
    </Box>
  );
}

export default TopFilters;
