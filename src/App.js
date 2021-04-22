import React from 'react';
import { Form } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import firebaseConfig from './utils/Firebase.js';
import SearchForm from './components/Form';

function App() {
  return(
    <div className="App">
      <h1>CovidBase</h1>
      <SearchForm />
    </div>
  );
}

export default App;