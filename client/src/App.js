import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

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
      <Header/>
      <p>{!data ? "Loading..." : data}</p>
      <BrowserRouter>
        <Switch>
          <Route path="/pouet">
            <div>POUET<a href="/prout"> vers prout</a></div>
          </Route>
          <Route path="/prout">
            <div>PROUT<a href="/pouet"> vers pouet</a></div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
