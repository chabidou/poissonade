import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import NewIncidentPage from './components/NewIncidentPage';
import ListIncidentPage from './components/ListIncidentPage';

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Router>
          <Header />

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
