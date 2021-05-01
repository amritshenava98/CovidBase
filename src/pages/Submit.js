import React, {useState} from 'react';
import { Redirect } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import { db } from '../utils/Firebase';
import 'firebase/database';
import countryDetails from './../country_details.json';

function SubmitForm(){

  const[selectedState, setSelectedState] = useState();
  const[selectedCity, setSelectedCity] = useState();
  const[selectedResource, setSelectedResource] = useState();
  const[information, setInformation] = useState();

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  }
 
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  }

  const handleResourceChange = (e) => {
    setSelectedResource(e.target.value);
  }

  const handleInfoChange = (e) => {
    setInformation(e.target.value);
  }

  const submitInfo = (e) => {
    e.preventDefault();
    if(selectedState && selectedCity && selectedResource && information){
      var resRef = db.ref('leads');
      var resList = {
        state: selectedState,
        city: selectedCity,
        resource: selectedResource,
        info: information
      };
      resRef.push(resList);
      alert("Successfully submitted!")
      return (<Redirect to="/" push={true}/>);
    }
    else{
      alert("Fields cannot be Empty");
    }
  };

  /* let distinct_states = null;
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
    // type= cityList.city
    console.log(cities)
  } */
  

  const maharashtra = ["", "Mumbai", "Nagpur", "Pune"];
  const karnataka = ["All Karnataka", "Bangalore", "Hubali","Mangalore", "Udupi", "Puttur", "Karwar", "Manipal", "Karkala", "Kaup"];
  const kerala = ["All Kerala", "Kochi", "Trivandrum", "Kollam", "Kasaragod", "Kottayam", "Pallakad", ""];
  const gujarat = ["All Gujarat", "Ahmedabad", "Rajkot", "Surat", "Vadodara"];
  const telangana = ["All Telangana", "Hyderabad"];
  const tamil_nadu = ["All TN", "Chennai", "Coimbatore"];

  let options = null;
  let type = null;

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
  else if(selectedState === "Telangana"){
    type = kerala;
  }

  if(type){
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  
  return(
    <div className="submitDesign">
      <center>
        <h2>Submit</h2>
        <p>NOTE: Not all states and cities ar eavailable yet as we are in the process of adding it. Please enter the information of the resource/supply you want to list.</p>
      </center>
    <Form>
      <Form.Group controlId="cbfsState">
        <Form.Label>State <span class="red">*</span></Form.Label>
        <Form.Control as="select" onChange={handleStateChange}>
       {/*} {distinct_states } */}
          <option></option>
          <option>Andhra Pradesh</option>
          <option>Delhi</option>
          <option>Gujarat</option>
          <option>Karnataka</option>
          <option>Kerala</option>
          <option>Maharashtra</option>
          <option>Telangana</option>*/}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="cbfsCity">
        <Form.Label>City <span class="red">*</span></Form.Label>
        <Form.Control as="select" onChange={handleCityChange} value={selectedCity}>
        {
             options
        }
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="cbfsResource">
        <Form.Label>Resource <span class="red">*</span></Form.Label>
        <Form.Control as="select" onChange={handleResourceChange}>
          <option></option>
          <option>Bed</option>
          <option>Oxygen</option>
          <option>Remdesivir</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="cbfsInfo">
        <Form.Label>Info <span class="red">*</span></Form.Label>
        <Form.Control as="textarea" rows={6} onChange={handleInfoChange}/>
      </Form.Group>
      <center>
        <Button variant="primary" type="submit" onClick={submitInfo}>
          SUBMIT
        </Button>
      </center>
    </Form>
    <br></br>
    </div>
  );
}

export default SubmitForm;