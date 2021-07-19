import React from "react";
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';

import './style.css';

function Header() {
  let { pathname } = useLocation();
  
  return (
    <div className="header">
      <Nav
        variant="tabs"
        activeKey={pathname}
      >
        <Nav.Item>
          <Nav.Link eventKey="/createIncident" href="/createIncident">Créer un incident</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/listIncident" href="/listIncident">Liste des incidents</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Header;
