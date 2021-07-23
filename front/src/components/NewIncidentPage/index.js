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
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';

import postForm from './api';

import './style.css';

// TODO : move to constant file
const incidentTypeList = ['Conditionnement', 'Livraison', 'Point Relais', 'Produit', 'Client'];
const incidentOriginList = ['Retard', 'Casier manquant', 'Temperature'];
const resolutionList = ['Email', 'Appel téléphonique', 'Remboursement partiel', 'Remboursmeent total'];
const relayPoint = ['Biocoop', 'cafe de al gare', 'Biocoop da cote', 'Biocoop den bas'];

// TODO display flashMessage after submit
// TODO migrate form to formik ?

class NewIncidentPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: null,    // must be an empty array
      date: new Date(),
      relayPoint: null,
      incidentType: null,
      incidentCause: null,
      incidentResolution: null,
    };
  
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // handle date change
  handleDateChange(newDate) {
    let date = new Date(newDate);
    this.setState({
      date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    });
  }
  
  // Incident type change
  handleInputChange(event) {
    let name = event.target.name;
    let valueForm = event.target.value;

    this.setState({
      [name]: valueForm
    });
  }
  
  // Incident type change
  handleSubmit(event, value) {
    postForm(this.state);
  }
  
  render() {
    const { date }  =this.state;

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
                              <TextField
                                type="email"
                                label="Email"
                                variant="outlined"
                                name="email"
                                onChange={this.handleInputChange}
                              />
                            </span>
                            <span className="addEmail">
                              <AddCircleOutlineIcon color="secondary" fontSize="large"/>
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                              value={this.state.date}
                              placeholder="Date"
                              onChange={date => this.handleDateChange(date)}
                              minDate={new Date()}
                              format="dd/MM/yyyy"
                              name="date"
                            />
                          </MuiPickersUtilsProvider>
                        </TableCell>
                        <TableCell>
                          <TextField
                            label="Point Relais"
                            variant="outlined"
                            name="relayPoint"
                            onChange={this.handleInputChange}
                          />
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
                            name="incidentType"
                          />
                        </TableCell>
                        <TableCell>
                          <Autocomplete
                            disabled
                            getOptionLabel={(label) => label}
                            options={[]}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Cause d'incident" variant="outlined" />}
                            name="incidentCause"
                          />
                        </TableCell>
                        <TableCell>
                          <Autocomplete
                            disabled
                            getOptionLabel={(label) => label}
                            optios={[]}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Résolution incident" variant="outlined" />}
                            name="incidentResolution"
                          />
                        </TableCell>
                      </TableRow>
                      
                      <TableRow>
                        <TableCell colSpan={3}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmit}
                          >
                            Sauvegarder
                          </Button>
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
