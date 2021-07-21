import React from "react";

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import './style.css';

const incidentTypeList = ['Conditionnement', 'Livraison', 'Point Relais', 'Produit', 'Client'];
const incidentOriginList = ['Retard', 'Casier manquant', 'Temperature'];
const resolutionList = ['Email', 'Appel téléphonique', 'Remboursement partiel', 'Remboursmeent total'];
const relayPoint = ['Biocoop', 'cafe de al gare', 'Biocoop da cote', 'Biocoop den bas'];

// TODO display flashMessage after submit

class NewIncidentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  // Incident type change
  handleTypeChange(event, value) {
    console.log('---- TYPE : ', event, '-------', value);
  }
  render() {
    // const [selectedDate, handleTypeChange] = this.state;

    return (
      <div className="newIncidentWrapper">
        <div className="header">
          <span className="image"><img src={window.location.origin + '/poissonMort.png'} width={300} alt={'Créer un incident'} /></span>
          <span className="title">Création d'un nouvel incident</span>
        </div>
        
          <div className="form">
            <form>
              <FormControl>
                <TableContainer component={Paper}>
                  <Table>
                    <TableBody>
                      
                      <TableRow>
                        <TableCell>
                          <div className="emailArea">
                            <span className="email">
                              <TextField type="email" label="Email" variant="outlined" name="email[]"/>
                            </span>
                            <span className="addEmail">
                              <AddCircleOutlineIcon color="secondary" fontSize="large"/>
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              clearable
                              // value={selectedDate}
                              placeholder="Date"
                              // onChange={date => handleDateChange(date)}
                              minDate={new Date()}
                              format="MM/dd/yyyy"
                              name="Date"
                            />
                          </MuiPickersUtilsProvider>
                        </TableCell>
                        <TableCell>
                          <TextField label="Point Relais" variant="outlined" name="relayPoint"/>
                        </TableCell>
                      </TableRow>
                      
                      <TableRow>
                        <TableCell>
                          <Autocomplete
                            onInputChange={(event, value) => this.handleTypeChange(event, value)}
                            options={incidentTypeList}
                            getOptionLabel={(label) => label}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Type d'incident" variant="outlined" />}
                          />
                        </TableCell>
                        <TableCell>
                          <Autocomplete
                            disabled
                            getOptionLabel={(label) => label}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Cause d'incident" variant="outlined" />}
                          />
                        </TableCell>
                        <TableCell>
                          <Autocomplete
                            disabled
                            getOptionLabel={(label) => label}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Résolution incident" variant="outlined" />}
                          />
                        </TableCell>
                      </TableRow>
                      
                      <TableRow>
                        <TableCell colSpan={3}>
                          <Button type="submit" variant="contained" color="primary">Sauvegarder</Button>
                        </TableCell>
                      </TableRow>
                      
                    </TableBody>
                  </Table>
                </TableContainer>
                
              </FormControl>
            </form>
          </div>
      </div>
    );
  }
}

export default NewIncidentPage;
