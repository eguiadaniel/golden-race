import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import DeleteIcon from '@material-ui/icons/Delete';
import Timer from '@material-ui/icons/Timer';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import SportsMmaIcon from '@material-ui/icons/SportsMma';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';

import HorseIcon from './Icons/HorseIcon';
import TimerIcon from './Icons/TimerIcon';
import EuroIcon from './Icons/EuroIcon';
import F1Icon from './Icons/F1Icon';

import './TableIcon.css';

const useStyles = makeStyles({
  paper: {
    borderRadius: 0
  },
  table: {
    minWidth: 350,
    height: 20
  },
  cell: {
    // padding: 50,
    // background: 'red'
  }
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9)
// ];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={(classes.table, 'overflow')} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
        {/* <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
        <TableBody>
          <TableRow>
            <TableCell align="center" className="cell" style={{ padding: 24 }}>
              <TimerIcon style={{ color: 'white' }} />
              <Typography noWrap>Last Minute</Typography>
            </TableCell>
            <TableCell align="center" className="cell" style={{ padding: 24 }}>
              <SportsSoccerIcon style={{ color: 'white' }} />
              <Typography noWrap>Football</Typography>
            </TableCell>
            <TableCell align="center" className="cell" style={{ padding: 24 }}>
              <HorseIcon style={{ color: 'white' }} />
              <Typography noWrap>Horse Racing</Typography>
            </TableCell>
            <TableCell align="center" className="cell" style={{ padding: 24 }}>
              <SportsMotorsportsIcon style={{ color: 'white' }} />
              <Typography noWrap>F1</Typography>
            </TableCell>
            <TableCell align="center" className="cell" style={{ padding: 24 }}>
              <MotorcycleIcon style={{ color: 'white' }} />
              <Typography noWrap>Moto GP</Typography>
            </TableCell>
            <TableCell align="center" className="cell" style={{ padding: 24 }}>
              <SportsBasketballIcon style={{ color: 'white' }} />
              <Typography noWrap>Basketball</Typography>
            </TableCell>
            <TableCell align="center" className="cell" style={{ padding: 24 }}>
              <SportsMmaIcon style={{ color: 'white' }} />
              <Typography noWrap>MMA</Typography>
            </TableCell>
            <TableCell align="center" className="cell" style={{ padding: 24 }}>
              <SportsTennisIcon style={{ color: 'white' }} />
              <Typography noWrap>Tennis</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
