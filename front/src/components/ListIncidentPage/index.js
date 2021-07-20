import React from "react";
import Button from '@material-ui/core/Button';
import AddCircle from '@material-ui/icons/AddCircle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import './style.css';

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
  
        <div class="addButton">
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
          // material-ui provide a sorted table
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date de l'incident</TableCell>
                  <TableCell>Client</TableCell>
                  <TableCell>Point Relais</TableCell>
                  <TableCell>Type d'incident</TableCell>
                  <TableCell>Cause</TableCell>
                  <TableCell>Résolution</TableCell>
                  <TableCell>Montant Remboursé</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {incidents.map((incidents) => (
                  <TableRow key={incidents.email}>
                    <TableCell>{incidents.date}</TableCell>
                    <TableCell>{incidents.email}</TableCell>
                    <TableCell>{incidents.relayPoint}</TableCell>
                    <TableCell>{incidents.type}</TableCell>
                    <TableCell>{incidents.cause}</TableCell>
                    <TableCell>{incidents.resolution}</TableCell>
                    <TableCell>{incidents.refund}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

      </div>
    )
  }
  
}

export default ListIncidentPage;
