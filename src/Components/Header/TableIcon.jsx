import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import Typography from '@material-ui/core/Typography';

import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import SportsMmaIcon from '@material-ui/icons/SportsMma';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';

import HorseIcon from './Icons/HorseIcon';
import TimerIcon from './Icons/TimerIcon';

import './TableIcon.css';

const useStyles = makeStyles({
  TableContainer: {
    borderRadius: 0,
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    backgroundColor: '#254cac;'
  },
  TableContainerInner: {
    borderRadius: 0,
    maxWidth: 1280,
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto'
  },
  table: {
    minWidth: 350,
    height: 20
  },
  cell: {
    borderBottom: '1px solid pink !important;'
  }
});

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.TableContainer}>
      <TableContainer className={classes.TableContainerInner}>
        <Table
          className={(classes.table, 'overflow')}
          aria-label="simple table"
        >
          <TableBody>
            <TableRow>
              <TableCell
                align="center"
                className="cell"
                style={{ padding: 24 }}
              >
                <TimerIcon style={{ color: 'white' }} />
                <Typography noWrap>Last Minute</Typography>
              </TableCell>
              <TableCell
                align="center"
                className="cell"
                style={{ padding: 24 }}
              >
                <SportsSoccerIcon style={{ color: 'white' }} />
                <Typography noWrap>Football</Typography>
              </TableCell>
              <TableCell
                align="center"
                className="cell"
                style={{ padding: 24 }}
              >
                <HorseIcon style={{ color: 'white' }} />
                <Typography noWrap>Horse Racing</Typography>
              </TableCell>
              <TableCell
                align="center"
                className="cell"
                style={{ padding: 24 }}
              >
                <SportsMotorsportsIcon style={{ color: 'white' }} />
                <Typography noWrap>F1</Typography>
              </TableCell>
              <TableCell
                align="center"
                className="cell"
                style={{ padding: 24 }}
              >
                <MotorcycleIcon style={{ color: 'white' }} />
                <Typography noWrap>Moto GP</Typography>
              </TableCell>
              <TableCell
                align="center"
                className="cell"
                style={{ padding: 24 }}
              >
                <SportsBasketballIcon style={{ color: 'white' }} />
                <Typography noWrap>Basketball</Typography>
              </TableCell>
              <TableCell
                align="center"
                className="cell"
                style={{ padding: 24 }}
              >
                <SportsMmaIcon style={{ color: 'white' }} />
                <Typography noWrap>MMA</Typography>
              </TableCell>
              <TableCell
                align="center"
                className="cell"
                style={{ padding: 24 }}
              >
                <SportsTennisIcon style={{ color: 'white' }} />
                <Typography noWrap>Tennis</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </TableContainer>
  );
}
