import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import firebaseConfig from './utils/Firebase.js';
import SearchForm from './components/Form';
import SubmitForm from './pages/Submit';

function App() {
  return(
    <div className="container">
      <div className="App">
        <h1>CovidBase</h1>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SearchForm />
            <Link to="/submit">
              <center>
                <Button>Have a Lead?</Button>
              </center>
            </Link>
          </Route>
          <Route exact path="/submit">
            <SubmitForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;