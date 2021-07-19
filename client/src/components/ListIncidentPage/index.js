import React from "react";

import './style.css';

class ListIncidentPage extends React.Component {
  
  render() {
    return (
      <div className="listIncidentWrapper">
        <div className="header">
          <span class="image"><img src={window.location.origin + '/bancPoisson.png'} width={300}/></span>
          <span class="title">Liste des incidents</span>
        </div>
  
  
        <div>
          CONTENU LIST
        </div>
        
      </div>
    );
  }
}

export default ListIncidentPage;
