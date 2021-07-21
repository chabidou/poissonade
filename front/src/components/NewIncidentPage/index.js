import React from "react";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import './style.css';

const incidentTypeList = ['Conditionnement', 'Livraison', 'Point Relais', 'Produit', 'Client'];
const incidentOriginList = ['Retard', 'Casier manquant', 'Temperature'];
const resolutionList = ['Email', 'Appel téléphonique', 'Remboursement partiel', 'Remboursmeent total'];

class NewIncidentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    // const [selectedDate, handleDateChange] = this.state;

    return (
      <div className="newIncidentWrapper">
        <div className="header">
          <span className="image"><img src={window.location.origin + '/poissonMort.png'} width={300} alt={'Créer un incident'} /></span>
          <span className="title">Création d'un nouvel incident</span>
        </div>
        
          <div>
            <form>
              <FormControl>
                <TextField id="outlined-basic" label="Email" variant="outlined" name="email[]"/>
                <TextField id="outlined-basic" label="Point Relais" variant="outlined" name="relayPoint"/>
                <Autocomplete
                  id="combo-box-demo"
                  options={incidentTypeList}
                  getOptionLabel={(label) => label}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Type d'incident" variant="outlined" />}
                />
                <Autocomplete
                  id="combo-box-demo"
                  options={incidentOriginList}
                  getOptionLabel={(label) => label}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Cause d'incident" variant="outlined" />}
                />
                <Autocomplete
                  id="combo-box-demo"
                  options={resolutionList}
                  getOptionLabel={(label) => label}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Résolution incident" variant="outlined" />}
                />
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
              </FormControl>
            </form>
          </div>
      </div>
    );
  }
}

export default NewIncidentPage;
