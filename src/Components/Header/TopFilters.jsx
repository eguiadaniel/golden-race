import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import AssignmentIcon from '@material-ui/icons/Assignment';

// const useStyles = makeStyles({
//   TableContainer: {
//     borderRadius: 0,
//     maxWidth: 1280,
//     marginTop: 0,
//     marginRight: 'auto',
//     marginBottom: 0,
//     marginLeft: 'auto'
//   },
//   table: {
//     minWidth: 350,
//     height: 20
//   },
//   cell: {
//     // padding: 50,
//     // background: 'red'
//   }
// });

const useStyles = makeStyles({
  box: {
    backgroundColor: '#254cac',
    // maxWidth: 1280,
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
          // fullWidth
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
          // color="primary"
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
