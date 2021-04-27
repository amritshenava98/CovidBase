import React, { useState } from 'react';
//import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Form, Button, Table } from 'react-bootstrap';
import '../App.css';
import {db} from '../utils/Firebase';
//import SubmitForm from '../pages/Submit';
import 'firebase/database';

function SearchForm(){
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedResource, setSelectedResource] = useState();
  const [lists, setList] = useState([]);

  const [search,setSearch] = useState(false);
  
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    
  }
  
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  }

  const handleResourceChange = (e) => {
    setSelectedResource(e.target.value);
  }
 
  /*
  const handleListChange = (e) => {
    setList(e.target.value);
  }
  */

  const checkNull = () => {
    
  }

  const searchFunc = (e) => {
    e.preventDefault();
    const resRef = db.ref("leads");
    resRef.once("value").then( // .once("value") returns a promise, every promise returns a value that can be used using .then()
      function(snap){
        let resList = [];
        const allRecords = snap.val(); // This is an object not an array
        console.log(allRecords, selectedState, selectedCity, selectedResource);

        for(const record in allRecords) { // Since allRecords is an object, this is how you can change it to an Array
          resList.push(allRecords[record]); 
        } 

        setList([...resList]); // Using the power of spread operator you can refine a broken array just in case, firebase sometimes returns broken arrays

      }
    );
    setSearch(!search);
  }

  // It's a PITA because Firebase cannot save arrays, it has to be an object or else it get's converted to one.

  const maharashtra = ["", "Mumbai", "Nagpur", "Pune"];
  const karnataka = ["", "Bangalore", "Hubali","Mangalore", "Udupi", "Puttur", "Karwar", "Manipal", "Karkala", "Kaup"];
  const kerala = ["", "Kochi", "Trivandrum", "Kollam", "Kasaragod", "Kottayam", "Pallakad"];

  let options = null;
  let type = null;

  if(selectedState === "Maharashtra"){
    type = maharashtra;
  }
  else if(selectedState === "Karnataka"){
    type = karnataka;
  }
  else if(selectedState === "Kerala"){
    type = kerala;
  }

  if(type){
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return(
    <div className="formDesign">
    <div className="form">
      <center>
        <p>CovidBase listings are not yet available. Please connect with me on Twitter/Instagram where I am sharing resources</p>
      </center>
      <Form>
        <Form.Group controlId="cbfState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" onChange={handleStateChange}>
            <option></option>
            <option>Delhi</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Maharashtra</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="cbfCity">
          <Form.Label>City</Form.Label>
          <Form.Control as="select" onChange={handleCityChange}>
           {

             options
           }
           {/*<option>Bangalore</option>
            <option>Mangalore</option>
            <option>Udupi</option>
            <option>Puttur</option>
            <option>Mulki</option>
            <option>Karkala</option> */}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="cbfResource">
          <Form.Label>Resource</Form.Label>
          <Form.Control as="select" onChange={handleResourceChange}>
            <option></option>
            <option>Beds</option>
            <option>Plasma</option>
            <option>Remdesivir</option>
            <option>Oxygen</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <center>
        <Button variant="primary" type="submit" onClick={searchFunc}>
            SEARCH
        </Button>
      </center>
      </div>
      {search? <Table>
        <thead>
          <tr>
            <th>State</th>
            <th>City</th>
            <th>Resource</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {
            lists.map((data, index) => 
            {
              return (data.state === selectedState && 
              data.city === selectedCity && 
              data.resource === selectedResource) ?  
              <tr key={`data-${index}`}>{/* Keys are important because that's how react differentiates between objects in a list*/}
                <td>{data.state}</td>
                <td>{data.city}</td>
                <td>{data.resource}</td>
                <td>{data.info}</td>
              </tr> : null
            }
           )
          }
         </tbody>
      </Table>:""}
    </div>
  );
}

export default SearchForm;
