import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import NewIncidentPage from './components/NewIncidentPage';
import ListIncidentPage from './components/ListIncidentPage';

import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
      fetch("/api")
          .then((res) => res.json())
          .then((data) => {
            console.log('---- DATA : ', data.message);
            setData(data.message)
          });
  }, []);

  return (
    <div className="App">
      <Container fixed>
        <Router>
          <Header />
      
          <p>{!data ? "Loading..." : data}</p>
      
          <Switch>
            <Route path="/createIncident">
              <NewIncidentPage />
            </Route>
            <Route path="/listIncident">
              <ListIncidentPage />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
