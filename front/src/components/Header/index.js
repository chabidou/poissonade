import React from "react";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link} from 'react-router-dom';

import './style.css';

function Header() {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header">
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
            <Tab
              label="Creer un incident"
              to={'/createIncident'}
              component={Link}
              value={0}
            />
            <Tab
              label="Liste des incidents"
              to={'/listIncident'}
              component={Link}
              value={1}
            />
        </Tabs>
      </Paper>
    </div>
  );
}

export default Header;
