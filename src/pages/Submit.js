import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import firebaseConfig from '../utils/Firebase';

function SubmitForm(){

  const[selectedState, setSelectedState] = useState(0);
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

  const submitInfo = () => {
    const resRef = firebaseConfig.database.ref('Leads');
    const resList = {
      selectedState,
      selectedCity,
      selectedResource,
      information
    };
    resRef.push(resList);
  };

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
    <div className="submitDesign">
      <center>
        <p>NOTE: The site is not yet ready and under development. Please enter the information of the resource/supply you want to list.</p>
      </center>
    <Form>
      <Form.Group controlId="cbfsState">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" onChange={handleStateChange} value={selectedState}>
          <option></option>
          <option>Andhra Pradesh</option>
          <option>Delhi</option>
          <option>Karnataka</option>
          <option>Kerala</option>
          <option>Maharashtra</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="cbfsCity">
        <Form.Label>City</Form.Label>
        <Form.Control as="select" onChange={handleCityChange} value={selectedCity}>
        {
          options
        }
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="cbfsResource">
        <Form.Label>Resource</Form.Label>
        <Form.Control as="select" onChange={handleResourceChange} value={selectedResource}>
          <option></option>
          <option>Bed</option>
          <option>Oxygen</option>
          <option>Remdesivir</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="cbfsInfo">
        <Form.Label>Info</Form.Label>
        <Form.Control as="textarea" rows={6} onChange={handleInfoChange} value={information}/>
      </Form.Group>
      <center>
        <Button variant="primary" type="submit" onClick={submitInfo}>
          SUBMIT
        </Button>
      </center>
    </Form>
    </div>
  );
}

export default SubmitForm;