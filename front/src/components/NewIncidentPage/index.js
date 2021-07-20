import React from "react";

import './style.css';

class NewIncidentPage extends React.Component {
  
  render() {
    return (
      <div className="newIncidentWrapper">
        <div className="header">
          <span class="image"><img src={window.location.origin + '/poissonMort.png'} width={300}/></span>
          <span class="title">Création d'un nouvel incident</span>
        </div>
        
          <div>
            CONTENU NEW
          </div>
      </div>
    );
  }
}

export default NewIncidentPage;
