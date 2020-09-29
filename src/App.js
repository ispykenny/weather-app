import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Form from './Components/Form';
import Weatherlist from './Components/Weatherlist';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <div className="inner">
        <Router>
          <Form/>
          <Switch>
            <Route 
              path="/"
              exact={true}
              render={() => <Home/> }
            />
            <Route 
              path="/:location" 
              render={(props) => <Weatherlist slug={props}/> }
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
