import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  
  return (

    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/country/:countryName">
          <CountryDetails/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
 
  );
}

export default App;
