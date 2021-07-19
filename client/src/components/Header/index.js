import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <div class="header">
      <BrowserRouter>
        <ul>
          <li><Link to="/pouet">POUET</Link></li>
          <li><Link to="/prout">PROUT</Link></li>
        </ul>
      </BrowserRouter>
    </div>
  );
}

export default Header;
