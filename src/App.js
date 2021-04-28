import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import covidbase from './images/covidbase.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import firebaseConfig from './utils/Firebase.js';
import SearchForm from './components/Form';
import SubmitForm from './pages/Submit';
import Plasma from './pages/Plasma';

function App() {

  const [leads,setLeads] = useState(false);
  
  return(
    <div className="container">
      <BrowserRouter>
        <div className="App">
          <Link to="/"><img src={covidbase} alt="logo"/></Link>
          <a href="https://www.instagram.com/covidbase_hq/">
            <span class="icon-instagram"></span>
          </a>
        </div>
        <Switch>
          <Route exact path="/">
            <SearchForm />
              <center>
                <Button onClick={()=>{setLeads(!leads)}}>Want to Help?</Button>
              </center>
              {leads? <div class="flex">
                <center>
                  <Link to="/submit">
                    <Button>Have a Lead?</Button>
                  </Link>
                </center>
                <center>
                  <Link to="/plasma">
                    <Button>Plasma Donors</Button>
                  </Link>
                </center>
              </div>:""}
          </Route>
          <Route exact path="/submit">
            <SubmitForm />
          </Route>
          <Route exact path="/plasma">
            <Plasma />
          </Route>
          { /*<Route exact path="/donate">
            <Donate />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;