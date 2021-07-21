import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './style.css';

/**
 *
 * Display a result list
 *
 * TODO define prop-types of parameter
 *
 * @param titleList
 * @param incidentList
 */
const List = ({titleList, incidentList}) => {
  if (!incidentList)
    return;

  // material-ui provide a sorted table
  return (
    <div className="list">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {titleList.map(title => (
                <TableCell key={title}>{title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {incidentList.map((incident) => (
              <TableRow key={incident.email}>
                <TableCell>{incident.date}</TableCell>
                <TableCell>{incident.email}</TableCell>
                <TableCell>{incident.relayPoint}</TableCell>
                <TableCell>{incident.type}</TableCell>
                <TableCell>{incident.cause}</TableCell>
                <TableCell>{incident.resolution}</TableCell>
                <TableCell>{incident.refund}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default List;
