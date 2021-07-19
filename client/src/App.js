import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
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
      <Router>
        <Header />
    
        <p>{!data ? "Loading..." : data}</p>
      
        <Switch>
          <Route path="/createIncident">
            <div>
              createIncident
            </div>
          </Route>
          <Route path="/listIncident">
            <div>listIncident</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
