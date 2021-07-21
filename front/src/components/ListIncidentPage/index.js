import React from "react";
import Button from '@material-ui/core/Button';
import AddCircle from '@material-ui/icons/AddCircle';
import Link from '@material-ui/core/Link';
import List from '../List';

import './style.css';

// Column name for incident List
const listIncidentTitle = [
  'Date de l\'incident',
  'Client',
  'Point Relais',
  'Type d\'incident',
  'Cause',
  'Résolution',
  'Montant Remboursé'
,];

class ListIncidentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  
  componentDidMount() {
    fetch('http://localhost:3001/api/incidents')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            incidents: result.data
          });
        },
        (error) => {
          console.log('----- ERREUR : ', error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
  render () {
    const { error, isLoaded, incidents } = this.state;
  
    return (
      <div className="listIncidentWrapper">
        <div className="header">
          <span className="image"><img src={window.location.origin + '/bancPoisson.png'} width={300} alt={'Liste des incidents'} /></span>
          <span className="title">Liste des incidents</span>
        </div>
  
        <div className="addButton">
          <Link href="/createIncident">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircle />}
            >
              Créer un incident
            </Button>
          </Link>
        </div>

        {!isLoaded && (
          <div>Chargement des données ....</div>
        )}
        
        {error && (
          <div>Impossible de charger les incidents</div>
        )}
        
        {incidents && (
          <List titleList={listIncidentTitle} incidentList={incidents}/>
        )}

      </div>
    )
  }
  
}

export default ListIncidentPage;
