import React, { useState } from 'react';
//import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Form, Button, Table } from 'react-bootstrap';
import '../App.css';
import {db} from '../utils/Firebase';
//import SubmitForm from '../pages/Submit';
import 'firebase/database';
import countryDetails from './../country_details.json';



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
  // '../country_details.json');
  // let distinct_states = null;
  // let states = countryDetails.map(states => states.admin_name)
  // .filter((value, index, self) => self.indexOf(value) === index)

  // distinct_states = states.map((states) => <option key={states} value={states}>{states}</option>);
  
  const maharashtra = ["All Maharashtra", "Kolhapur", "Mumbai", "Nagpur", "Navi Mumbai", "Pune"];
  const karnataka = ["All Karnataka", "Bangalore", "Hubali", "Karkala", "Karwar", "Kaup", "Manipal", "Mangalore", "Mysore", "Puttur", "Udupi"];
  const kerala = ["All Kerala", "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kochi", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Thiruvanthapuram", "Thrissur"];
  const gujarat = ["All Gujarat", "Ahmedabad", "Rajkot", "Surat", "Vadodara"]
  const tamil_nadu = ["All TN", "Chennai", "Coimbatore"];
  const telangana = ["All Telangana", "Hyderabad"];

  let options = null;
  let type = null;
  /*
  let distinct_states = null;
  let cityOptions  = null;
  let cities = null;

  let states = countryDetails.map(states => states.admin_name)
  .filter((value, index, self) => self.indexOf(value) === index)

  distinct_states = states.map((states) => <option key={states} value={states}>{states}</option>);
  
  if(selectedState){
    console.log(selectedState)
    let cityList = countryDetails.filter(states => states.admin_name === selectedState);
    let cities = cityList.map(states => states.city)
    cityOptions = cities.map((cities) => <option key={cities}>{cities}</option>);
    console.log(cities)
  }

*/
  if(selectedState === "Maharashtra"){
     type = maharashtra;
   }
  else if(selectedState === "Gujarat"){
    type = gujarat;
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
//  {distinct_states }
  return(
    <div className="formDesign">
    <div className="form">
      <center>
        <p>NOTE : Not all listings are available as some leads will be exhausted or becomes dead within minutes. If a resource is not available, then please connect with me on <a href="https://twitter.com/astro_shenava">Twitter</a>/<a href="https://instagram.com/astroshenava">Instagram</a> where I am sharing resources</p>
      </center>
       
      <Form>
        <Form.Group controlId="cbfState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" onChange={handleStateChange}>
         {/*} {distinct_states } */}
            <option></option>
            <option>Delhi</option>
            <option>Gujarat</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Maharashtra</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="cbfCity">
          <Form.Label>City</Form.Label>
          <Form.Control as="select" onChange={handleCityChange}> /*{handleCityChange}> */}
           {
             options 
           }
           { /*<option>Bangalore</option>
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
            <option>Bed</option>
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
