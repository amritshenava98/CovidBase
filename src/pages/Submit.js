import React, {useState} from 'react';
import { Form } from 'react-bootstrap';

function SubmitForm(){

  const[selectedState, setSelectedState] = useState();

  const handleStateChange = (e) => {
    setSelectedState = e.target.value;
  }

  const options = null;
  
  return(
    <div class="submitDesign">
      <center>
        <p>Please enter the information of the resource/supply you want to list.</p>
      </center>
    <Form>
      <Form.Group controlId="cbfsState">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" onChange={handleStateChange}>
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
        <Form.Control as="select">
        {
          options
        }
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="cbfResource">
        <Form.Label>Resource</Form.Label>
        <Form.Control as="select">
          <option></option>
          <option>Bed</option>
          <option>Oxygen</option>
          <option>Remdesivir</option>
        </Form.Control>
      </Form.Group>
    </Form>
    </div>
  );
}

export default SubmitForm;